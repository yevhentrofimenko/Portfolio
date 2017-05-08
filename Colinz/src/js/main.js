$(function() {

    // Slick sliders
    $("#slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    //Form
    /*Отправка данных формы по нажатию кнопки Enter: */
    function submit_handler(form) {
        alert(form.email.value);
        return false;
    }

});
