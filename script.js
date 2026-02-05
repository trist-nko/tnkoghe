const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileDropdown = document.querySelector(".mobile-dropdown > a");
const mobileDropdownContent = document.querySelector(
  ".mobile-dropdown-content",
);
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
});

mobileDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  mobileDropdownContent.style.display =
    mobileDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
    mobileNav.classList.remove("is-active");
    hamburger.classList.remove("is-active");
  }
});

mobileNavLinks.forEach((link) => {
  if (!link.parentElement.classList.contains("mobile-dropdown")) {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-active");
      hamburger.classList.remove("is-active");
    });
  }
});
