// Toast
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}


// Dark Mode

const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.style.transition = ".3s";
  darkBtn.classList.toggle("dark-btn-on");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Local Storage

if(localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

// End Local Storage


// Navbar
const navbar = document.getElementById("second-nav");
window.addEventListener("scroll", () => {
  if (this.scrollY > 0 && document.body.classList != "dark-theme") {
    navbar.classList.add("fixed-top");
    navbar.classList.add("bg-white");
    navbar.classList.add("shadow-sm");
  } else if (this.scrollY > 0 && document.body.classList == "dark-theme") {
    navbar.classList.add("fixed-top");
    navbar.classList.add("bg-dark-theme");
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("fixed-top");
    navbar.classList.remove("bg-white");
    navbar.classList.remove("shadow-sm");
    navbar.classList.remove("text-dark");
  }
});

// Categories
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// Tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const password = document.getElementById("password");
const eye_close = document.getElementById("eye-close");
const eye_show = document.getElementById("eye-show");

eye_close.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eye_close.style.display = "none";
    eye_show.style.display = "block";
  } else {
    password.type = "password";
  }
});
eye_show.addEventListener("click", () => {
  if (password.type == "text") {
    password.type = "password";
    eye_close.style.display = "block";
    eye_show.style.display = "none";
  } else {
    password.type = "text";
  }
});
