// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// ── Scroll progress bar ──
const scrollBar = document.getElementById('scroll-progress');
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = (scrollTop / docHeight * 100) + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ── Scroll animations (IntersectionObserver) ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// ── Parallax no hero ──
const heroImg = document.querySelector('#hero .hidden.md\\:block img');
function updateParallax() {
    if (!heroImg) return;
    const scrollY = window.scrollY;
    heroImg.style.transform = `translateY(${scrollY * 0.3}px) scale(1.05)`;
}
window.addEventListener('scroll', updateParallax, { passive: true });

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

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.style.opacity = '1';
    lightbox.style.pointerEvents = 'auto';
    lightboxImg.style.transform = 'scale(1)';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    setTimeout(() => { lightbox.style.pointerEvents = 'none'; }, 300);
    document.body.style.overflow = '';
}

document.querySelectorAll('.lightbox-trigger').forEach(card => {
    card.addEventListener('click', () => {
        openLightbox(card.dataset.img, card.dataset.alt);
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
