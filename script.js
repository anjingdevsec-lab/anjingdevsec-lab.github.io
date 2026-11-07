
// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close navigation after clicking a link
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ========================================
// DARK AND LIGHT MODE
// ========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "◐";
    }
});


// ========================================
// AUTOMATIC FOOTER YEAR
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// ANIMATED CYBERSECURITY JOB TITLES
// ========================================

const roles = [
    "Cybersecurity Analyst",
    "Network Security Enthusiast",
    "Ethical Hacking Learner"
];

let roleIndex = 0;

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;

    const roleText = document.getElementById("roleText");

    if (roleText) {
        roleText.textContent = roles[roleIndex];
    }

}, 2800);


// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".section-heading, " +
    ".about-grid, " +
    ".skill-card, " +
    ".project-card, " +
    ".cert-row, " +
    ".contact-copy, " +
    ".contact-terminal"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================

const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll(".nav a");

const activeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") ===
                    `#${entry.target.id}`
                );

            });

        }

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {
    activeObserver.observe(section);
});


// ========================================
// END OF SCRIPT
// ========================================
