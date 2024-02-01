$('#hero .owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: false,
    autoplay: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMneu)

function mobileMneu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

AOS.init();

