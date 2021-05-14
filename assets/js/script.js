$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    $('[data-toggle="popover"]').popover()
});

$(".card-title").click(function(){
  $(".card-text").toggle();
});


//esconder navbar en scroll
$(document).ready(function() {
  var banner_height = $("#navscroll").height();
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var currScrollTop = $(this).scrollTop();
    if (scroll >= banner_height && currScrollTop > lastScrollTop) {
      $("#banner").hide();
    } else {
      $("#banner").show();
    }
    lastScrollTop = currScrollTop;

  });

});