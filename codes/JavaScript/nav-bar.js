const menuHamburger = document.querySelector(".menu-hamburger")
var menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector(".nav-links")
var hideScrollbarButton = document.getElementById('hideScrollbarButton');
var header = document.querySelector("header")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
var body = document.body;
body.classList.toggle('hide-scrollbar');
header.classList.toggle('hide-header');
menuBtn.classList.toggle('show-menu-hamburger');
})

