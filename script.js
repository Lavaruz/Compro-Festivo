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

$("#form-contact").submit(function(e){
  e.preventDefault()
  var form = $(this);

  $(this).find("#send-contact").text("SENDING...").prop("disabled", true)
    
  $.ajax({
      type: "POST",
      url: "https://api.festivo.co/festivo/v1/send-email",
      data: form.serialize(), // serializes the form's elements.
      success: function(response, status){
        if(status == "success"){
          $("#popup-email-success").removeClass("invisible")
            setTimeout(function() {
              $("#popup-email-success").addClass("invisible");
              $("#send-contact").text("SENT")
            }, 2500);
        }
      },
      error: function (jqXHR, exception) {
        var msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        alert(msg)
    },
  });
})