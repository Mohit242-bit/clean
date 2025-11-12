/* ===================== DOCUMENT READY ===================== */
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    initializeFormHandling();
    initializeNavbarScroll();
    initializeServiceCardAnimations();
    initializeTestimonialCarousel();
});

/* ===================== SCROLL ANIMATIONS ===================== */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards, testimonial cards, and portfolio items
    document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

/* ===================== NAVBAR SCROLL EFFECT ===================== */
function initializeNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }

        // Add scroll indicator
        updateScrollIndicator();
        lastScroll = currentScroll;
    });
}

/* ===================== FORM HANDLING ===================== */
function initializeFormHandling() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                phone: this.querySelector('input[type="tel"]').value,
                company: this.querySelectorAll('input[type="text"]')[1].value,
                interest: this.querySelector('select').value,
                message: this.querySelector('textarea').value
            };

            // Validate form
            if (!formData.name || !formData.email) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = this.querySelector('.btn-submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showNotification('Thank you! We\'ll get back to you soon! 🎉', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                // Log the form data (in real scenario, send to server)
                console.log('Form Data:', formData);
            }, 1500);
        });
    }
}

/* ===================== NOTIFICATION SYSTEM ===================== */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles dynamically
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInRight 0.3s ease forwards;
                max-width: 400px;
            }

            .notification-success {
                background: #10b981;
                color: white;
            }

            .notification-error {
                background: #ef4444;
                color: white;
            }

            .notification-info {
                background: #3b82f6;
                color: white;
            }

            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            .notification-content i {
                font-size: 1.3rem;
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }

            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* ===================== SERVICE CARD INTERACTIONS ===================== */
function initializeServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        // Staggered animation
        card.style.animationDelay = `${index * 0.1}s`;

        // Add click interaction
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });

        // Add hover sound effect (optional visual feedback)
        card.addEventListener('mouseenter', function() {
            console.log('Hovering over:', this.querySelector('h3').textContent);
        });
    });
}

/* ===================== TESTIMONIAL CAROUSEL ===================== */
function initializeTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');

    // Add cycling animation
    testimonials.forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${index * 0.15}s`;
        testimonial.style.animation = 'fadeInUp 0.6s ease forwards';
    });
}

/* ===================== SCROLL INDICATOR ===================== */
function updateScrollIndicator() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.style.color = '';
                link.style.textDecoration = '';
            });

            const currentLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (currentLink) {
                currentLink.style.color = 'var(--primary-color)';
            }
        }
    });
}

/* ===================== ADD FADEUP ANIMATION ===================== */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    .service-card {
        animation: fadeInUp 0.6s ease forwards;
    }

    .testimonial-card {
        animation: fadeInUp 0.6s ease forwards;
    }

    .portfolio-item {
        animation: fadeInUp 0.6s ease forwards;
    }

    .stat-card {
        animation: fadeInUp 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

/* ===================== SMOOTH SCROLL HELPER ===================== */
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

/* ===================== PERFORMANCE MONITORING ===================== */
window.addEventListener('load', function() {
    console.log('🎉 Website fully loaded and ready!');
    
    // Log performance metrics
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time:', pageLoadTime + 'ms');
    }
});

/* ===================== EASTER EGG ===================== */
let easterEggClicks = 0;
document.querySelector('.logo').addEventListener('click', function() {
    easterEggClicks++;
    if (easterEggClicks === 3) {
        showNotification('🎉 You found the easter egg! Contact us to learn about our special promotions!', 'success');
        easterEggClicks = 0;
    }
});
