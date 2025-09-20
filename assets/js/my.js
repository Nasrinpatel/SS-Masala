

// scroll up

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#C0392B${scrollValue}%, #c0c0ff ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;

  if (pos > 20) {
    scrollProgress.classList.remove("hide");
    scrollProgress.classList.add("show");
  } else {
    scrollProgress.classList.remove("show");
    scrollProgress.classList.add("hide");
  }

  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

window.onscroll = scrollPercentage;
window.onload = scrollPercentage;

let award__scroll = new Swiper(".text__scroll", {
    loop: true,
    freemode: false,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    speed: 15000,
    simulateTouch: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
});



/*======================================
	27. Smooth Scroll
	========================================*/
if ($("#smooth-wrapper").length > 0) {
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    ignoreMobileResize: true,
    //preventDefault: true,
    smooth: 0.8,
    ease: "Power3.easeOut",
    effects: true,
    onUpdate: (self) => {
      progress = self.progress;
    },
  });
}


    //======< Custom Tab >======
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $(".tab ul.tabs li a").on("click", function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();
    
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
    
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    
        g.preventDefault();
    });


  /*======================================
	05. Data Background
	========================================*/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});


    // 22. Video Modal
    var v_cursor = document.getElementById("video_cursor");
    var video_icon = document.querySelector(".video__area a");
  
    if (video_icon) {
      video_icon.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        v_cursor.style.top = y + "px";
        v_cursor.style.left = x + "px";
        v_cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
  
      video_icon.addEventListener("mouseout", (e) => {
        v_cursor.style.transform = "translate(-50%, -50%) scale(0)";
      });
    }

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
