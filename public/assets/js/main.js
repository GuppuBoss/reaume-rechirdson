jQuery(document).ready(function($) {

    btn = $('.navigation__button');
    closeBtn = $('.navigation__close');

    target = $('.navigation__nav');
 

    $(btn).on('click', function() {

        if($(target).hasClass('open')) {

            $(target).removeClass('open');
        } else {

            $(target).addClass('open');
        }
    })
    $(closeBtn).on('click', function() {

        if($(target).hasClass('open')) {

            $(target).removeClass('open');
        } else {

            $(target).addClass('open');
        }
    })


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 50) {
            //clearHeader, not clearheader - caps H
            $("#header").addClass("sticky");
        } else {
            
            $("#header").removeClass("sticky");
        }
    }); //missing );


})