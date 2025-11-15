// Scroll reveal animation
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initial reveal
revealElements();

// Reveal on scroll
window.addEventListener('scroll', revealElements);

// Hero title animation on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');

    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 400);

    setTimeout(() => {
        ctaButton.style.opacity = '1';
        ctaButton.style.transform = 'translateY(0)';
    }, 600);
});

// Initialize hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .cta-button');
    heroElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)';
    });
});
