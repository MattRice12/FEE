$(document).ready(function() {
  $(".tab-panels .tabs li").on("click", function() {
    var panelToShow = $(this).attr("rel")
    $(".tab-panels .tabs li.active").removeClass("active")
    $(this).addClass("active");
    $(".panel.active").slideUp(200, function() {
      $(this).removeClass("active")
    });
    $("#"+panelToShow).slideDown(200, function() {
      $(this).addClass("active")
    });
  });
});
