(function($){

const openMenuBtn = $('.menu');
const categori = $('.categori');
const closeMenuBtn = $('.closeBtn');

let time = 600;

openMenuBtn.on('click',function(e){
    e.preventDefault();
    categori.fadeIn(time*1);
});
closeMenuBtn.on('click',function(e){
    e.preventDefault();
    categori.fadeOut(time*1);
});

})(jQuery);