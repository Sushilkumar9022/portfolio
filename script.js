// =============================
// Typing Animation
// =============================

const typingElement = document.getElementById("typing");

const roles = [
    "Web Developer",
    "Frontend Developer",
    "Java Developer",
    "BCA Student",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typingAnimation() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(
        typingAnimation,
        deleting ? 60 : 100
    );
}

typingAnimation();


// =============================
// Mobile Menu
// =============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =============================
// Contact Form
// =============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received 🚀"
    );

    contactForm.reset();

});


// =============================
// Scroll Reveal
// =============================

const sections =
    document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "all 0.8s ease";

    observer.observe(section);

});