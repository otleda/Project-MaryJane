//HEADER SCROLL
$(window).on('scroll', function() {
     var scroll = $(window).scrollTop();

     if (scroll >= 50) {
          $('header').addClass('fixed');
     } else {
          $('header').removeClass('fixed');
     }
});

// OPEN/CLOSED  MENU-MOBILE
$('.btn-menu').click(function() {
     $('nav').addClass('selected');
});

$('nav a.closed').click(function() {
     $('nav').removeClass('selected');
});

//FLIPER IMGS CLICK
$(document).ready(function(){
     $('.container').click(function(){
          $(this).toggleClass('active');
     });
});

// MENU SROLL ======
$('.menu a.closed').click(function(e){
     e.preventDefault();

     let id = $(this).attr('href'), 
         targetOffset = $(id).offset().top,
         menuHeight = $('header').innerHeight();
     
         $('html, body').animate({
          scrollTop : targetOffset - menuHeight,
     }, 500);
});


