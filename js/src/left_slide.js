(function($){
    const  openMenuBtn = $('.menu');
    const categoriLink = categori.find('a');
  
    // .action
    categoriLink.on('mouseenter focus', function(){
                $(this).addClass('active');
              })
              .on('mouseleave blur', function(){
                $(this).removeClass('active');
              });
})(jQuery);