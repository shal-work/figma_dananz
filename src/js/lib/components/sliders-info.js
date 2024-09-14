import $ from '../core';

$.prototype.sliders_info = function(slideIndex = 1) {

    const slides = '.sliders-animated-item';
    const prev = '.sliders-animated-prev';
    const next = '.sliders-animated-next';

    // let slideIndex = 1;

    const items = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items[slideIndex - 1].setAttribute('id', 'visible-img');

        let img = ($(items[slideIndex - 1]).html()).split("/img/").pop().split("\"").shift() ; 
        let link = ($(items[slideIndex - 1]).html()).split(" <img src=\"").pop().split("\"").shift() ; 
        // console.log(img);
        // console.log(link);
  
        // $('.modal-dialog__footer_item p').html(img);
        $('.modal-dialog__footer_item').html( `<p>${img}</p>` );
        $('.modal-dialog__heade_download a').removeAttribute( 'href');
        $('.modal-dialog__heade_download a').removeAttribute( 'download');
        $('.modal-dialog__heade_download a').setAttribute( 'href', link);
        $('.modal-dialog__heade_download a').setAttribute( 'download', img);

        // $('.ico-download').setAttribute( 'href', img);

        $('.swiper-pagination-current').html( `${slideIndex} / ${items.length}` );
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
            plusSlides(-1);
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            plusSlides(1);
        });

    } catch(e){console.log('err');}

};

// $('.sliders-animated').sliders_info();
