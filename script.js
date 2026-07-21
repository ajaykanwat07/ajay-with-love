/* ==========================
   AJAY WITH LOVE
   Premium Script
========================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.transition = "0.6s";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        }
    }, 1000);
});

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }
    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Typing Animation

const typing = document.getElementById("typing");

if (typing) {

    const text =
        "Technology Lover • Web Learner • AI Creator";

    let i = 0;

    typing.innerHTML = "";

    function typeText() {

        if (i < text.length) {

            typing.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeText, 70);

        }

    }

    typeText();

}

// Fade Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "0.8s";

    observer.observe(section);

});

// Profile Glow

const profile = document.querySelector(".profile");

if (profile) {

    profile.addEventListener("mouseenter", () => {

        profile.style.transform = "scale(1.05)";

        profile.style.boxShadow =
            "0 0 50px #00bfff";

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform = "scale(1)";

        profile.style.boxShadow =
            "0 0 25px #00bfff";

    });

}

// Navbar Active

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item =>
            item.classList.remove("active"));

        link.classList.add("active");

    });

});

console.log("Ajay With Love Loaded Successfully ❤️");
