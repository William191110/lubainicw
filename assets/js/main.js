// Navbar Menu
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}

// Fixed Top Navbar when scrolling
 window.addEventListener("scroll", function () {
   const navbar = document.querySelector(".navbar");
   navbar.classList.toggle("scroll_property", window.scrollY > 0);
 });

//  SmoothScroll
 const scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed: 1500,
  speedAsDuration:true
 });
