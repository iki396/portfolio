$(function(){
  
  var mainContent_w = $('.mainContent').width();
  
  // flipsnap setting
  var flipsnap = Flipsnap('.mainContent', {
      distance: mainContent_w / 7,
      maxPoint: 6
  });

  // moveToPoint  
  $('.flipsnap').click(function(){    
    flipsnap.moveToPoint($('.flipsnap').index(this));
    $('.flipsnap').removeClass('current');
    $(this).toggleClass('current')    
  });
  
  // next, prev
  var $next = $('.next').click(function() {
    flipsnap.toNext();
    $('.flipsnap').removeClass('current');
    $('.flipsnap').eq(flipsnap.currentPoint).toggleClass('current');
  });

  var $prev = $('.prev').click(function() {
    flipsnap.toPrev();
    $('.flipsnap').removeClass('current');
    $('.flipsnap').eq(flipsnap.currentPoint).toggleClass('current');
  });
  
  // motorbike 

});
