/* ==========================================================
   Happy Birthday Website
   script.js
   PART 1

   ✔ Loading Screen
   ✔ Smooth Scroll
   ✔ Back To Top
   ✔ Floating Stars
   ✔ Floating Particles
   ✔ Floating Balloons
   ✔ Letter Typewriter
========================================================== */

"use strict";

/* ==========================================================
   HELPERS
========================================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader = $("#loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    },3000);

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

$$('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

const backBtn=$("#backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backBtn.style.display="block";

    }else{

        backBtn.style.display="none";

    }

});

backBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================================
   FLOATING STARS
========================================================== */

const starContainer=$("#stars");

function createStars(){

    for(let i=0;i<170;i++){

        const star=document.createElement("span");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=Math.random()*4+"s";

        star.style.animationDuration=

        2+Math.random()*4+"s";

        starContainer.appendChild(star);

    }

}

createStars();


/* ==========================================================
   FLOATING PARTICLES
========================================================== */

const particleContainer=$("#particles");

function createParticles(){

    setInterval(()=>{

        const p=document.createElement("span");

        p.className="particle";

        p.style.left=Math.random()*100+"%";

        p.style.animationDuration=

        8+Math.random()*8+"s";

        p.style.opacity=Math.random();

        particleContainer.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },16000);

    },250);

}

createParticles();


/* ==========================================================
   FLOATING BALLOONS
========================================================== */

const balloonContainer=$("#balloons");

const balloons=[

"🎈",
"🎈",
"🎈",
"🎉",
"🎁"

];

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML=

    balloons[Math.floor(Math.random()*balloons.length)];

    balloon.style.left=

    Math.random()*100+"%";

    balloon.style.animationDuration=

    12+Math.random()*10+"s";

    balloon.style.fontSize=

    30+Math.random()*25+"px";

    balloonContainer.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },22000);

}

setInterval(createBalloon,1800);


/* ==========================================================
   TYPEWRITER
========================================================== */

const typeTarget=$("#typewriter");

const originalText=

typeTarget.textContent.trim();

typeTarget.textContent="";

let index=0;

let typingStarted=false;

function startTypewriter(){

    if(typingStarted) return;

    typingStarted=true;

    function type(){

        if(index<originalText.length){

            typeTarget.textContent+=

            originalText.charAt(index);

            index++;

            setTimeout(type,22);

        }

    }

    type();

}


/* ==========================================================
   START TYPEWRITER WHEN LETTER IS VISIBLE
========================================================== */

const letterSection=$("#letter");

const observer=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startTypewriter();

        }

    });

},

{

    threshold:.35

}

);

observer.observe(letterSection);


/* ==========================================================
   OPTIONAL:
   PLAY MUSIC AFTER FIRST USER CLICK
========================================================== */

const music=$("#bgMusic");

let musicStarted=false;

document.addEventListener("click",()=>{

    if(!music) return;

    if(musicStarted) return;

    music.volume=.35;

    music.play().catch(()=>{});

    musicStarted=true;

},{once:true});


/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.18
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});


/* ==========================================================
   EASTER EGG MESSAGE
========================================================== */

const eggMessage = $("#easterEggMessage");

function showEggMessage(text){

    eggMessage.textContent=text;

    eggMessage.classList.add("show");

    clearTimeout(eggMessage.timer);

    eggMessage.timer=setTimeout(()=>{

        eggMessage.classList.remove("show");

    },2500);

}


/* ==========================================================
   CONFETTI ENGINE
========================================================== */

const confettiColors=[

"#FFD166",
"#6D5DF6",
"#60A5FA",
"#ffffff",
"#FF6B6B",
"#6EE7B7"

];

function launchConfetti(count=180){

    for(let i=0;i<count;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=

            confettiColors[
                Math.floor(
                    Math.random()*confettiColors.length
                )
            ];

        piece.style.width=

            6+Math.random()*8+"px";

        piece.style.height=

            10+Math.random()*12+"px";

        piece.style.animationDuration=

            3+Math.random()*3+"s";

        piece.style.transform=

            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },6500);

    }

}


/* ==========================================================
   GIFT POPUP
========================================================== */

const giftButton=$("#giftButton");
const popup=$("#giftPopup");
const closePopup=$("#closePopup");

giftButton.addEventListener("click",()=>{

    popup.classList.add("active");

    launchConfetti(220);

});

closePopup.addEventListener("click",()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});


/* ==========================================================
   MOON CLICK
========================================================== */

const moon=$("#moon");

moon.addEventListener("click",()=>{

    showEggMessage("🌙 Soya kar kabhi.");

    moon.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.18)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:500

    });

});


/* ==========================================================
   KEYBOARD EASTER EGGS
========================================================== */

document.addEventListener("keydown",(e)=>{

    const key=e.key.toLowerCase();

    if(key==="m"){

        showEggMessage("🐸 MENDAK DETECTED 🐸");

    }

    if(key==="s"){

        showEggMessage("💀 Shamshaan abhi band hai 😂");

    }

});


