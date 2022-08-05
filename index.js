$(document).ready(function(){
    $(window).scroll(function(){
        if(scrollY > 100)
        {
            $('.navbar').addClass('sticky');
            $('.navbar .logo a span').addClass('sticky');
            $('.navbar .logo a').addClass('sticky');
            $('.navbar .menu li a').addClass('sticky');
            $('.navbar .menu li a:hover').addClass('sticky');
        }
        else
        {
            $('.navbar').removeClass('sticky');
            $('.navbar .logo a span').removeClass('sticky');
            $('.navbar .logo a').removeClass('sticky');
            $('.navbar .menu li a').removeClass('sticky');
            $('.navbar .menu li a:hover').removeClass('sticky');
        }
    });

    //TOGGLE MENU SCRIPT
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggle('active');
    })

})