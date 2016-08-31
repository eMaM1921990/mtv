var width = $(window).width();
var lefbalance = $('.sell').width();
$(window).resize(function(){
   if($(this).width() != width){
      width = $(this).width();
	  lefbalance = width/2;
	  setTimeout(function() {
	  $('.expand  #layerslider2 .hero-slide .sell-car, .expand  #layerslider2 .hero-slide .sell-car1, .expand #layerslider3 .hero-slide .buy-car, .expand #layerslider3 .hero-slide .buy-car1').css('left', lefbalance );}, 200);  
   }
});


 $('.sell-how').click(function(){
	 var lefbalance = $('.sell').width();
	 $("body").addClass("runnin");
	 $(".sell-anim-block").show();
	 $(".trade-title").fadeOut();
	 $('#layerslider2, #layerslider3').layerSlider('stop');
	 setTimeout(function() {
	 $('.sell-anim-block .texst h2, .sell-anim-block .texst p').css('background-color', $('.sell .ls-active div:nth-child(3)').css('background-color'));}, 1000);
	 $(".fade-in.one").animate({'left': '-50%'}, 1500);
	 $(".anim-hts").animate({'opacity': '1'}, 800);
	 $(".sell").addClass("expand");
     $(".buy").addClass("shrink");
	 setTimeout(function() {
	 $('.expand  #layerslider2 .hero-slide .sell-car, .expand  #layerslider2 .hero-slide .sell-car1').css('left', lefbalance );}, 0);
	 var wodth = window.innerWidth;
	 var hoight = window.innerHeight;
	 if (wodth<361) {
		 setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 530 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 900 }, {duration: 2700, easing: 'easeInOutExpo'});}, 10000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1280 }, {duration: 2700, easing: 'easeInOutExpo'});}, 15000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1600 }, {duration: 2700, easing: 'easeInOutExpo'});}, 23000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1850 }, {duration: 2700, easing: 'easeInOutExpo'});}, 28000);
        } else if (wodth<450) {
			setTimeout(function() {
			$(".runnin").animate({ scrollTop: 570 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1000 }, {duration: 2700, easing: 'easeInOutExpo'});}, 10000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1480 }, {duration: 2700, easing: 'easeInOutExpo'});}, 15000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1850 }, {duration: 2700, easing: 'easeInOutExpo'});}, 23000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 2000 }, {duration: 2700, easing: 'easeInOutExpo'});}, 28000);
		} else if ((wodth<750 && hoight<450) && (wodth>668 && hoight>400)) {
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 550 }, {duration: 3700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	    	$(".runnin").animate({ scrollTop: 700 }, {duration: 2700, easing: 'easeInOutExpo'});}, 15000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 880 }, {duration: 2700, easing: 'easeInOutExpo'});}, 25000);
		} else if (wodth<668 && hoight<400) {
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 600 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	    	$(".runnin").animate({ scrollTop: 900 }, {duration: 2700, easing: 'easeInOutExpo'});}, 7000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1050 }, {duration: 2700, easing: 'easeInOutExpo'});}, 11000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1350 }, {duration: 2700, easing: 'easeInOutExpo'});}, 15000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1550 }, {duration: 2700, easing: 'easeInOutExpo'});}, 19000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1750 }, {duration: 2700, easing: 'easeInOutExpo'});}, 24000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1850 }, {duration: 2700, easing: 'easeInOutExpo'});}, 27000);
		} else {
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 400 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2500);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 800 }, {duration: 2700, easing: 'easeInOutExpo'});}, 14500);
			setTimeout(function() {
	    	$(".runnin").animate({ scrollTop: 1000 }, {duration: 2700, easing: 'easeInOutExpo'});}, 23500);
		};

	 setTimeout(function() {
		$(".block1").animate({"opacity": 1}, 300);}, 2000);
	 
	 	 	setTimeout(function() {
			$(".swirls").animate({"opacity": 1}, 400);
			function drawPath(path, options) {
    options = options || {};
    var duration = options.duration || 4000;
    var easing   = options.easing || 'ease-in-out';
    var reverse  = options.reverse || false;
    var undraw   = options.undraw || false;
    var callback = options.callback || function () {};
    var length   = options.length || path.getTotalLength();
    var reset    = options.reset || false;

    var dashOffsetStates = [length, 0];
  
    if (reverse) { dashOffsetStates = [length, 2 * length]; }
    if (undraw) { dashOffsetStates.reverse(); }

    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';

    var dashArray = path.style.strokeDasharray || path.getAttribute("stroke-dasharray");

    if (dashArray != '') {
        var dashLength = dashArray.split(/[\s,]/).map(function (a) {
            return parseFloat(a) || 0;
        }).reduce(function (a, b) {
            return a + b;
        })
        var dashCount = length / dashLength + 1;
        var a = new Array(Math.ceil(dashCount)).join(dashArray + " ");
        path.style.strokeDasharray = a + '0' + ' ' + length;
    } else {
        path.style.strokeDasharray = length + ' ' + length;
    }
    path.style.strokeDashoffset = dashOffsetStates[0];
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + duration + 'ms ' + easing;
    path.style.strokeDashoffset = dashOffsetStates[1];
    
    setTimeout( function() {
        path.style.strokeDasharray = dashArray; //set back original dash array
        callback();
    }, duration);
}

var path = document.querySelector('#path');
var path2 = document.querySelector('#path2');
var path3 = document.querySelector('#path3');
var path4 = document.querySelector('#path4');

function draw() {
    drawPath(path, { 
        "callback" : function () {} 
    })	
}
setTimeout(function() {
$(".swirls2").animate({"opacity": 1}, 500);
function draw2() {
    drawPath(path2, { 
        "callback" : function () {} 
    })	
};
draw2();}, 7800);

setTimeout(function() {
$(".swirls3").animate({"opacity": 1}, 500);
function draw3() {
    drawPath(path3, { 
        "callback" : function () {} 
    })	
};
draw3();}, 12000);

setTimeout(function() {
$(".swirls4").animate({"opacity": 1}, 500);
function draw4() {
    drawPath(path4, { 
        "callback" : function () {} 
    })	
};
draw4();}, 20800);

setTimeout(function() {
$(".swirls5").animate({"opacity": 1}, 500);
function draw5() {
    drawPath(path5, { 
        "callback" : function () {} 
    })	
};
draw5();}, 25800);

		draw();}, 1200);

	 	setTimeout(function() {
		$(".item1-css-clip-path").animate({'opacity': 1}, 500);
	    $(".item1-css-clip-path").animate({'background-position-x': '70px','background-position-y': '125%'}, 3000, 'easeInOutExpo');
		$(".item1-css-clip-path").animate({'background-position-x': '70px','background-position-y': '-17%'}, 5000, 'easeInOutExpo');}, 4600);

		setTimeout(function() {
		$(".item2-css-clip-path").animate({"opacity": 1}, 400);}, 12600);
		
		setTimeout(function() {
		$(".checked-car").animate({"opacity": 1}, 600);
		$(".checked-car").animate({"top": '80px'}, 2600, 'swing');
		$(".mark1").delay(1800).animate({"opacity": 1, "left": "353px"}, 200);
		$(".mark2").delay(2000).animate({"opacity": 1, "left": "353px"}, 200);
		$(".mark3").delay(2200).animate({"opacity": 1, "left": "358px"}, 200);
		$(".mark4").delay(2400).animate({"opacity": 1, "left": "356px"}, 200);}, 11600);
		
		setTimeout(function() {
		$(".block2").animate({"opacity": 1}, 400);}, 10600);
		
		setTimeout(function() {
		$(".block3").animate({"opacity": 1}, 400);}, 15600);
		
		setTimeout(function() {
		$(".item3-css-clip-path").delay(1000).animate({"opacity": 1}, 500);
	    $(".item3-css-clip-path").animate({'background-position-x': '-275px','background-position-y': '10%'}, 2500, 'easeOutCubic');
		$(".offer-car").delay(1000).animate({"opacity": 1}, 300);}, 16700);
		
		setTimeout(function() {
		$(".block4").animate({"opacity": 1}, 400);}, 24000);
		
		setTimeout(function() {
		$(".item4-css-clip-path").animate({"opacity": 1}, 500);
	    $(".item4-css-clip-path").animate({'background-position-x': '106px','background-position-y': '55%'}, 750, 'easeOutCubic');}, 25200);
		
		setTimeout(function() {
		$(".sell-now").animate({"opacity": 1}, 1000);$(".sell-now").addClass("baloonanim");}, 30000);
			
 });  
  
  
 


 $('.buy-how').click(function(){
	 var lefbalance = $('.buy').width();
	 $('body').addClass('runnin');
	 $('.buy-anim-block').show();
	 $(".trade-title").fadeOut();
	 $('#layerslider2, #layerslider3').layerSlider('stop');
	 setTimeout(function() {
	 $('.buy-anim-block .texst h2, .buy-anim-block .texst p').css('background-color', $('.buy .ls-active div:nth-child(3)').css('background-color'));}, 1000);
	 $(".fade-in.two").animate({'right': '-50%'}, 1500);
	 $(".anim-htb").animate({'opacity': '1'}, 800);
	 $(".sell").addClass("shrink");
     $(".buy").addClass("expand");
	 setTimeout(function() {
	 $('.expand #layerslider3 .hero-slide .buy-car, .expand #layerslider3 .hero-slide .buy-car1').css('left', lefbalance );}, 0);
	 	 var wodth = window.innerWidth;
	 var hoight = window.innerHeight;
	 if (wodth<361) {
		 setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 530 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 900 }, {duration: 2700, easing: 'easeInOutExpo'});}, 10000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1280 }, {duration: 2700, easing: 'easeInOutExpo'});}, 15000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1600 }, {duration: 2700, easing: 'easeInOutExpo'});}, 23000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1850 }, {duration: 2700, easing: 'easeInOutExpo'});}, 28000);
        } else if (wodth<450) {
			setTimeout(function() {
			$(".runnin").animate({ scrollTop: 540 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1030 }, {duration: 2700, easing: 'easeInOutExpo'});}, 9000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1510 }, {duration: 2700, easing: 'easeInOutExpo'});}, 18000);
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 1830 }, {duration: 2700, easing: 'easeInOutExpo'});}, 23000);
		} else if ((wodth<750 && hoight<450) && (wodth>668 && hoight>400)) {
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 550 }, {duration: 3700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	    	$(".runnin").animate({ scrollTop: 700 }, {duration: 2700, easing: 'easeInOutExpo'});}, 15000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 910 }, {duration: 2700, easing: 'easeInOutExpo'});}, 25000);
		} else if (wodth<668 && hoight<400) {
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 600 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2000);
			setTimeout(function() {
	    	$(".runnin").animate({ scrollTop: 1190 }, {duration: 11700, easing: 'easeInOutExpo'});}, 5000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1450 }, {duration: 2700, easing: 'easeInOutExpo'});}, 20000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1550 }, {duration: 2700, easing: 'easeInOutExpo'});}, 24000);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 1700 }, {duration: 2700, easing: 'easeInOutExpo'});}, 26000);
		} else {
			setTimeout(function() {
	        $(".runnin").animate({ scrollTop: 300 }, {duration: 2700, easing: 'easeInOutExpo'});}, 2500);
			setTimeout(function() {
		    $(".runnin").animate({ scrollTop: 700 }, {duration: 2700, easing: 'easeInOutExpo'});}, 18500);
			setTimeout(function() {
	    	$(".runnin").animate({ scrollTop: 1000 }, {duration: 2700, easing: 'easeInOutExpo'});}, 23500);
		};
	 setTimeout(function() {
		$(".block5").animate({"opacity": 1}, 300);}, 2000);
	 
	 	 	setTimeout(function() {
			$(".swirls6").animate({"opacity": 1}, 400);
			function drawPath(path, options) {
    options = options || {};
    var duration = options.duration || 4000;
    var easing   = options.easing || 'ease-in-out';
    var reverse  = options.reverse || false;
    var undraw   = options.undraw || false;
    var callback = options.callback || function () {};
    var length   = options.length || path.getTotalLength();
    var reset    = options.reset || false;

    var dashOffsetStates = [length, 0];
  
    if (reverse) { dashOffsetStates = [length, 2 * length]; }
    if (undraw) { dashOffsetStates.reverse(); }

    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';

    var dashArray = path.style.strokeDasharray || path.getAttribute("stroke-dasharray");

    if (dashArray != '') {
        var dashLength = dashArray.split(/[\s,]/).map(function (a) {
            return parseFloat(a) || 0;
        }).reduce(function (a, b) {
            return a + b;
        })
        var dashCount = length / dashLength + 1;
        var a = new Array(Math.ceil(dashCount)).join(dashArray + " ");
        path.style.strokeDasharray = a + '0' + ' ' + length;
    } else {
        path.style.strokeDasharray = length + ' ' + length;
    }
    path.style.strokeDashoffset = dashOffsetStates[0];
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + duration + 'ms ' + easing;
    path.style.strokeDashoffset = dashOffsetStates[1];
    
    setTimeout( function() {
        path.style.strokeDasharray = dashArray; //set back original dash array
        callback();
    }, duration);
}

var path6 = document.querySelector('#path6');
var path7 = document.querySelector('#path7');
var path3 = document.querySelector('#path3');
var path4 = document.querySelector('#path4');

function draw() {
    drawPath(path6, { 
        "callback" : function () {} 
    })	
}
setTimeout(function() {
$(".swirls7").animate({"opacity": 1}, 500);
function draw2() {
    drawPath(path7, { 
        "callback" : function () {} 
    })	
};
draw2();}, 7000);

setTimeout(function() {
$(".swirls8").animate({"opacity": 1}, 500);
function draw3() {
    drawPath(path8, { 
        "callback" : function () {} 
    })	
};
draw3();}, 16800);

setTimeout(function() {
$(".swirls9").animate({"opacity": 1}, 500);
function draw4() {
    drawPath(path9, { 
        "callback" : function () {} 
    })	
};
draw4();}, 22000);

		draw();}, 1200);

	 	setTimeout(function() {
		$(".item5-css-clip-path").animate({'opacity': 1}, 700);
		$(".item5-css-clip-path").animate({'background-position-x': '70px','background-position-y': '97%'}, 3000, 'easeInOutExpo');}, 4900);
		
		setTimeout(function() {
		$(".block6").animate({"opacity": 1}, 400);}, 9600);
		
		setTimeout(function() {
		$(".item6-css-clip-path").animate({"opacity": 1}, 700);
	    $(".item6-css-clip-path").animate({'background-position-x': '-520px','background-position-y': '39%'}, 7300, 'linear');
		$(".test-drive,.rearw,.frontw").delay(1000).animate({"opacity": 1}, 300);
		$(".rearw").addClass("rotato");$(".frontw").addClass("rotato");}, 11800);
		

		

		setTimeout(function() {
		$(".block7").animate({"opacity": 1}, 400);}, 19000);		

		
		setTimeout(function() {
		$(".item7-css-clip-path").animate({"opacity": 1}, 500);
	    $(".item7-css-clip-path").animate({'background-position-x': '-51px','background-position-y': '60%'}, 1200, 'easeInOutExpo');
		$(".zoml").delay(1500).animate({'opacity':1,'left': '51px','top': '36px'}, 1300, 'easeInOutExpo');
		$(".zomr").delay(1500).animate({'opacity':1,'left': '239px','top': '36px'}, 1300, 'easeInOutExpo');}, 21600);
		
		setTimeout(function() {
		$(".buy-now").animate({"opacity": 1}, 1000);$(".buy-now").addClass("baloonanim");}, 26200);
			
 });


 
  
  
  
  
  
  
 $('#closel').click(function(){
	 $(".sell").removeClass("expand");
     $(".buy").removeClass("shrink");
	 setTimeout(function() {
	 $('#layerslider2 .hero-slide .sell-car, #layerslider2 .hero-slide .sell-car1').css('left', '100%');}, 0);
	 $(".sell-anim-block").hide();
	 $(".buy-anim-block").hide();
	 setTimeout(function() {
	$("html, body").animate({ scrollTop: 0 }, {duration: 1200, easing: 'easeInOutExpo'});
	$(".fade-in.one").animate({'left': '5%'}, 1300);
	$(".anim-hts").animate({'opacity': '0'});}, 900);
$('#layerslider2, #layerslider3').layerSlider('start');
$(".runnin").stop();
$("body").removeClass("runnin");
$(".trade-title").fadeIn();
 });
  
 $('#closer').click(function(){
	 $(".sell").removeClass("shrink");
     $(".buy").removeClass("expand");
	 setTimeout(function() {
	 $('#layerslider3 .hero-slide .buy-car, #layerslider3 .hero-slide .buy-car1').css('left', 0 );}, 0);
	 $(".buy-anim-block").hide();
	 $(".sell-anim-block").hide();
	 setTimeout(function() {
	$("html, body").animate({ scrollTop: 0 }, {duration: 1000, easing: 'easeInOutExpo'});
	$(".fade-in.two").animate({'right': '5%'}, 1300);
	$(".anim-hts").animate({'opacity': '0'});}, 900);
$('#layerslider2, #layerslider3').layerSlider('start');
$(".runnin").stop();
$("body").removeClass("runnin");
$(".trade-title").fadeIn();
 });