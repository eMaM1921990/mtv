$(document).ready(function($) {
	
  $('.color-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('color-active').siblings().removeClass('color-active');
    });	
	
	
	
setTimeout(function() {	
$("html, body").animte({ scrollTop: 1100 }, {duration: 2700, easing: 'easeInOutExpo'});}, 19000);

  });
  
  

  
   $('.buy-how').click(function(){
	 $('#layerslider2').layerSlider('stop');
     $('#layerslider3').layerSlider('stop');
	 $(".buy").addClass("expand");
     $(".sell").addClass("shrink");
	 	 $(".anim-magic").animate({ scrollTop: 500 }, {duration: 2700, easing: 'easeInOutExpo'});
	 	setTimeout(function() {
		$(".item-css-clip-path").animate({'background-position-x': '30px','background-position-y': '114%'}, 3000, 'swing');}, 1900);
		setTimeout(function() {
		$(".item-css-clip-path").animate({'background-position-x': '30px','background-position-y': '-10%'}, 3000, 'swing');}, 6300);
				setTimeout(function() {
		$("html, body").animate({ scrollTop: 800 }, {duration: 2700, easing: 'easeInOutExpo'});}, 6500);
		setTimeout(function() {
		$("html, body").animate({ scrollTop: 1100 }, {duration: 2700, easing: 'easeInOutExpo'});}, 9000);
	
 }); 