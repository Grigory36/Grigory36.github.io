$(function(){
	$('.button-dropdown_burger_big').click(function(){
		if ($('.link-list_laptop').css('display') == 'none') {
            $(".link-list_laptop").fadeIn(500);
        }else {
        	$(".link-list_laptop").fadeOut(500);
        }   
    });

    $('.button-dropdown_burger_small').click(function(){
        if ($('.menu_mobile').css('display') == 'none') {
            $(".menu_mobile").slideDown(400);
        }else {
            $(".menu_mobile").slideUp(400);
        }   
    });

    $('a').click(function(){
    	$(".link-list_laptop").hide();
        $(".menu_mobile").slideUp(400);
    });
});