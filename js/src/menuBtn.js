(function($){

const openMenuBtn = $('.menu');
const menuDown = $('.menuDown');
const closeMenuBtn = $('.closeBtn');

let time = 600;

openMenuBtn.on('click',function(e){
    e.preventDefault();
    menuDown.fadeIn(time*2);
});
closeMenuBtn.on('click',function(e){
    e.preventDefault();
    menuDown.fadeOut(time*2);
});

})(jQuery);