(function($){

const openMenuBtn = $('.menu');
const categori = $('.categori');
const closeMenuBtn = $('.closeBtn');


openMenuBtn.on('click',function(e){
    e.preventDefault();
    categori.addClass('active');
});
closeMenuBtn.on('click',function(e){
    e.preventDefault();
    categori.removeClass('active');
});

/* const clickBtn = $('.clickBox');
const interior = $('.popupBox');
const closeBtn = $('.closeBtn') */

})(jQuery);