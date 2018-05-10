$(document).ready(function()
{
	// $('#accordion').hide();
	var acc = $(".ndmotkhoi");
	acc.hide();
	$(".motkhoi h3").click(function(){
		acc.slideUp();
		$(this).parent().find(".ndmotkhoi").slideToggle("400");
		// return false;	
	});
});