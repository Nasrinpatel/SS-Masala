
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
    // Loder  //
    $(function () {
      $('body').addClass('loaded');
  });




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
          slidesPerView: 1,
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
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
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



  
})(jQuery);

