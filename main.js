// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    AOS.init({
        duration: 800,
        once: true
    });

    // Form handling
    const form = document.querySelector('.hero-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const email = form.querySelector('input[type="email"]').value;
            const subject = form.querySelector('input[placeholder="Type your subject"]').value;
            
            if (!email || !subject) {
                alert('Please fill in all required fields');
                return;
            }

            // You can add AJAX submission here
            alert('Form submitted successfully!');
        });
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Add lazy loading to images
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });
});

// Scroll to top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (scrollTopButton) {
        if (window.pageYOffset > 100) {
            scrollTopButton.classList.remove('hidden');
        } else {
            scrollTopButton.classList.add('hidden');
        }
    }
});
