// LfancyHome - website JavaScript

document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");

      if (mobileMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
      } else {
        menuBtn.textContent = "☰";
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        menuBtn.textContent = "☰";
      });
    });
  }

  // Copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth scrolling
  const pageLinks = document.querySelectorAll('a[href^="#"]');

  pageLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
