/* ==========================
   AJAY WITH LOVE - SCRIPT.JS
========================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Welcome Message
setTimeout(() => {
    alert("❤️ Welcome to Ajay With Love ❤️\n\nThank you for visiting my website!");
}, 1500);

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Fade Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s ease";

    observer.observe(section);

});

// Profile Glow Effect
const profile = document.querySelector(".profile");

profile.addEventListener("mouseenter", () => {

    profile.style.transform = "scale(1.05)";
    profile.style.boxShadow = "0 0 60px #00bfff";

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "scale(1)";
    profile.style.boxShadow = "0 0 30px #00bfff";

});

// Navigation Active Link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

   
