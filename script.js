var nav = $('.nav');
var selector = $('.nav').find('a').length;
//var selector = $(".nav").find(".selector");
var activeItem = nav.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".nav").on("click","a",function(e){
  e.preventDefault();
  $('.nav a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});