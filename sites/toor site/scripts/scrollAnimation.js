const animItems = document.querySelectorAll('._anim-Show-left');
const animItems2 = document.querySelectorAll('._anim-Show-right');
const animItems3 = document.querySelectorAll('._anim-Show-bottom');

const animItems4 = document.querySelectorAll('._anim-Show-left2');
const animItems5 = document.querySelectorAll('._anim-Show-right2');

const animItems6 = document.querySelectorAll('._anim-Show-left3');
const animItems7 = document.querySelectorAll('._anim-Show-right3');

const animItems8 = document.querySelectorAll('._anim-Show-left4');
const animItems9 = document.querySelectorAll('._anim-Show-right4');

const animItems10 = document.querySelectorAll('._anim-Show-bottom2');


if(animItems.length && animItems2.length && animItems3.length && animItems4.length && animItems5.length && animItems6.length && animItems7.length && animItems8.length && animItems9.length && animItems10.length > 0 ) {
    window.addEventListener('scroll', animOnscroll);
    function animOnscroll() {
        for(let index = 0; index < animItems.length && animItems2.length && animItems3.length && animItems4.length && animItems5.length && animItems6.length && animItems7.length && animItems8.length && animItems9.length && animItems10.length; index++) {
            const animItem = animItems[index];
            const animItem2 = animItems2[index];
            const animItem3 = animItems3[index];
            const animItem4 = animItems4[index];
            const animItem5 = animItems5[index];
            const animItem6 = animItems6[index];
            const animItem7 = animItems7[index];
            const animItem8 = animItems8[index];
            const animItem9 = animItems9[index];
            const animItem10 = animItems10[index];

            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;

            const animItemHeight2 = animItem.offsetHeight;
            const animItemOffset2 = offset(animItem2).top;

            const animItemHeight3 = animItem.offsetHeight;
            const animItemOffset3 = offset(animItem3).top;

            const animItemHeight4 = animItem.offsetHeight;
            const animItemOffset4 = offset(animItem4).top;

            const animItemHeight5 = animItem.offsetHeight;
            const animItemOffset5 = offset(animItem5).top;

            const animItemHeight6 = animItem.offsetHeight;
            const animItemOffset6 = offset(animItem6).top;

            const animItemHeight7 = animItem.offsetHeight;
            const animItemOffset7 = offset(animItem7).top;

            const animItemHeight8 = animItem.offsetHeight;
            const animItemOffset8 = offset(animItem8).top;

            const animItemHeight9 = animItem.offsetHeight;
            const animItemOffset9 = offset(animItem9).top;

            const animItemHeight10 = animItem.offsetHeight;
            const animItemOffset10 = offset(animItem10).top;

            const animStart = 4;

            let animItemPoint = window.innerHeight- animItemHeight / animStart;
            let animItemPoint2 = window.innerHeight- animItemHeight2 / animStart;
            let animItemPoint3 = window.innerHeight- animItemHeight3 / animStart;
            let animItemPoint4 = window.innerHeight- animItemHeight4 / animStart;
            let animItemPoint5 = window.innerHeight- animItemHeight5 / animStart;
            let animItemPoint6 = window.innerHeight- animItemHeight6 / animStart;
            let animItemPoint7 = window.innerHeight- animItemHeight7 / animStart;
            let animItemPoint8 = window.innerHeight- animItemHeight8 / animStart;
            let animItemPoint9 = window.innerHeight- animItemHeight9 / animStart;
            let animItemPoint10 = window.innerHeight- animItemHeight10 / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }  
            if(animItemHeight2 > window.innerHeight) {
                animItemPoint2 = window.innerHeight - window.innerHeight / animStart;
            }   
            if(animItemHeight3 > window.innerHeight) {
                animItemPoint3 = window.innerHeight - window.innerHeight / animStart;
            }  
            if(animItemHeight4 > window.innerHeight) {
                animItemPoint4 = window.innerHeight - window.innerHeight / animStart;
            }   
            if(animItemHeight5 > window.innerHeight) {
                animItemPoint5 = window.innerHeight - window.innerHeight / animStart;
            }  
            if(animItemHeight6 > window.innerHeight) {
                animItemPoint6 = window.innerHeight - window.innerHeight / animStart;
            }   
            if(animItemHeight7 > window.innerHeight) {
                animItemPoint7 = window.innerHeight - window.innerHeight / animStart;
            }  
            if(animItemHeight8 > window.innerHeight) {
                animItemPoint8 = window.innerHeight - window.innerHeight / animStart;
            }   
            if(animItemHeight9 > window.innerHeight) {
                animItemPoint9 = window.innerHeight - window.innerHeight / animStart;
            }  
            if(animItemHeight10 > window.innerHeight) {
                animItemPoint10 = window.innerHeight - window.innerHeight / animStart;
            }  



            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset2 - animItemPoint) && pageYOffset < (animItemOffset2 + animItemHeight2)) {
                animItem2.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset3 - animItemPoint) && pageYOffset < (animItemOffset3 + animItemHeight3)) {
                animItem3.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset4 - animItemPoint) && pageYOffset < (animItemOffset4 + animItemHeight4)) {
                animItem4.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset5 - animItemPoint) && pageYOffset < (animItemOffset5 + animItemHeight5)) {
                animItem5.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset6 - animItemPoint) && pageYOffset < (animItemOffset6 + animItemHeight6)) {
                animItem6.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset7 - animItemPoint) && pageYOffset < (animItemOffset7 + animItemHeight7)) {
                animItem7.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset8 - animItemPoint) && pageYOffset < (animItemOffset8 + animItemHeight8)) {
                animItem8.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset9 - animItemPoint) && pageYOffset < (animItemOffset9 + animItemHeight9)) {
                animItem9.classList.add('_active');
            }
            if ((pageYOffset > animItemOffset10 - animItemPoint) && pageYOffset < (animItemOffset10 + animItemHeight10)) {
                animItem10.classList.add('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}
setTimeout(() => {animOnscroll();}, 400)
