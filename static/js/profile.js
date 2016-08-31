$(document).ready(function($) {
	
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
	
	
	
  $('.next').click(function () {
	  	   if ($('.hero-li').next().is('li')){
			$('.hero-li').next('li').addClass('hero-li');
			$('.hero-li').prev('li').removeClass('hero-li');
	   } else {
	   $('.car-shots>li:first-child').addClass('hero-li');
	   $('.car-shots>li:last-child').removeClass('hero-li');
		}
    });
	
$('.previous').click(function () {
	  	   if ($('.hero-li').prev().is('li')){
			$('.hero-li').prev('li').addClass('hero-li');
			$('.hero-li').next('li').removeClass('hero-li');
	   } else {
	   $('.car-shots>li:last-child').addClass('hero-li');
	   $('.car-shots>li:first-child').removeClass('hero-li');
		}
    });
	

	
  });
  
  

  
