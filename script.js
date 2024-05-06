$("#form-contact").submit(function (e) {
  e.preventDefault();
  let subject = $("input[name=subject]").val();
  let message = $("textarea[name=message]").val();

  window.location = `mailto:hello@festivo.co?subject=${subject}&body=${message}`;
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiperMobile", {
  loop: true,
  spaceBetween: 15,
});