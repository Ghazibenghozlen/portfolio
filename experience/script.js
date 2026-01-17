/**
 * Experience Page Scripts
 */

// Observe elements with .scale-in class
const scaleObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const scaleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, scaleObserverOptions);

document.querySelectorAll('.scale-in').forEach(el => {
    scaleObserver.observe(el);
});

// We rely on global.js for .fade-in-up animations which are also used here.
