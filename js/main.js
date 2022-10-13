$(document).ready(function () {

    $('#owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        dots: false,
        navText: ['<div class="left-arrow"></div>','<div class="right-arrow"></div>'],
        responsive:{
            0:{
                items:1,
                autoHeight:true
            },
            800:{
                items:1
            },
            1100:{
                items:2
            }
        }
    });


    // scroll to down
    $("#nav").find('a').click(function () {
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 30;
        $('body,html').animate({scrollTop: top}, 1200);

        return false;
    });

    $('#toggle-btn').click(function () {
        $(this).toggleClass('open');
        $('#nav').slideToggle();

       return false;
    });

});


