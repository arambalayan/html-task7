$(document).ready(function(){
    $('.open_nav').click(function(){
        $('.menu-link').toggle(100);
        $('header').toggleClass('bg');
    });
  })
  $(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top >= 100){
        $('header').addClass("nav_fixed");

    }
    else{
        $('header').removeClass("nav_fixed");
    }
})