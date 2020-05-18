$(function(){
    $('.button-order').click(function(){
        $('.popup').children().eq(1).show();
        $('.popup').children().last().hide();    
    	$('.popup-container').fadeIn(1000);
    });

    $('.button').click(function(){
        $('.popup').children().last().show();
        $('.popup').children().eq(1).hide(); 
        $('.popup-container').fadeIn(1000);
    });

    $('.button-close').click(function(){
    	$('.popup-container').fadeOut();
    });

    $('.popup-container').click(function(event){
    	if (event.target == this) {
    		$(this).fadeOut();
    	}
    });

    $("form").submit(function(){
        event.preventDefault();

        var $form = $(this); 
        $.post(
            $form.attr("action"), 
            $form.serialize()    
        );
        
        $('.popup-container').fadeOut();
   
    });
});