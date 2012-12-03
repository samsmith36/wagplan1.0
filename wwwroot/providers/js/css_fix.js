// JavaScript Document

	$(".header .header_content ul.topmenu li:first").css('background-image','url()');
	$('.content .wiardmenu li:first').corner('tl');
	$('.content .wiardmenu li:last').css('background-image','url()');
	$('.content .wiardmenu li:last').css('padding-right','25px');
	$('.content .wiardmenu li:last').corner('tr');
	
	if($('.content ul.wiardmenu li.selected') != $('.content .wiardmenu li:last')){
	$('.content ul.wiardmenu li.selected').prev().css('background-image','url(img/provider_wizard_menu_hover_previous.gif)');
	$('.content ul.wiardmenu li.selected').prev().css('background-repeat','no-repeat');
	$('.content ul.wiardmenu li.selected').prev().css('background-position','right top');
	}
	
	var userAgent = navigator.userAgent.toLowerCase(); 
	
	$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
	
	if($.browser.chrome){ $('.content .wiardmenu li').css('padding-left','18px');}
	
    // Appointment screen

	function setliwith_appointments(){
	$('.appointments ul li').each(function(){
		$(this).css('width',$('.appointments ul').width() / 3 );
		});
	}
	
	function locatecentercontent(){
		var $left_margin = ($(window).width()/2) - ($('.celtercontent').width()/2) - 229;
		if($left_margin >= 0)
		$('.celtercontent').css('margin-left',$left_margin+'px');
	
		
		}
		
	function setmaincontainer_size(){
		$('.maincontainer').css('width',($(window).width() - $('.leftcalender').width() - 30) +'px');
}

$('.calendar_ctrl_nextprestyle a').corner('2px');
$('.calender_ctrl_titlestyle').parent().css('background-color', 'transparent');
$('.event_ctrl_titlestyle').parent().css('background-color', 'transparent');

if ($.browser.chrome) {
    $('.event_ctrl table.leftheader .firstrow td').css('min-height', '17px');
    $('.event_ctrl table.leftheader tr td').css('min-height','15px');
}

$('span.tooltipbtn').corner('5px')

$(window).resize(function() { 
//alert($(window).width() + "---- " + $(document).width());
setliwith_appointments();
locatecentercontent();
setmaincontainer_size()


});

setliwith_appointments();
locatecentercontent();
setmaincontainer_size()