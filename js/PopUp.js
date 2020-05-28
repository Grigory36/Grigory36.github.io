$(function(){
    $('.button-order').click(function(){
        $('.notification-success').hide();
        $('.popup').show();
        $('.popup').children().eq(1).show();
        $('.popup').children().eq(2).hide();    
    	$('.popup-container').fadeIn(1000).css({display:'flex'});
    });

    $('.button').click(function(){
        $('.notification-success').hide();
        $('.popup').show();
        $('.popup').children().eq(2).show();
        $('.popup').children().eq(1).hide(); 
        $('.popup-container').fadeIn(1000).css({display:'flex'});
    });

    $('.button-close').click(function(){
    	$('.popup-container').fadeOut();
    });

    $('.popup-container').click(function(event){
    	if (event.target == this) {
            $(this).fadeOut();
            $(".notification-success").fadeOut();
        }
    });

    $("form").submit(function(){
        event.preventDefault();

        var $form = $(this); 
        $.post(
            $form.attr("action"), 
            $form.serialize()    
        );
        
        $('.popup').fadeOut();
    });

    $( "form" ).submit(function( event ) {
        setTimeout(function(){
            $('.notification-success').fadeIn().css({display:'flex'});
        }, 500);
        setTimeout(function(){
            $('.popup-container').fadeOut();
        }, 2000);
    });

    
});