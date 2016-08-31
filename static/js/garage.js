$(document).ready(function($) {


	
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
	
	
	
	
	$('.car-shots li img').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('hero-li').siblings().removeClass('hero-li');
    });


	
	
	$('.slot-a .discover').click(function() {
		$('.slot-a .car-shots').toggleClass('expanded');
		$('.slot-a .discover').toggleClass('golden');
		$('.slot-a .car-shots').toggleClass('golden');
});

$('.slot-b .discover').click(function() {
		$('.slot-b .car-shots').toggleClass('expanded');
		$('.slot-b .discover').toggleClass('golden');
		$('.slot-b .car-shots').toggleClass('golden');
});

	


$('body').on( "click", ".item-delete img", function() {
    $(this).parent().parent().parent().fadeOut(300, function() { $(this).remove()});
});
	
	
$(function() {
  // Bind Click event to the drop down navigation button
  $(".nav-button").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
		if (!$(".drop-down").not(".closed")){$(".drop-down").addClass("closed");};
	$(".drop-down").addClass("closed");
    $(this).parent().parent().toggleClass("closed");
	
  });
  
    $('.sla').click(function() {
	$('.insla').fadeOut();
	$(this).closest('div.item').find('.item-pic .inslb').fadeOut();
	$(this).closest('div.item').find('.item-pic .insla').fadeIn();
    $(this).parent().parent().addClass('closed');
  });
  
    $(".slb").click(function() {
	$('.inslb').fadeOut();
	$(this).closest('div.item').find('.item-pic .insla').fadeOut();
	$(this).closest('div.item').find('.item-pic .inslb').fadeIn();
    $(this).parent().parent().addClass('closed');
  });

});
	
  });
  
  
