<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.'
    ]);
    exit;
}

function clean_input(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return filter_var($value, FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW) ?: '';
}

function load_smtp_config(): array
{
    $config = [
        'host' => getenv('SMTP_HOST') ?: '',
        'port' => (int) (getenv('SMTP_PORT') ?: 587),
        'username' => getenv('SMTP_USERNAME') ?: '',
        'password' => getenv('SMTP_PASSWORD') ?: '',
        'encryption' => strtolower((string) (getenv('SMTP_ENCRYPTION') ?: 'tls')),
        'from_email' => getenv('SMTP_FROM_EMAIL') ?: '',
        'from_name' => getenv('SMTP_FROM_NAME') ?: 'SS Masala Website',
        'to_email' => getenv('INQUIRY_TO_EMAIL') ?: 'MYSSMASALA@GMAIL.COM',
        'timeout' => 20,
    ];

    $configFile = __DIR__ . DIRECTORY_SEPARATOR . 'smtp_config.php';
    if (is_file($configFile)) {
        $fileConfig = require $configFile;
        if (is_array($fileConfig)) {
            $config = array_merge($config, $fileConfig);
        }
    }

    return $config;
}

function smtp_expect($socket, array $allowedCodes): string
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    if ($response === '') {
        throw new RuntimeException('SMTP server did not respond.');
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $allowedCodes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }

    return $response;
}

function smtp_command($socket, string $command, array $allowedCodes): string
{
    fwrite($socket, $command . "\r\n");
    return smtp_expect($socket, $allowedCodes);
}

function smtp_send_mail(array $config, string $toEmail, string $replyTo, string $subject, string $body): void
{
    if (
        $config['host'] === '' ||
        $config['username'] === '' ||
        $config['password'] === '' ||
        $config['from_email'] === ''
    ) {
        throw new RuntimeException('SMTP configuration is incomplete.');
    }

    $transportHost = $config['host'];
    if ($config['encryption'] === 'ssl') {
        $transportHost = 'ssl://' . $transportHost;
    }

    $socket = @stream_socket_client(
        $transportHost . ':' . (int) $config['port'],
        $errorNumber,
        $errorString,
        (int) $config['timeout'],
        STREAM_CLIENT_CONNECT
    );

    if (!is_resource($socket)) {
        throw new RuntimeException('SMTP connection failed: ' . $errorString . ' (' . $errorNumber . ')');
    }

    stream_set_timeout($socket, (int) $config['timeout']);

    try {
        smtp_expect($socket, [220]);
        smtp_command($socket, 'EHLO localhost', [250]);

        if ($config['encryption'] === 'tls') {
            smtp_command($socket, 'STARTTLS', [220]);
            $cryptoEnabled = stream_socket_enable_crypto(
                $socket,
                true,
                STREAM_CRYPTO_METHOD_TLS_CLIENT
            );

            if ($cryptoEnabled !== true) {
                throw new RuntimeException('Unable to start TLS encryption.');
            }

            smtp_command($socket, 'EHLO localhost', [250]);
        }

        smtp_command($socket, 'AUTH LOGIN', [334]);
        smtp_command($socket, base64_encode($config['username']), [334]);
        smtp_command($socket, base64_encode($config['password']), [235]);
        smtp_command($socket, 'MAIL FROM:<' . $config['from_email'] . '>', [250]);
        smtp_command($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
        smtp_command($socket, 'DATA', [354]);

        $encodedSubject = function_exists('mb_encode_mimeheader')
            ? mb_encode_mimeheader($subject, 'UTF-8')
            : $subject;

        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
            'To: <' . $toEmail . '>',
            'Reply-To: ' . $replyTo,
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
        ];

        $messageLines = preg_split("/\r\n|\n|\r/", $body) ?: [];
        $safeLines = [];
        foreach ($messageLines as $line) {
            $safeLines[] = (isset($line[0]) && $line[0] === '.') ? '.' . $line : $line;
        }

        $payload = implode("\r\n", $headers) . "\r\n\r\n" . implode("\r\n", $safeLines) . "\r\n.";
        smtp_command($socket, $payload, [250]);
        smtp_command($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

$name = clean_input($_POST['Name'] ?? '');
$email = clean_input($_POST['Email'] ?? '');
$phone = clean_input($_POST['Phone'] ?? '');
$company = clean_input($_POST['Company'] ?? '');
$product = clean_input($_POST['Product'] ?? '');
$message = trim((string) ($_POST['Message'] ?? ''));

if ($name === '' || $email === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill all required fields.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);
    exit;
}

$config = load_smtp_config();
$subject = 'New Product Inquiry - SS Masala Website';
$submittedAt = date('Y-m-d H:i:s');
$body = implode("\n", [
    'New inquiry received from SS Masala website.',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Company: ' . ($company !== '' ? $company : 'N/A'),
    'Interested Product: ' . ($product !== '' ? $product : 'N/A'),
    'Submitted At: ' . $submittedAt,
    '',
    'Message:',
    $message,
]);

try {
    smtp_send_mail($config, $config['to_email'], $email, $subject, $body);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you. Your inquiry has been sent successfully.'
    ]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'SMTP send failed. Check SMTP settings in smtp_config.php or environment variables.',
    ]);
}
