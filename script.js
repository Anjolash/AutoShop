let isLoginOpen = false;
let isMenuOpen = false;
const scaleFactor = 1/40;

function toggleLoginForm(){
  if (isLoginOpen){
    isLoginOpen = false;
    return document.body.classList.remove("login__form--open")

  }

  isLoginOpen = true;
  document.body.classList += " login__form--open";
}

function toggleMenu(){
  if (isMenuOpen){
    isMenuOpen = false;
    return document.body.classList.remove("menu--open")
  }

  isMenuOpen = true;
  document.body.classList += " menu--open";
}


function moveBackground(event) {
    const shapes = document.querySelectorAll(".landing__img--container")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform =`translate(${x * boolInt}px, ${y * boolInt}px)`  
    }
}


function contact(event){
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading")
  const success = document.querySelector(".modal__overlay--success")
  loading.classList += " modal__overlay--visible";
  emailjs
  .sendForm(
      "service_1vf4pz6",
      "template_87ojzje",
      event.target,
      "oF4_sJqWlRQKkz_Xe"
  ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
  })
  .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
          "service currently unavailable"
      )
  });

  
}

document.addEventListener("DOMContentLoaded", function(event){
  var swiper = new Swiper(".popular__cars", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },

      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".featured__cars", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },

      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".client__reviews", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },

      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

});