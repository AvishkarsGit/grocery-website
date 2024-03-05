let searchForm = document.querySelector('.search-form');



document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
  login.classList.remove('active');
  signup.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
  login.classList.remove('active');
  signup.classList.remove('active');
}



let navbar = document.querySelector('.navbar');
let login = document.querySelector('.btn-log-in');
let signup = document.querySelector('.btn-sign-up');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  login.classList.remove('active');
  signup.classList.remove('active');
}






window.onscroll = () =>{

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
    signup.classList.remove('active');
}
// product slider
let swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,

      autoplay:{
        delay:4500,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });

    
// review slider
 swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,

      autoplay:{
        delay:4500,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });


