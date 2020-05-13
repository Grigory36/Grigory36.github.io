$(function(){
    $('.button-order').click(function(){
        $('.form__input_disabled').hide();    
    	$('.popup-container').fadeIn(1000);
    });

    $('.button').click(function(){
        $('.form__input_disabled').show();
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