'use strict'
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
// 윈도우 스크롤 값 받아와서 메뉴바 fix시키기
document.addEventListener('scroll', ()=>{
     if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
    }); 
    const navbarMenu = document.querySelector('.navbar__menu');
    const navbarToggleBtn = document.querySelector('.nabar__toggle-btn');
    navbarToggleBtn.addEventListener('click', () => {
      console.log("씨발");
      navbarMenu.classList.toggle('open');
    });
    