let header__burger = document.querySelectorAll('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
header__burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header_menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});
$(function(){
    if ( $(window).width() < 767.98 ) {
        $(document).ready(function() {
            $('.footer__label').click(function(event) {
                if($('.footer__main__body').hasClass('one')) {
                    $('.footer__label').not($(this)).removeClass('active');
                    $('.footer__menu').not($(this).next()).slideUp(300);
                    $('.footer__contacts').not($(this).next()).slideUp(300);
                }
                $(this).toggleClass('active').next().slideToggle(300);
            });
        });
    }
});