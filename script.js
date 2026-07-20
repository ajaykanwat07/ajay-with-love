// =======================
// Ajay With Love - Version 2
// =======================

// Welcome Message
window.addEventListener("load", function () {
    setTimeout(function () {
        alert("❤️ Welcome to Ajay With Love ❤️\n\nThanks for visiting my portfolio!");
    }, 600);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";
    observer.observe(section);
});

// Navbar Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 20){
        header.style.boxShadow="0 5px 20px rgba(0,191,255,.5)";
    }else{
        header.style.boxShadow="none";
    }

});

// Profile Glow Effect
const profile=document.querySelector(".profile");

profile.addEventListener("mouseenter",()=>{

profile.style.boxShadow="0 0 60px #00bfff";

});

profile.addEventListener("mouseleave",()=>{

profile.style.boxShadow="0 0 35px #00bfff";

});

// Footer Year
const footer=document.querySelector("footer");

footer.innerHTML="© "+new Date().getFullYear()+" Ajay Kanwat | Made with ❤️";
