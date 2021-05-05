// =============== Cards Carousel ===============
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [2000])
    }), $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
});

// =============== Gallery Portfolio ===============