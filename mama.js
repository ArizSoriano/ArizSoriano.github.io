$(document).ready(function() {
	$(".button1").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".mama2").offset().top},
	        'slow');
	});

	$(".button2").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".mama3").offset().top},
	        'slow');
	});

	$(".button3").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".mama4").offset().top},
	        'slow');
	});

	$(".button4").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".mama1").offset().top},
	        'slow');
	});
});