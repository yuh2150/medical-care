$(document).ready(function () {
  $(".nav-links").each(function () {
    const navSlides = $(this).find(".nav-tabs--slider");
    const contentSlides = $(this).find(".tab-content--slider");

    contentSlides.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      asNavFor: navSlides,
      mobileFirst: true,
      draggable: false,
      // prevArrow:"<button type='button' class='slick-prev slide-arrow'><i class='fa-solid fa-angles-left' aria-hidden='true'></i></button>",
      // nextArrow:"<button type='button' class='slick-next slide-arrow'><i class='fa-solid fa-angles-right' aria-hidden='true'></i></button>"
    });

    navSlides.slick({
      slidesToShow: 24,
      asNavFor: contentSlides,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 10,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 6,
          },
        },
      ],
    });
  });
});
