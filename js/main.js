$(document).ready(function(){
    $('.project-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
  });