
$(window).on('resize', function() {
  var winWidth = $(window).width(),
  winHeight = $(window).height();

  var video = $('video');
  if (winWidth/16 >= winHeight/8){
    $(video).removeClass('height-dependent').addClass('width-dependent');
  } else {
    $(video).removeClass('width-dependent').addClass('height-dependent');
  }
});

$(document).ready(function(){
  $(window).trigger('resize');

  $('.show-left-sidebar').hover(
    function() {
      // $('.nav-text').addClass('nav-text-slide-left');
      $('.nav-text').animate({left: $('.left-sidebar-menu').width()}, 500);
      $('.show-right-sidebar').css('display','none');
    },
    function() {
      // $('.nav-text').removeClass('nav-text-slide-left');
      $('.nav-text').animate({left: '0px'}, 500);
      setTimeout (function() {
        $('.show-right-sidebar').css('display','block'); 
      }, 500);       
    }
  );

  $('.show-right-sidebar').hover(
    function() {
      $('.nav-text').css('left','');
      $('.nav-text').animate({right: $('.right-sidebar-menu').width()}, 500);
      $('.show-left-sidebar').css('display','none');
    },
    function() {
      $('.nav-text').css('left','');
      $('.nav-text').animate({right: '0px'}, 500);
      setTimeout (function() {
        $('.show-left-sidebar').css('display','block'); 
      }, 500);       
    }
  );
});

    