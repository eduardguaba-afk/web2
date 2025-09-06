document.addEventListener('DOMContentLoaded', function() {

    // --- SMOOTH SCROLL & CTA BUTTON --- //
    const ctaButton = document.getElementById('cta-button');
    const contactSection = document.getElementById('contacto');

    if (ctaButton && contactSection) {
        ctaButton.addEventListener('click', () => {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // --- SCROLL-TRIGGERED FADE-IN ANIMATION --- //
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the element is in view, add the 'is-visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- MOBILE NAVIGATION (HAMBURGER MENU) --- //
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // --- TYPING EFFECT FOR SUBTITLE --- //
    const subtitleElement = document.querySelector('.hero-section .subtitle');
    if (subtitleElement) {
        const originalText = subtitleElement.textContent;
        subtitleElement.textContent = ''; // Clear text initially
        let i = 0;
        const typingSpeed = 50; // milliseconds per character

        function typeWriter() {
            if (i < originalText.length) {
                subtitleElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        // Start typing after a delay to allow other animations to play
        setTimeout(typeWriter, 2000); 
    }

});