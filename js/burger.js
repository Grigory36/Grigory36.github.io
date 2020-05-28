$(function(){
	$('.button-dropdown').click(function(){
		if ($('.link-list_laptop').css('display') == 'none') {
            if ($('.link-list_laptop').css('max-width') == 'none') {
                $(".link-list_laptop").slideDown(400);
            }else {
                $(".link-list_laptop").fadeIn(500);
            }
        }else {
            if ($('.link-list_laptop').css('max-width') == 'none') {
                $(".link-list_laptop").slideUp(400);
            }else {
                $(".link-list_laptop").fadeOut(500);
            }
        }   
    });

    $('a').click(function(){
    	$(".link-list_laptop").hide();
        $(".menu_mobile").slideUp(400);
    });
});