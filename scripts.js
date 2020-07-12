jQuery ('document').ready(function($){

var menuBtn = $('.icono-menu'),
    menu = $ ('nav.navegacion ul');

    menuBtn.click(function(){
        if(menu.hasClass('mostrate') ){
            menu.removeClass ('mostrate');
        } else {
            menu.addClass('mostrate');
        }
    });

});