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

$name = clean_input($_POST['Name'] ?? '');
$email = clean_input($_POST['Email'] ?? '');
$phone = clean_input($_POST['Phone'] ?? '');
$company = clean_input($_POST['Company'] ?? '');
$product = clean_input($_POST['Product'] ?? '');
$message = trim((string)($_POST['Message'] ?? ''));

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

$to = 'MYSSMASALA@GMAIL.COM';
$subject = 'New Product Inquiry - SS Masala Website';
$submittedAt = date('Y-m-d H:i:s');

$bodyLines = [
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
    $message
];
$body = implode("\n", $bodyLines);

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: SS Masala Website <no-reply@ssmasala.in>';
$headers[] = 'Reply-To: ' . $email;
$headersString = implode("\r\n", $headers);

$sent = @mail($to, $subject, $body, $headersString);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Inquiry could not be sent right now. Please try again shortly.'
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Thank you. Your inquiry has been sent to MYSSMASALA@GMAIL.COM.'
]);

