let div1 = document.querySelector('.header_content_block1')
let div2 = document.querySelector('.header_content_block2')

let icon1 = document.querySelector('.header_car_link1')
let icon2 = document.querySelector('.header_car_link2')
let icon3 = document.querySelector('.header_car_link3')


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    div1.style.marginLeft = '-' + value * 0.8 + 'px';
    div2.style.marginRight = '-' + value * 0.8 + 'px';

    icon1.style.rotate = value * 0.2 + 'deg';
    icon2.style.rotate = value * 0.2 + 'deg';
    icon3.style.rotate = value * 0.2 + 'deg';
})
