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

  $(".nav a[href='#trayectoria']").click(function() {
    // Redirige a la sección de trayectoria
    window.location.href = "#trayectoria";
  });
  $(".nav a[href='#inicio']").click(function() {
    // Redirige a la sección de trayectoria
    window.location.href = "#inicio";
  });

  $(".nav a[href='#blog']").click(function() {
    // Redirige a la sección de blog
    window.location.href = "#blog";
  }) 

  $(".nav a[href='#contacto']").click(function() {
    // Redirige a la sección de contacto
    window.location.href = "#contacto";
  })

  
});