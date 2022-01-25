// listen for scroll
$(window).scroll(function() {
  // apply css classes based on the situation
  if ($(".masthead").offset().top > 100) {
    $(".masthead").addClass("navbar-scrolled");
  } else {
    $(".masthead").removeClass("navbar-scrolled");
  }
});
