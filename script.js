// ===============================
// AJAY WITH LOVE - script.js
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    }
});

// Welcome
console.log("❤️ Welcome to Ajay With Love ❤️");

// ===============================
// Scroll To Top
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

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

}

// ===============================
// Smooth Section Animation
// ===============================

const sections = document.querySelectorAll("section");

if (sections.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));

}

// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll("nav a");

if (navLinks.length > 0 && sections.length > 0) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

}

// ===============================
// Gallery Zoom
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {

        const oldPreview = document.getElementById("preview");

        if (oldPreview) oldPreview.remove();

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
        image.style.boxShadow = "0 0 30px #00bfff";

        preview.appendChild(image);

        preview.addEventListener("click", () => {
            preview.remove();
        });

        document.body.appendChild(preview);

    });

});

// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
