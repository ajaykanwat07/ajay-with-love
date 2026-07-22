/* =================================
   AJAY WITH LOVE V7
   JavaScript
================================= */


/* ===============================
   LOADER REMOVE
================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    }

});



/* ===============================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");


if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


/* Close menu after clicking link */

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});



/* ===============================
   TYPING ANIMATION
================================= */

const typingText = document.getElementById("typing");


const words = [

    "Web Creator",
    "Creative Designer",
    "Tech Explorer",
    "Future Developer"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect(){

    if(!typingText) return;


    let currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1000);

            return;

        }


    }else{


        typingText.textContent =
        currentWord.substring(0,charIndex--);


        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,100);

}


typeEffect();
/* ===============================
   GALLERY LIGHTBOX
================================= */

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.getElementById("close-lightbox");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        if(lightbox && lightboxImg){

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

        }

    });

});



if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}



if(lightbox){

    lightbox.addEventListener("click", (e)=>{

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}



/* ===============================
   SCROLL TO TOP
================================= */

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(topBtn){

        if(window.scrollY > 400){

            topBtn.style.display = "flex";

        }else{

            topBtn.style.display = "none";

        }

    }


});



if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/* ===============================
   AUTO YEAR UPDATE
================================= */

const year = document.getElementById("year");


if(year){

    year.textContent = new Date().getFullYear();

}
/* ===============================
   SMOOTH SCROLL
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/* ===============================
   SCROLL REVEAL ANIMATION
================================= */

const revealElements = document.querySelectorAll(
    ".glass, section"
);


function revealOnScroll(){

    revealElements.forEach(element => {

        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;


        if(position < screenHeight - 100){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";

        }

    });

}


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "0.6s ease";

});


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* ===============================
   ERROR PROTECTION
================================= */

window.addEventListener("error", function(event){

    console.log(
        "AJAY WITH LOVE V7 Loaded Successfully"
    );

});
