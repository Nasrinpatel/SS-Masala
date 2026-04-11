
/*----------theme js-----------------*/

/*====================================
01. Header Search js
02. Mobile Menu js
03. header sticky js
04. Loder js
05. odometer js
06. venobox js
07. magnificPopup Js
08. Swiper Active
09. testi active js
10. testimonial active js
11. accordion js
12. barfiller script js

=====================================*/

(function ($) {
  "use strict";

  //Header Search js
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Mobile Menu js
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  // header sticky js
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  

    // Loder js //
  // Reliable preloader behavior:
  // 1) Always reset stale "loaded" class on startup.
  // 2) Keep loader visible for a minimum duration.
  // 3) Hide on window load with fallback.
  var loaderStartAt = Date.now();
  $("body").removeClass("loaded");

  function hidePreloaderSafely() {
    var minVisibleMs = 900;
    var elapsed = Date.now() - loaderStartAt;
    var wait = Math.max(0, minVisibleMs - elapsed);

    setTimeout(function () {
      $("body").addClass("loaded");
    }, wait);
  }

  $(window).on("load", hidePreloaderSafely);

  // Fallback: if load event is delayed by external assets.
  setTimeout(hidePreloaderSafely, 4500);




  ///////////////////////////////
  //odometer js

  $(document).ready(function () {
    $(".odometer-wrapper").appear(function () {
      let count = $(this).attr("data-count");
      let odometer = $(this).closest(".odometer-wrapper").find(".odometer");

      setTimeout(function () {
        odometer.html(count);
      }, 500);
    });
  });

  // venobox js
  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

	//magnificPopup Js
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });


    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

      if ($.fn.isotope) {
          
          var $portfolio = $('.image_load');
  
          $portfolio.isotope({
              itemSelector: '.grid-item',
              filter: '*',
              resizesContainer: true,
              layoutMode: 'masonry',
              transitionDuration: '0.8s'
          });
  
          $('.menu-filtering li').on('click', function () {
              $('.menu-filtering li').removeClass('current_menu_item');
              $(this).addClass('current_menu_item');
              var selector = $(this).attr('data-filter');
              $portfolio.isotope({
                  filter: selector,
              });
          });
  
      }
    });

     /*  Cart Plus Minus Button
    /*----------------------------------------*/
    
    $('.ctnbutton').on('click', function () {
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          // Don't allow decrementing below zero
          if (oldValue > 1) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 1;
          }
      }
      $button.parent().find('input').val(newVal);
  });

  // menu button - start
  $(document).ready(function() {
      $('.close_btn, .cart_sidebar_overlay').on('click', function() {
          $('.cart_sidebar').removeClass('active');
          $('.cart_sidebar_overlay').removeClass('active');
      });

      $('.cart_btn').on('click', function() {
          $('.cart_sidebar').addClass('active');
          $('.cart_sidebar_overlay').addClass('active');
      });
  });

  // restho-hero-active js
  var slider = new Swiper('.restho-slider-active', {
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

    // Navigation arrows
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
	});


    // restho-hero-active js
    var slider = new Swiper('.restho-hero-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        '1400': {
          slidesPerView: 1,
        },
        '1200': {
          slidesPerView: 1,
        },
        '992': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
  
      // Navigation arrows
      navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
      },
    });


  // menu active js
  var swiper = new Swiper(".menu-active", {
    slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

      1920: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // team active js
  var swiper = new Swiper(".team-active", {
    slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

      1920: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


    // testi active js
    var swiper = new Swiper(".testi-active", {
      slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
  
        1920: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // testi2 active js
    var swiper = new Swiper(".testi2-active", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 3,
        },
      },
    });
    

    // testi3 active js
    var swiper = new Swiper(".testi3-active", {
      slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
  
        1920: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
          // Navigation arrows
      navigation: {
        nextEl: ".testi-next",
        prevEl: ".testi-prev",
      },
    });
  

   // testi3 active js
   var swiper = new Swiper(".band-active", {
    slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },

      1920: {
        slidesPerView: 5,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  jQuery(document).ready(function ($) {
    "use strict";


    // =======< accordion js >========
    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    jQuery(document).ready(function ($) {
      "use strict";

      $(".accordion2 > li:eq(0) a").addClass("active").next().slideDown();
      $(".accordion2 a").on("click", function (j) {
        let dropDown = $(this).closest("li").find("p");

        $(this).closest(".accordion2").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this).closest(".accordion2").find("a.active").removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
      });
    });

    //=====< barfiller script js>====
    $("#bar1").barfiller({
      duration: 7000,
    });
    $("#bar2").barfiller({
      duration: 7000,
    });
    $("#bar3").barfiller({
      duration: 7000,
    });
    $("#bar4").barfiller({
      duration: 7000,
    });
    $("#bar5").barfiller({
      duration: 7000,
    }); 
   
  });

// count down timer:
  $(document).ready(function() {

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.now();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    // count down timer:
    var deadline = new Date(Date.now() + 385 * 23 * 59 * 59 * 1000);
    initializeClock('clockdiv', deadline);
});



  

  // UI polish interactions
  $(document).ready(function () {
        var targets = [
      ".section-title",
      ".section-desc",
      ".about-thumb",
      ".about-content",
      ".single-flip-box",
      ".counter-single-box",
      ".shop-single-box",
      ".gallery-thumb-box",
      ".review-slider-card",
      ".contact-form-box.inner",
      ".footer-area .foter-single-box",
      ".footer-area .footer-wiget-quick-contanct"
    ].join(", ");
    $(targets).attr("data-reveal", "");

    // Global section animation stagger
    $("section, .coutner-area, .testimonial-area, .footer-area").each(function () {
      $(this)
        .find("[data-reveal]")
        .each(function (i) {
          this.style.setProperty("--reveal-delay", (i % 6) * 0.07 + "s");
        });
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        observer.observe(el);
      });
    } else {
      $("[data-reveal]").addClass("is-visible");
    }

    var body = $("body");
    var menuLinks = $(".nav_scroll li a[href^='#']");

    function setScrolledState() {
      body.toggleClass("has-scrolled", $(window).scrollTop() > 12);
    }

    function updateActiveMenu() {
      var scrollPos = $(window).scrollTop() + 130;
      var currentId = "";

      $("section[id]").each(function () {
        if ($(this).offset().top <= scrollPos) {
          currentId = this.id;
        }
      });

      if (currentId) {
        menuLinks.removeClass("active");
        menuLinks.filter("[href='#" + currentId + "']").addClass("active");
      }
    }

    setScrolledState();
    updateActiveMenu();

    $(window).on("scroll", function () {
      setScrolledState();
      updateActiveMenu();
    });
  });

  // Second pass enhancements
  $(document).ready(function () {
    // Badge color variants by label text
    $(".spice-badge").each(function () {
      var text = $(this).text().toLowerCase().replace(/\s+/g, "");
      $(this).addClass("badge-" + text);
    });

    // Add lightweight CTA in every product card
    $(".shop-single-box .shop-content").each(function () {
      if (!$(this).find(".product-card-link").length) {
        $(this).append('<a class="product-card-link" href="#inquiry">Inquire Now</a>');
      }
    });

    // Ken Burns effect only on current hero slide
    function markActiveHeroSlide() {
      $(".hero-slider .single-slide").removeClass("is-active-slide");
      $(".hero-slider .owl-item.active .single-slide").first().addClass("is-active-slide");
    }

    $(".hero-slider").on("initialized.owl.carousel changed.owl.carousel translated.owl.carousel", function () {
      markActiveHeroSlide();
    });

    setTimeout(markActiveHeroSlide, 80);
  });

  // Inquiry form interactions and submit handling
  $(document).ready(function () {
    var inquiryForm = document.getElementById("inquiryForm");
    if (!inquiryForm) {
      return;
    }

    var messageField = inquiryForm.querySelector('textarea[name="Message"]');
    var charCount = document.getElementById("charCount");
    var submitButton = inquiryForm.querySelector('button[type="submit"]');
    var formStatus = document.getElementById("formStatus");
    var defaultButtonHtml = submitButton ? submitButton.innerHTML : "Send Inquiry";

    function updateCharCount() {
      if (!messageField || !charCount) {
        return;
      }
      charCount.textContent = messageField.value.length;
    }

    function setFormStatus(type, text) {
      if (!formStatus) {
        return;
      }
      formStatus.className = "form-status show " + (type || "");
      formStatus.textContent = text || "";
    }

    if (messageField) {
      messageField.addEventListener("input", updateCharCount);
      updateCharCount();
    }

    inquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending <i class="bi bi-arrow-repeat"></i>';
      }
      setFormStatus("", "");

      fetch("send_inquiry.php", {
        method: "POST",
        body: new FormData(inquiryForm)
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          if (result && result.success) {
            setFormStatus("success", result.message || "Your inquiry has been sent successfully.");
            inquiryForm.reset();
            updateCharCount();
            return;
          }
          setFormStatus("error", (result && result.message) ? result.message : "Unable to send inquiry right now.");
        })
        .catch(function () {
          setFormStatus("error", "Something went wrong while sending your inquiry. Please try again.");
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = defaultButtonHtml;
          }
        });
    });
  });
})(jQuery);
