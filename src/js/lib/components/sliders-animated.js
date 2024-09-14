import $ from '../core';

$.prototype.slidersAnimated = function(slideIndex = 1) {

    const slides = '.sliders-animated-item';
    const prev = '.sliders-animated-prev';
    const next = '.sliders-animated-next';

    let idOne = true,
        idTime = 120;

    const items = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach(item => {
            // item.classList.add("animated");
            item.classList.add("animated-0_2");
            item.style.display = "none";
            item.classList.remove('slideOutLeft');
            item.classList.remove('slideOutRight');
            item.classList.remove('slideInRight');
            item.classList.remove('slideInLeft');
            item.removeAttribute('id'); //remov 'visible-img'
        });

        if (idOne) {
            items[slideIndex - 1].style.display = 'block';
        }
        items[slideIndex - 1].setAttribute('id', 'visible-img');

        idOne = false;
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            items[slideIndex - 1].classList.add('slideOutRight');
            setTimeout(function () { 
                plusSlides(-1);
                items[slideIndex - 1].style.display = 'block';
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, idTime); //задержка
            
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            items[slideIndex - 1].classList.add('slideOutLeft');
            setTimeout(function () { 
                plusSlides(1);
                items[slideIndex - 1].style.display = 'block';
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            }, idTime); //задержка 

        });

    } catch(e){console.log('err');}

};

// $('.sliders-animated').slidersAnimated();
