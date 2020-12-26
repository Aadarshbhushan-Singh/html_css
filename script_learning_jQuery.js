$(document).ready(function(){  //This means jQuery will be loaded only when the html,css is ready.
	$("#button_h1").click(function(){
		$("h1").hide();
	});
	$("#button_h2").click(function(){
		$("h2").css('color','green');
	});
	$("#button_h3").click(function(){
		$("h3").css('font-size','40px');
	});



});