/* ==========================================================
   CURSOR SPARKLES
========================================================== */

const sparkleContainer=$("#sparkle-container");

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("span");

    sparkle.className="sparkle";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.background=

        confettiColors[
            Math.floor(Math.random()*confettiColors.length)
        ];

    sparkle.style.boxShadow=

        `0 0 12px ${sparkle.style.background}`;

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },800);

});


/* ==========================================================
   EXTRA HOVER MAGIC
========================================================== */

document.querySelectorAll(".glass-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.animate([

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-8px)"

            }

        ],{

            duration:250,

            fill:"forwards"

        });

    });

    card.addEventListener("mouseleave",()=>{

        card.animate([

            {

                transform:"translateY(-8px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],{

            duration:250,

            fill:"forwards"

        });

    });

});

/* ==========================================================
   script.js
   PART 3

   ✔ Chess Rain
   ✔ Slideshow
   ✔ Final Typing
   ✔ Final Confetti

   NOTE: The old "Gallery Lightbox" block has been removed —
   the HTML has no #lightbox / #lightboxImage / .gallery-image
   elements, so that code was throwing a "Cannot read
   properties of null" error and silently killing every
   script line that came after it (including the slideshow).
========================================================== */


/* ==========================================================
   CHESS RAIN (Press C)
========================================================== */

const chessPieces = [
    "♔","♕","♖","♗","♘","♙",
    "♚","♛","♜","♝","♞","♟"
];

function chessRain(){

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.className="chess-piece";

        piece.innerHTML=

            chessPieces[
                Math.floor(
                    Math.random()*chessPieces.length
                )
            ];

        piece.style.left=Math.random()*100+"vw";

        piece.style.fontSize=

            24+Math.random()*20+"px";

        piece.style.animationDuration=

            4+Math.random()*3+"s";

        piece.style.animationDelay=

            Math.random()*2+"s";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },7000);

    }

}

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="c"){

        chessRain();

        showEggMessage("♟ Chess Time!");

    }

});


/* ==========================================================
   SLIDESHOW
========================================================== */

let slideIndex=0;

const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

function showSlide(index){

    if(index>=slides.length){

        slideIndex=0;

    }

    if(index<0){

        slideIndex=slides.length-1;

    }

    slides.forEach(slide=>{

        slide.style.display="none";

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[slideIndex].style.display="block";

    dots[slideIndex].classList.add("active");

}

function nextSlide(){

    slideIndex++;

    if(slideIndex>=slides.length){

        slideIndex=0;

    }

    showSlide(slideIndex);

}

function prevSlide(){

    slideIndex--;

    if(slideIndex<0){

        slideIndex=slides.length-1;

    }

    showSlide(slideIndex);

}

document.querySelector(".next").addEventListener("click",()=>{

    nextSlide();

});

document.querySelector(".prev").addEventListener("click",()=>{

    prevSlide();

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        slideIndex=index;

        showSlide(slideIndex);

    });

});

showSlide(slideIndex);

setInterval(nextSlide,4000);


/* ==========================================================
   FINAL TYPING
========================================================== */

const finalTarget=$("#finalTyping");

const finalText=

finalTarget.textContent.trim();

finalTarget.textContent="";

let finalIndex=0;

let finalStarted=false;

function startFinalTyping(){

    if(finalStarted) return;

    finalStarted=true;

    function type(){

        if(finalIndex<finalText.length){

            finalTarget.textContent+=

                finalText.charAt(finalIndex);

            finalIndex++;

            setTimeout(type,35);

        }

    }

    type();

}


/* ==========================================================
   FINAL OBSERVER
========================================================== */

const finalSection=$("#final");

const finalObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startFinalTyping();

            launchConfetti(250);

        }

    });

},{
    threshold:.35
});

finalObserver.observe(finalSection);


/* ==========================================================
   OPTIONAL ESC TO CLOSE POPUPS
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("active");

    }

});


/* ==========================================================
   SMALL RANDOM GLOW ON MOON
========================================================== */

setInterval(()=>{

    moon.animate([

        {
            boxShadow:"0 0 30px #FFD166"
        },

        {
            boxShadow:"0 0 60px #FFD166"
        },

        {
            boxShadow:"0 0 30px #FFD166"
        }

    ],{

        duration:1800

    });

},3000);


/* ==========================================================
   WELCOME CONFETTI
========================================================== */

setTimeout(()=>{

    launchConfetti(120);

},3300);


/* ==========================================================
   END OF SCRIPT
========================================================== */

console.log(
`
🐸 Happy Birthday Aru!

Made with ❤️
From your favourite Mendak.

Hidden Keys:

M → MENDAK DETECTED 🐸

S → Shamshaan abhi band hai 😂

C → Chess Rain ♟

Click the moon 🌙
`
);
