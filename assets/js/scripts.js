$(document).ready(function() {
  $("#design").click(function() {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });

  $("#development").click(function() {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  });

  $("#pm").click(function() {
    $(".pm-showing").toggle();
    $(".pm-hidden").toggle();
  });
});