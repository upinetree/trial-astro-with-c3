document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
  document.querySelector(".clock").classList.toggle("hidden");
  document.querySelector(".theme-icon").classList.toggle("hidden");
});
