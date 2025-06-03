document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuTrigger = document.getElementById("mobile-menu-trigger");
  const navbar = document.getElementById("navbar");
  const navMenu = navbar.querySelector(".nav-menu");
  const contactButton = navbar.querySelector(".main-contact-btn");

  if (mobileMenuTrigger && navbar) {
    mobileMenuTrigger.addEventListener("click", function () {
      navbar.classList.toggle("is-active");

      if (navbar.classList.contains("is-active")) {
        document.body.classList.add("menu-open-no-scroll");
      } else {
        document.body.classList.remove("menu-open-no-scroll");
      }
    });
  }

  const navLinks = navMenu.querySelectorAll(".nav-links");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("is-active")) {
        navbar.classList.remove("is-active");
        document.body.classList.remove("menu-open-no-scroll");
      }
    });
  });

  if (contactButton) {
    contactButton.addEventListener("click", () => {
      if (navbar.classList.contains("is-active") && window.innerWidth <= 768) {
        navbar.classList.remove("is-active");
        document.body.classList.remove("menu-open-no-scroll");
      }
    });
  }
});
