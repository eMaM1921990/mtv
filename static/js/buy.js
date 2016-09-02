$(function () {
    $('.brands-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('submenu-active').siblings().removeClass('submenu-active');
		$('.models-list').removeClass('disabled');
		$('.add-filter').removeClass('disabled');
    });
	$('.models-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('submenu-active').siblings().removeClass('submenu-active');
		$('.year-list').removeClass('disabled');
    });
	$('.year-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('submenu-active').siblings().removeClass('submenu-active');
		$('.price-list').removeClass('disabled');
    });
	$('.price-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('submenu-active').siblings().removeClass('submenu-active');
		$('.km-list').removeClass('disabled');
    });
	$('.km-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('submenu-active').siblings().removeClass('submenu-active');
		$('.color-list').removeClass('disabled');
    });
	$('.color-list li').click(function (e) {
        e.preventDefault();
		$(this).closest('li').addClass('color-active').siblings().removeClass('color-active');
    });
});

/*$('body').on('click', '.delete', function () { $(this).parent().fadeOut(300, function() { $(this).remove()}); });*/
$('body').on( "click", ".delete", function() {
    $(this).parent().fadeOut(300, function() { $(this).remove()});
});
$('body').on('click', '#filter1 .delete', function () {$('.af1').show(); });
$('body').on('click', '#filter2 .delete', function () {$('.af2').show(); });
$('body').on('click', '#filter3 .delete', function () {$('.af3').show(); });

$('.af1').click(function(){
	$('.filter-wrapper').append( '<div id="filter1" class="filter-block"><span class="delete"><img src="img/item-delete.png"></span><h4>Filter</h4><ul class="filter1"><li class="fbrand"></li><li class="fmodel"></li><li class="fyear"></li><li class="fprice"></li><li class="fkm"></li><li class="fcolor"></li></ul></div>' );
	if ($('.brands-list .submenu-active') && $('.brands-list .submenu-active').text()){
	$('.filter1 .fbrand').text($('.brands-list .submenu-active').text());
	} else {
		$('.filter1 .fbrand').remove();
	};
	if ($('.models-list .submenu-active') && $('.models-list .submenu-active').text()){
	$('.filter1 .fmodel').text($('.models-list .submenu-active').text());
	} else {
		$('.filter1 .fmodel').remove();
	};
	if ($('.year-list .submenu-active') && $('.year-list .submenu-active').text()){
	$('.filter1 .fyear').text($('.year-list .submenu-active').text());
	} else {
		$('.filter1 .fyear').remove();
	};
	if ($('.price-list .submenu-active') && $('.price-list .submenu-active').text()){
	$('.filter1 .fprice').text($('.price-list .submenu-active').text());
	} else {
		$('.filter1 .fprice').remove();
	};
	if ($('.km-list .submenu-active') && $('.km-list .submenu-active').text()){
	$('.filter1 .fkm').text($('.km-list .submenu-active').text());
	} else {
		$('.filter1 .fkm').remove();
	};
	if ($('.color-list .color-active span') && $('.color-list .color-active span').attr('class')){
	$('.filter1 .fcolor').text($('.color-list .color-active span').attr('class'));
	} else {
		$('.filter1 .fcolor').remove();
	};
	$('.filter1 li').append('<span class="delete"><img src="/static/img/delete.png"></span>');
	$('.flist ul li').removeClass('submenu-active');
	$('.color-list li').removeClass('color-active');
	$(this).hide();
});

$('.af2').click(function(){
	$('.filter-wrapper').append( '<div id="filter2" class="filter-block"><span class="delete"><img src="img/item-delete.png"></span><h4>Filter</h4><ul class="filter2"><li class="fbrand"></li><li class="fmodel"></li><li class="fyear"></li><li class="fprice"></li><li class="fkm"></li><li class="fcolor"></li></ul></div>' );
	if ($('.brands-list .submenu-active') && $('.brands-list .submenu-active').text()){
	$('.filter2 .fbrand').text($('.brands-list .submenu-active').text());
	} else {
		$('.filter2 .fbrand').remove();
	};
	if ($('.models-list .submenu-active') && $('.models-list .submenu-active').text()){
	$('.filter2 .fmodel').text($('.models-list .submenu-active').text());
	} else {
		$('.filter2 .fmodel').remove();
	};
	if ($('.year-list .submenu-active') && $('.year-list .submenu-active').text()){
	$('.filter2 .fyear').text($('.year-list .submenu-active').text());
	} else {
		$('.filter2 .fyear').remove();
	};
	if ($('.price-list .submenu-active') && $('.price-list .submenu-active').text()){
	$('.filter2 .fprice').text($('.price-list .submenu-active').text());
	} else {
		$('.filter2 .fprice').remove();
	};
	if ($('.km-list .submenu-active') && $('.km-list .submenu-active').text()){
	$('.filter2 .fkm').text($('.km-list .submenu-active').text());
	} else {
		$('.filter2 .fkm').remove();
	};
	if ($('.color-list .color-active span') && $('.color-list .color-active span').attr('class')){
	$('.filter2 .fcolor').text($('.color-list .color-active span').attr('class'));
	} else {
		$('.filter2 .fcolor').remove();
	};
	$('.filter2 li').append('<span class="delete"><img src="/static/img/delete.png"></span>');
	$('.flist ul li').removeClass('submenu-active');
	$('.color-list li').removeClass('color-active');
	$(this).hide();
});

$('.af3').click(function(){
	$('.filter-wrapper').append( '<div id="filter3" class="filter-block"><span class="delete"><img src="img/item-delete.png"></span><h4>Filter</h4><ul class="filter3"><li class="fbrand"></li><li class="fmodel"></li><li class="fyear"></li><li class="fprice"></li><li class="fkm"></li><li class="fcolor"></li></ul></div>' );
	if ($('.brands-list .submenu-active') && $('.brands-list .submenu-active').text()){
	$('.filter3 .fbrand').text($('.brands-list .submenu-active').text());
	} else {
		$('.filter3 .fbrand').remove();
	};
	if ($('.models-list .submenu-active') && $('.models-list .submenu-active').text()){
	$('.filter3 .fmodel').text($('.models-list .submenu-active').text());
	} else {
		$('.filter3 .fmodel').remove();
	};
	if ($('.year-list .submenu-active') && $('.year-list .submenu-active').text()){
	$('.filter3 .fyear').text($('.year-list .submenu-active').text());
	} else {
		$('.filter3 .fyear').remove();
	};
	if ($('.price-list .submenu-active') && $('.price-list .submenu-active').text()){
	$('.filter3 .fprice').text($('.price-list .submenu-active').text());
	} else {
		$('.filter3 .fprice').remove();
	};
	if ($('.km-list .submenu-active') && $('.km-list .submenu-active').text()){
	$('.filter3 .fkm').text($('.km-list .submenu-active').text());
	} else {
		$('.filter3 .fkm').remove();
	};
	if ($('.color-list .color-active span') && $('.color-list .color-active span').attr('class')){
	$('.filter3 .fcolor').text($('.color-list .color-active span').attr('class'));
	} else {
		$('.filter3 .fcolor').remove();
	};
	$('.filter3 li').append('<span class="delete"><img src="img/delete.png"></span>');
	$('.flist ul li').removeClass('submenu-active');
	$('.color-list li').removeClass('color-active');
	$(this).hide();
});		
		

		