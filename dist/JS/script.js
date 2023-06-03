const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu-active");
});

const stars = document.querySelectorAll(".rating i");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

var swiper = new Swiper(".testimonial", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// LOADER
const loader = document.querySelector(".loader");
function loaderActive() {
  loader.classList.add("loader-active");
}
function loaderActiveTime() {
  setInterval(loaderActive, 3000);
}
window.onload = loaderActiveTime();
// LOADER

// GIF RATE
const rateIcon = document.querySelector(".rate-gif");
let showTimeout = null;

window.addEventListener("scroll", function () {
  hiddenIcon();

  if (showTimeout !== null) {
    this.clearTimeout(showTimeout);
  }
  showTimeout = this.setTimeout(showhiddenIcont, 100);
});

function hiddenIcon() {
  rateIcon.style.right = "-100px";
}

function showhiddenIcont() {
  rateIcon.style.right = "8px";
}
// GIF RATE

// Scroll UP
var a;
function myFunction() {
  if (a == 1) {
    document.getElementById("button-scroll").style.display = "inline-block";
    return (a = 0);
  } else {
    document.getElementById("button-scroll").style.display = "none";
    return (a = 1);
  }
}

const scrollUp = document.querySelector(".shape-scroll");
const btnScroll = document.getElementById("button-scroll");

menu.addEventListener("click", () => {
  scrollUp.classList.toggle("scroll-active");
});

scrollUp.addEventListener("click", () => {
  scrollUp.classList.remove("scroll-active");
});

// Scroll Up
