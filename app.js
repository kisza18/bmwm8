/* Variables */
const vH = window.innerHeight;
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const logoLink = document.querySelector('.logoLink');
const navLinks = document.querySelectorAll('.nav-links');
const toggleBtn = document.querySelector('.toggle');
const navBar = document.querySelector('.nav-list');


/* Header and navigation collapse on scroll */
window.onscroll = function(){
    scrollNavBar();
};

function scrollNavBar(){
    let deviceWidth = 767;
    if(window.innerWidth > deviceWidth){
        if(document.body.scrollTop > vH * 0.1 || document.documentElement.scrollTop > vH * 0.1){
            header.style.background = "white";
            header.style.boxShadow = "1px 6px 8px rgba(0, 0, 0, 0.2)";
            logoLink.style.color = "black";
            for (let i = 0; i < navLinks.length; i++){
                navLinks[i].style.color = "black";
                navLinks[i].style.padding = "25px 15px";
            };
        }else{
            header.style.background = "";
            header.style.boxShadow = "";
            logoLink.style.color = "white";
            for (let i = 0; i < navLinks.length; i++){
                navLinks[i].style.color = "white";
                navLinks[i].style.padding = "40px 15px";
            };
        }
    }
    else{
        /* nothing */
    }
};

/* Toggle menu */
toggleBtn.addEventListener("click", function(){
    if(navBar.className === "nav-list" && nav.className === "nav"){
        navBar.className += " responsive";
        nav.className += " responsive";
    }else{
        navBar.className = "nav-list";
        nav.className = "nav";
    }
});

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        nav.className = "nav";
        navBar.className = "nav-list";
    })
}

/* Gsap */
let tl = new TimelineMax({});
tl.from('.section-one-content', 1.2, {y:"100%",opacity:"0", ease:Power2.easeOut});

let textScroll = new TimelineMax();
textScroll
.from('.section-three-content', 2, { opacity: "0%"})
.to('.section-three-content', 5, {scale: 1, opacity: "100%", y: "-10%"})

let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
    triggerElement: '.section-three',
    triggerHook: 0,
    duration: "100%",
})

.setTween(textScroll)
/* .addIndicators() */
.addTo(controller)

/* smooth scroll */
//navlink scroll jquery
$(document).ready(function(){
    let scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        })
    })
});