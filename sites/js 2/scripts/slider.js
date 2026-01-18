$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 3,
        autoplay:true,
        centerMode:false,
        responsive: [
            {
              breakpoint: 1305,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 932,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            }
            
         ]
    });
});