$(document).ready(function($) {
	
var wodth = window.innerWidth;
	 if (wodth<961 && wodth>600) {
$("#services .half").addClass("actove");
$("#services .car-card").addClass("halfwidth");
        } else if (wodth<600 && wodth>480) {
			$("#services.half").addClass("actove");
			$("#services .car-card").addClass("halfwidth");
			$("#services .car-card").removeClass("fullwidth");
		} else if (wodth<480 && wodth>319) {
			$("#services .car-card").removeClass("halfwidth");
			$("#services .car-card").removeClass("fullwidth");
		} else {
		};
	
	
	
	setTimeout(function() {
		$('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })
}, 4000);




  });
  
 

/* Car Card Views */
 
 $('#services .third').click(function(){
$("#services .car-card").removeClass("halfwidth");
$("#services .car-card").removeClass("fullwidth");
$("#services .half").removeClass("actove");
$("#services .full").removeClass("actove");
$("#services .third").addClass("actove");
 }); 

 $('#services .half').click(function(){
$("#services .car-card").removeClass("fullwidth");
$("#services .car-card").addClass("halfwidth");
$("#services .third").removeClass("actove");
$("#services .full").removeClass("actove");
$("#services .half").addClass("actove");
 });

 $('#services .full').click(function(){
$("#services .full").addClass("actove");
$("#services .car-card").addClass("fullwidth");
$("#services .car-card").removeClass("halfwidth");
$("#services .half").removeClass("actove");
$("#services .third").removeClass("actove");

 }); 
  
   



 
  
