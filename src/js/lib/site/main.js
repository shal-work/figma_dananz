// работа с бургером
// Добавляем класс active, для замены бургера на крестик (это в css)
$('.navbar-toggle').on('click', function() {
    $('.burger').toggleClass('active');
});


let isClick = true;
$.prototype.dropdownFadeLeft = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            let toggleIsClick = () => {
                isClick ?  isClick = false : isClick = true;
            }
            if (isClick) {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeOutRight");
                $(`[data-toggle-id="${id}"]`).addClass("fadeInLeft");
                $(`[data-toggle-id="${id}"]`).fadeIn(5, 'flex' , toggleIsClick);
                $('.logo-link').addClass('logo-link_gadget');
                $('body').addClass('none-scroll');
            } else {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeInLeft");
                $(`[data-toggle-id="${id}"]`).addClass("fadeOutRight");
                $(`[data-toggle-id="${id}"]`).fadeOut(500, toggleIsClick);
                $('.logo-link').removeClass('logo-link_gadget');
                $('body').removeClass('none-scroll');
            }
        });
    }
};
$('.navbar-toggle').dropdownFadeLeft();
