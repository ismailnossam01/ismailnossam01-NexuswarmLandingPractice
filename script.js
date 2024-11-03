// Initialize Lucide icons when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create Lucide icons
    const { createIcons } = lucide;
    createIcons({
        attrs: {
            class: ['lucide-icon'],
            stroke: 'currentColor'
        }
    });

    // Intersection Observer for reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.reveal, .slide-up, .slide-left, .slide-right, .fade-in, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // Initial animations
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('visible');
    }, 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Form submission handling
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (Demo only)');
    });
}