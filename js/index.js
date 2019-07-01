//HEADER SCROLL
$(window).on('scroll', function() {
     var scroll = $(window).scrollTop();

     if (scroll >= 50) {
          $('header').addClass('fixed');
     } else {
          $('header').removeClass('fixed');
     }
});

//SCROLL-IMAGE
$(window).on('scroll', function() {
     let scroll = $(window).scrollTop();
     let image = document.getElementById('image');

     if (scroll >= 20) {

          image.src = "/imgs/Mj/MaryJaneOff.png";
     
     } else {
         
          image.src = "/imgs/Mj/MaryJaneOn.png";
     }
});


// MENU SCROLL ======
$('.menu a.rollScroll').click(function(e){
     e.preventDefault();

     let id = $(this).attr('href'), 
         targetOffset = $(id).offset().top,
         menuHeight = $('header').innerHeight();
     
         $('html, body').animate({
          scrollTop : targetOffset - menuHeight,
     }, 900);
});



// OPEN/CLOSED  MENU-MOBILE
// $('.btn-menu').click(function() {
//      $('nav').addClass('selected');
// });

// $('nav a.closed').click(function() {
//      $('nav').removeClass('selected');
// });


