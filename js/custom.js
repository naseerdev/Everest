$(".main-img").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".thumbnail",
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
$(".thumbnail").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".main-img",
  dots: false,
  loop: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
});
$(".feedback-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: $(".prev-feedback"),
  nextArrow: $(".next-feedback"),
});
$(".blog-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  prevArrow: $(".prev-blog"),
  nextArrow: $(".next-blog"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
  ],
});
