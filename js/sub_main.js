$(function () {
  $("#header .nav_btn").click(function () {
    $("#nav").slideToggle();
  });
  if ($(window).width() > 760) {
    $("#nav").show();
  } else {
    $("#nav").hide();
  }
  $(window).resize(function () {
    if ($(window).width() > 760) {
      $("#nav").show();
    } else {
      $("#nav").hide();
    }
  });

  if ($(window).width() > 980) {
    $("#nav").show();
  } else {
    $("#nav").hide();
  }
  $(window).resize(function () {
    if ($(window).width() > 980) {
      $("#nav").show();
    } else {
      $("#nav").hide();
    }
  });
});
