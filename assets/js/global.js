/**
 * Global Portfolio Core Scripts
 * Handles universal functionality: Custom Cursor, Navigation, Reveal Animations, and Smooth Scrolling.
 */

/**
 * Custom Cursor Interaction
 * Creates a two-part follower cursor (dot and outline) with localized lag effect.
 */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add some lag for the outline to create a smooth effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor expansion on hover
    const hoverables = document.querySelectorAll('a, button, .project-card, input, textarea');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('expanded');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('expanded');
        });
    });
}

/**
 * Mobile Navigation Toggle
 */
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        const isVisible = primaryNav.getAttribute('data-visible');

        if (isVisible === "false") {
            primaryNav.setAttribute('data-visible', "true");
            navToggle.setAttribute('aria-expanded', "true");
        } else {
            primaryNav.setAttribute('data-visible', "false");
            navToggle.setAttribute('aria-expanded', "false");
        }
    });
}

/**
 * Scroll Reveal Animation
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});


/**
 * Lenis Smooth Scrolling
 */
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


/**
 * Header Scroll Effect
 */
const header = document.querySelector('.header');
const headerScroll = () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

if (header) {
    window.addEventListener('scroll', headerScroll);
    headerScroll(); // Check on load
}
/**
 * 3D Tilt Effect for Cards
 * Global implementation for elements with the .tilt-card class.
 * Calculates rotation based on mouse position relative to card center.
 */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
});

function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt() {
    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
}