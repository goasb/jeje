(function($){
    const categori = $('.categori');
    const CategoriLink = categori.find('a');
  
    // .action
    CategoriLink.on('mouseenter focus', function(){
                $(this).addClass('active');
              })
              .on('mouseleave blur', function(){
                $(this).removeClass('active');
              });
})(jQuery);