/* ===================================
   AJAY WITH LOVE - VERSION 4
=================================== */

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if(loader){
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }

    },1000);

});

// Typing Animation

const typing=document.getElementById("typing");

const text="Technology Lover • Web Developer • AI Creator ❤️";

let i=0;

function typeWriter(){

if(typing && i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,70);

}

}

typeWriter();


// Scroll To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// Navbar Active

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});


// Profile Glow Animation

const profile=document.querySelector(".profile");

if(profile){

setInterval(()=>{

profile.style.boxShadow="0 0 60px #00bfff";

setTimeout(()=>{

profile.style.boxShadow="0 0 30px #00bfff";

},800);

},2500);

}


// Welcome Message

setTimeout(()=>{

console.log("Welcome to Ajay With Love ❤️");

},1200);
// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }

});
