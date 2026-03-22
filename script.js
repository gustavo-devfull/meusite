// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close menu on link click
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});
