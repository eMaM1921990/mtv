/**
 * Created by emam on 9/1/16.
 */
function changeAppLanguage(langCode){
    $.ajax({
        url: "/i18n/setlang/",
        type: 'POST',
        data:{
            language:langCode,
            next:'/',
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value
        },
        success: function (responseText) {
               window.location.reload();
        },
        error: function (xhr, errmsg, err) {
            console.log(errmsg);
        }
    });
}


function add_car_to_garage(car_id){
	$.ajax({
		url : "/add_car_to_garage/",
		type : "POST",
		data : {
			id : parseInt(car_id),
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value
		},
		success : function(responseText) {
			if(JSON.parse(responseText).valid){
                console.log(JSON.parse(responseText).message);
            }else{
                console.log(JSON.parse(responseText).message);
            }
		},
		error : function(xhr, errmsg, err) {
			console.log(errmsg);

		}
	});
}

function remove_car_from_garage(garag_id){
	$.ajax({
		url : "/remove_car_from_garage/",
		type : "POST",
		data : {
			id : parseInt(garag_id),
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value

		},
		success : function(responseText) {
			$('#'+garagId).remove()

		},
		error : function(xhr, errmsg, err) {
			console.log(errmsg);

		}
	});
}

function add_to_comparison(car_id, slot){
    $.ajax({
		url : "/garage_comparison/",
		type : "POST",
		data : {
			id : parseInt(car_id),
            slot:slot,
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value

		},
		success : function(responseText) {
			$('#com-slot-'+slot).html(responseText);
            $('.vs-circle').removeAttr('style');
		},
		error : function(xhr, errmsg, err) {
			console.log(errmsg);

		}
	});
}


function getModel(brand_id){
	$.ajax({
		url : "/get_model/",
		type : "POST",
		data : {
			brandId : parseInt(brand_id),
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value

		},
		success : function(responseText) {
			$('#models').append(responseText);

		},
		error : function(xhr, errmsg, err) {
			console.log(errmsg);

		}
	});

}


function getModelFilter(brand_id){
	$.ajax({
		url : "/get_model_filter/",
		type : "POST",
		data : {
			brandId : parseInt(brand_id),
            csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value

		},
		success : function(responseText) {
			$('#model').append(responseText);
            $('#model').removeClass('disabled');

		},
		error : function(xhr, errmsg, err) {
			console.log(errmsg);

		}
	});

}

function add_car_web(){
    var vFD = new FormData(document.getElementById('imageUploadForm'));
    $.ajax({
		url : "/add_car_from_web/",
		type : "POST",
		data :vFD,
        cache: false,
        contentType: false,
        processData: false,
		success : function(responseText) {
			if(JSON.parse(responseText).valid){
                console.log(JSON.parse(responseText).message);
                $('#imageUploadForm').trigger("reset");
            }else{
                console.log(JSON.parse(responseText).message);
            }

		},
		error : function(xhr, errmsg, err) {
			console.log(errmsg);

		}
	});
}

function setColor(){
	var color=$('.color-list .color-active span ').attr('class');
	$('#color').val(color);

}
