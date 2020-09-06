$(document).ready(function(){
	// hide, show and toggle
	$('#hide').click(function(){
		$('#hsContent').hide(1000);
	});
	$('#show').click(function(){
		$('#hsContent').show(1000);
	});
	$('#toggle').click(function(){
		$('#hsContent').toggle(1000);
	});
	// fade in, fade out, fade to, fade togggle
	$('#fadeOut').click(function(){
		$('#fContent').fadeOut(1000);
	});
	$('#fadeIn').click(function(){
		$('#fContent').fadeIn(1000);
	});
	$('#fadeToggle').click(function(){
		$('#fContent').fadeToggle(1000);
	});
	$('#fadeTo').click(function(){
		$('#fContent').fadeTo("slow", 0.5);
	});
	// slide up. slide down, slide toggle
	$("#slideDown").click(function(){
		$("#sdContent").slideDown("slow");
	});
	$("#slideUp").click(function(){
		$("#suContent").slideUp(2000);
	});
	$('#slideToggle').click(function(){
		$('#stContent').slideToggle("slow");
	});
	// 
// 
	$("#anOneBtn").click(function(){
		$("#animateOne").animate({
			left: '500px',
			width: '200px',
		}, "slow");
		$("#animateOne").animate({
			width: '400px'
		}, "slow");
	});
});