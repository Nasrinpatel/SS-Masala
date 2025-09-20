 <!--==================================================-->
    <!-- Start SS Masala Footer Area -->
    <!--==================================================-->
    <style>
      .footer-logo img {
          max-width: 100%;
          height: auto;
          max-height: 98px; 
      }
      /* .logo {
          display: flex;
          align-items: center;
      }
      .main_sticky img {
          max-width: 100%;
          height: auto;
          max-height: 98px;
      } */
      
    </style>
    <div class="footer-area">
     
      <div class="container">
        <!-- <div class="row footer wow custom-anim-left">
          <div class="col-lg-12">
            <div class="footer-logo text-center">
              <a href="index.html"
                ><img src="assets/images/logo1.png" alt="logo"
              /></a>
            </div>
          </div>
        </div> -->
        <div class="row">
        <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
          <div class="foter-single-box wow custom-anim-left">
            <div class="footer-wiget-title">
              <h5>About SS Masala</h5>
            </div>
            <div class="footer-wiget-desc">
              <p style="color: #aeb3b7;">SS Masala brings you the finest, purest spices sourced directly from organic farms. 
              Our spices are carefully selected, processed, and packaged to preserve their natural aroma and potency.</p>
            </div>

          </div>
        </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="foter-single-box wow custom-anim-left">
              <div class="footer-wiget-title">
                <h5>Facilities</h5>
              </div>
              <div class="footer-wiget-menu">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Popular Spices</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Gallery</a></li>
                </ul>
              </div>
            </div>
          </div>
         
          <div class="col-lg-4 col-md-6">
            <div class="footer-wiget-quick-contanct wow custom-anim-left">
              <div class="footer-wiget-title">
                <h5>Contact</h5>
              </div>
              <div class="footer-wiget-contact-menu">
                <ul>
                  <li>
                    <i class="fa-solid fa-location-dot"></i> Bharuch, Gujarat 392001,India</span>
                  </li>
                  <li>
                    <i class="fa-regular fa-envelope"></i>MYSSMASALA@GMAIL.COM
                  </li>
                  <li><i class="fa-solid fa-phone"></i>+91 9725820297</li>
                  <!-- <li><i class="fa-regular fa-clock"></i>09 am - 08 pm</li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row footer-line align-items-center wow custom-anim-left">
          <div class="col-lg-6 col-md-8">
            <div class="copyright-text">
              <p>Copyright @ 2025 <span>SS Masala</span> ALL Right Reserved</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="footer-social-icon">
              <ul>
                <li>
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==================================================-->
    <!-- End SS Masala Footer Area -->
    <!--==================================================-->

    <!--==================================================-->
    <!-- Start scrollup section Area -->
    <!--==================================================-->

    <div id="progress" class="progress hide">
      <div id="progress-value"></div>
    </div>

    <!--==================================================-->
    <!-- Start scrollup section Area -->
    <!--==================================================-->

    <script src="assets/js/vendor/jquery-3.7.1.min.js"></script>

    <script src="assets/js/odometer.min.js"></script>

    <script src="assets/js/bootstrap.min.js"></script>

    <script src="assets/js/imagesloaded.pkgd.min.js"></script>

    <script src="assets/js/isotope.pkgd.min.js"></script>

    <script src="venobox/venobox.js"></script>

    <script src="venobox/venobox.min.js"></script>

    <script src="assets/js/jquery.meanmenu.js"></script>

    <script src="assets/js/jquery.scrollUp.js"></script>

    <script src="assets/js/appear.js"></script>

    <script src="assets/js/magnific-popup-js.html"></script>

    <script src="assets/js/jquery.barfiller.js"></script>

    <script src="assets/js/swiper-bundle.js"></script>

    <script src="assets/js/owl.carousel.min.js"></script>

    <script src="assets/js/theme.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/my.js"></script>
    <script src="assets/js/main.js"></script>
    <!-- Owl Carousel Init -->
    <script>
    $(document).ready(function(){
      $(".hero-slider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:800,
        nav:true,
        dots:true
      });
    });

    </script>
    <script>
  $(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
      // Exclude links that don't have href with #
      if (this.hash !== "") {
        event.preventDefault();
        
        var target = $(this.hash);
        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 80
          }, 1000);
        }
      }
    });
    
    // Update active navigation link on scroll
    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      
      // Add/remove .active class based on scroll position
      $('section').each(function(i) {
        if ($(this).position().top - 100 <= scrollDistance) {
          $('.nav_scroll li a.active').removeClass('active');
          $('.nav_scroll li a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
      });
      
      // Show/hide back to top button
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });
    
    // Initialize Owl Carousel
    $(".hero-slider").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      smartSpeed:800,
      nav:true,
      dots:true
    });
  });
</script>
  </body>

</html>