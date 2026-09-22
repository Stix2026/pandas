// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("primary-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form placeholder handling.
// Replace this with a real submit (e.g. to Formspree, Netlify Forms, etc.)
// since GitHub Pages only serves static files and can't process form posts.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Form isn't connected yet — see README.";
  });
}
