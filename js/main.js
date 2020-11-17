$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $(".scroll-up-btn").fadeIn();
      } else {
         $(".scroll-up-btn").fadeOut();
      }
   });

   $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
   });
});
