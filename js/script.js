$(document).ready(function () {
  AOS.init();

  $(".tabs-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, 
    prevArrow: '<button class="custom-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>', 
    nextArrow: '<button class="custom-arrow slick-next"><i class="fas fa-chevron-right"></i></button>', 
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".sliderDown").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


  $('.main-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-thumbs'
   });
  
  $('.slider-thumbs').slick({
    infinite: false,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0', 
    asNavFor: '.main-slider',
    dots: false, 
    variableWidth: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button class="custom-arrow slick-prev"><i class="fa-solid fa-arrow-left"></i></button>', 
    nextArrow: '<button class="custom-arrow slick-next"><i class="fa-solid fa-arrow-right"></i></button>', 
  });
  
  $('.slick-slide:first-child').addClass('active');
  
  $('.slider-thumbs').on('click', 'img', function(event) {
    $('.slider-thumbs img').parent('div').removeClass('active');
    $(this).parent('div').addClass('active');
  });
  

  $(".about-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    cssEase: "linear",
    dots: true,
  });

  // add search bar class
  $("#addClassButton").click(function () {
    $(".navbar").toggleClass("search");
  });

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Find the tab that became active
    var targetTab = $(e.target).attr("href");

    // Initialize the Slick Slider in the active tab
    $(targetTab + " .tabs-slider").slick();
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Find the tab that became active
    var targetTab = $(e.target).attr("href");

    // Pause the Slick Slider in the previously active tab
    $(".tab-pane.active .tabs-slider").slick("slickPause");

    // Resume the Slick Slider in the active tab
    $(targetTab + " .tabs-slider").slick("slickPlay");
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Find the tab that became active
    var targetTab = $(e.target).attr("href");

    // Destroy the Slick Slider in the previously active tab
    $(".tab-pane.active .tabs-slider").slick("unslick");

    // Reinitialize the Slick Slider in the active tab
    $(targetTab + " .tabs-slider").slick();
  });

  
});
