$(document).ready(function(){
    $('.burger-menu').click(function(event){
        $('.burger-menu, nav, .nav-img, body, .burger-item1, .burger-item2, .burger-item3, .bgOnBurger').toggleClass('active');
    });
})