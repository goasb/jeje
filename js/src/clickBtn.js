(function($){

    const clickBtn = $('.clickBox');
    const clickLink = clickBtn.find('a');

    const popUp = $('.popupBox');
    const closeBtn = popUp.children('.closeBtn');
    
    
    clickLink.on('click',function(e){
        e.preventDefault();
        popUp.addClass('active');
    });
    closeBtn.on('click',function(e){
        e.preventDefault();
        popUp.removeClass('active');
    });
    
    console.log(active);
    })(jQuery);