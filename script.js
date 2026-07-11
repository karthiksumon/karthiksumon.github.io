/*==================================================
            TYPING ANIMATION
==================================================*/

const words = [
    "Python Developer",
    "Django Developer",
    "AI Enthusiast",
    "Web Developer",
    "Full Stack Developer",
    "Data Analytics Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();


/*==================================================
            REVEAL ON SCROLL
==================================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


/*==================================================
            STICKY NAVBAR
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 10%";
        navbar.style.background = "rgba(0,0,0,.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.padding = "18px 10%";
        navbar.style.background = "rgba(0,0,0,.82)";
        navbar.style.boxShadow = "none";

    }

});


/*==================================================
            MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/*==================================================
            SCROLL TO TOP
==================================================*/

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*==================================================
            ACTIVE NAV LINK
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================================
            SKILL BAR ANIMATION
==================================================*/

const progressBars = document.querySelectorAll(".progress-bar");

const animateSkills = () => {

    progressBars.forEach(bar => {

        const finalWidth = bar.getAttribute("style");

        bar.style.width = "0";

        setTimeout(() => {

            bar.style = finalWidth;

        }, 300);

    });

};

const skillsSection = document.querySelector("#skills");

let animated = false;

window.addEventListener("scroll", () => {

    if (!skillsSection) return;

    const top = skillsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100 && !animated) {

        animateSkills();
        animated = true;

    }

});


/*==================================================
            SMOOTH LINK SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==================================================
            CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}


/*==================================================
            PAGE LOADER
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log("%cWelcome to Karthik Sumon's Portfolio",
"color:#00ff88;font-size:18px;font-weight:bold;");
.nav-links.show{
    display:flex;
    position:absolute;
    top:75px;
    right:20px;
    flex-direction:column;
    background:#101010;
    padding:20px;
    border-radius:12px;
    border:1px solid #00ff88;
    width:220px;
    box-shadow:0 15px 35px rgba(0,0,0,.4);
}

.nav-links a.active{
    color:#00ff88;
}
