import $ from '../core';


$.prototype.slidersPush = function (
        imageCarousel,
        imageCarouselItem,
        slide)  {


    let position = 0;
    let widthImg;

    const items = document.querySelector(imageCarouselItem);
    const itemImg = document.querySelectorAll(slide);
    const widthRow = window.getComputedStyle(document.querySelector(imageCarousel)).width.split('.')[0].replace(/\D/g, ''); //(2000.99222px или 2000px) выдаст 2000
    // Begin расчет zoomStep
    const screenWidth = window.screen.width;
    if (screenWidth >= 1024) {
        widthImg = 273; 
        itemImg.forEach(element => {
            element.children[0].style.width = '273px';
            element.children[0].style.height = '170px';
            element.style.margin = '0' ;
        });
    } else if (screenWidth >= 900 && screenWidth < 1024) {
        widthImg = 400;
        itemImg.forEach(element => {
            element.children[0].style.width = '400px';
            element.children[0].style.height = 'auto';
            element.style.margin = '0 10px' ;
        });
    } else if (screenWidth >= 767 && screenWidth < 900) {
        let deltaWidth = (900 - screenWidth)/2;    
        widthImg = (400 - deltaWidth);
        itemImg.forEach(element => {
            element.children[0].style.width = (400 - deltaWidth) +'px';
            element.children[0].style.height = 'auto';
            element.style.margin = '0' ;
        });
    } else if (screenWidth >= 480 && screenWidth < 767) {
        let deltaWidth = (screenWidth - 64 - 400)/2;  
        widthImg = 400 + deltaWidth + deltaWidth;  
        itemImg.forEach(element => {
            element.children[0].style.width = '400px';
            element.children[0].style.height = 'auto';
            element.style.marginLeft = deltaWidth + 'px';
            element.style.marginRight= deltaWidth + 'px';
        });
        
    } else {  //if (screenWidth < 480)
        let deltaWidth = (480 - screenWidth);  
        widthImg = (400 - deltaWidth);  
        itemImg.forEach(element => {
            element.children[0].style.width = (400 - deltaWidth) +'px';
            element.children[0].style.height = 'auto';
            element.style.margin = '0' ;
        });
    } 
    // end расчет zoomStep
    //const widthCarousel = window.getComputedStyle(document.querySelector(imageCarouselItem)).width.split('.')[0].replace(/\D/g, '');//(2000.99222px или 2000px) выдаст 2000
    let widthCarousel = +(widthImg * itemImg.length);
    let quantityInWindow = Number((widthRow / widthImg).toFixed());
    let slideIndex = quantityInWindow; 
    let movingByStep = Number(widthImg * 100 / widthCarousel);
    function showSlides(n) {
        if (n > itemImg.length) {
            slideIndex = quantityInWindow;
            position = -movingByStep;
        }
        if (n < quantityInWindow) {
            slideIndex = itemImg.length;
            position = (movingByStep * (itemImg.length - (quantityInWindow - 1)));
        }
    }

    function plusSlides(j) {
        if (j > 0) {
            items.classList.remove('slideOutLeft33per');
            showSlides(slideIndex += j);
            document.documentElement.style.setProperty('--my-start-per', position + '%');
            position += movingByStep;
            document.documentElement.style.setProperty('--my-end-per', position + '%');
            let value = getComputedStyle(document.documentElement).getPropertyValue('--my-start-per');
            value = getComputedStyle(document.documentElement).getPropertyValue('--my-end-per');
        } else if (j < 0) {
            items.classList.remove('slideOutRight33per');
            showSlides(slideIndex += j);
            document.documentElement.style.setProperty('--my-start-per', position + '%');
            position -= movingByStep;
            document.documentElement.style.setProperty('--my-end-per', position + '%');
    
            let value = getComputedStyle(document.documentElement).getPropertyValue('--my-start-per');
            value = getComputedStyle(document.documentElement).getPropertyValue('--my-end-per');
        } else {
            items.classList.remove('slideOutLeft33per');
            items.classList.remove('slideOutRight33per');
            showSlides(itemImg.length+1);
            document.documentElement.style.setProperty('--my-start-per', position + '%');
            position += movingByStep;
            document.documentElement.style.setProperty('--my-end-per', position + '%');
            let value = getComputedStyle(document.documentElement).getPropertyValue('--my-start-per');
            value = getComputedStyle(document.documentElement).getPropertyValue('--my-end-per');
        }
    }
    
    plusSlides(0);

    try {
        const prevBtn = document.querySelector('.fa-angle-left'),
            nextBtn = document.querySelector('.fa-angle-right');

        prevBtn.addEventListener('click', () => {
            items.classList.remove('slideOutLeft33per');
            plusSlides(-1);
            items.classList.add('slideOutRight33per');
        });
        
        nextBtn.addEventListener('click', () => {
            items.classList.remove('slideOutRight33per');
            plusSlides(1);
            items.classList.add('slideOutLeft33per');
        });
    } catch (e) {}
};


// document.addEventListener("DOMContentLoaded", function(event)
// {
//     $('.image-carousel').slidersPush('.image-carousel', '.image-carousel-item', '.item-img'); 
//     window.onresize = function() {
//         resize_window();
//     };
// });


// function resize_window()
// {
//     $('.image-carousel').slidersPush('.image-carousel', '.image-carousel-item', '.item-img');
// }