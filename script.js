// ===============================
// AJAY WITH LOVE - SCRIPT.JS
// ===============================

// Loader
window.onload = function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 1000);
    }
};

// Welcome
setTimeout(() => {
    console.log("❤️ Welcome to Ajay With Love ❤️");
}, 1200);

// Scroll To Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
// ===============================
// Smooth Section Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {
    observer.observe(section);
});


// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Gallery Zoom (No Errors)
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {

        if (!document.getElementById("preview")) {

            const preview = document.createElement("div");
            preview.id = "preview";

            preview.style.position = "fixed";
            preview.style.top = "0";
            preview.style.left = "0";
            preview.style.width = "100%";
            preview.style.height = "100%";
            preview.style.background = "rgba(0,0,0,0.9)";
            preview.style.display = "flex";
            preview.style.justifyContent = "center";
            preview.style.alignItems = "center";
            preview.style.zIndex = "99999";

            const image = document.createElement("img");
            image.src = img.src;
            image.style.maxWidth = "90%";
            image.style.maxHeight = "90%";
            image.style.borderRadius = "15px";

            preview.appendChild(image);

            preview.onclick = () => preview.remove();

            document.body.appendChild(preview);

        }

    });

});
