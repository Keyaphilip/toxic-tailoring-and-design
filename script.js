// ========================================
// LUXURY FASHION WEBSITE - JAVASCRIPT
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigationScroll();
    initScrollAnimations();
    initMobileMenu();
    initFormHandling();
    initSmoothScroll();
    initParallax();
    initHoverEffects();
    updateActiveNavLink();
});

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================

function initNavigationScroll() {
    const navbar = document.querySelector('.navbar');
    let scrollTimeout;

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        if (window.scrollY > 50) {
            navbar.style.borderBottomColor = 'rgba(201, 166, 70, 0.5)';
            navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.98)';
        } else {
            navbar.style.borderBottomColor = 'rgba(201, 166, 70, 0.2)';
            navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
        }

        scrollTimeout = setTimeout(function() {
            // Animation complete
        }, 100);
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and blocks
    document.querySelectorAll('.feature-card, .service-card, .advantage-block').forEach(el => {
        observer.observe(el);
    });

    // Count up animation for stats
    const statsSection = document.querySelector('.stats');
    let statsAnimated = false;

    window.addEventListener('scroll', function() {
        if (!statsAnimated && isElementInViewport(statsSection)) {
            animateStats();
            statsAnimated = true;
        }
    });
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        const increment = finalValue / steps;
        let currentValue = 0;
        let currentStep = 0;

        const counter = setInterval(() => {
            currentStep++;
            currentValue += increment;
            
            if (currentStep >= steps) {
                stat.textContent = finalValue + '%' || finalValue + '+';
                clearInterval(counter);
            } else {
                const prefix = stat.textContent.match(/[^0-9]/g)?.[stat.textContent.match(/[^0-9]/g).length - 1] || '';
                stat.textContent = Math.ceil(currentValue) + prefix;
            }
        }, stepDuration);
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ========================================
// MOBILE MENU
// ========================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// ========================================
// FORM HANDLING
// ========================================

function initFormHandling() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;

            // Simple validation
            if (name && email && message) {
                // Show success message
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = 'rgba(201, 166, 70, 0.3)';

                // Reset form
                form.reset();

                // Restore button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            } else {
                alert('Please fill in all fields');
            }
        });
    }
}

// ========================================
// SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    // Already handled by CSS scroll-behavior, but adding for compatibility
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ========================================
// CTA BUTTONS
// ========================================

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openWhatsApp() {
    // Replace with your actual WhatsApp number
    const phoneNumber = '1234567890'; // Format: country code + number without +
    const message = encodeURIComponent('Hi, I\'m interested in booking a fitting appointment with Toxic Tailoring & Design.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ========================================
// PARALLAX EFFECT (Optional enhancement)
// ========================================

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            parallaxElements.forEach(el => {
                const scrollPosition = window.scrollY;
                const elementOffset = el.offsetTop;
                const parallaxValue = (scrollPosition - elementOffset) * 0.5;
                el.style.transform = `translateY(${parallaxValue}px)`;
            });
        });
    }
}

// ========================================
// HOVER EFFECTS
// ========================================

function initHoverEffects() {
    const cards = document.querySelectorAll('.feature-card, .service-card, .gallery-item, .advantage-block');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });

        card.addEventListener('mouseleave', function() {
            this.style.cursor = 'default';
        });
    });
}

// ========================================
// LAZY LOADING (for images when added)
// ========================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Throttle scroll events
function throttle(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
    };
}

// ========================================
// PAGE VISIBILITY
// ========================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get element position
function getElementPosition(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset,
        width: rect.width,
        height: rect.height
    };
}

// Check if element is visible
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// RESPONSIVE BEHAVIOR
// ========================================

const resizeHandler = debounce(function() {
    // Handle window resize
    if (window.innerWidth > 768) {
        document.body.classList.remove('menu-open');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', resizeHandler);

// ========================================
// ADDITIONAL FEATURES
// ========================================

// Add active state to nav links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// ========================================
// PRINT STYLES
// ========================================

// This would be in CSS, but adding a note here
// Remove animations when printing
window.addEventListener('beforeprint', function() {
    document.body.style.animation = 'none';
});

// ========================================
// INITIALIZE ALL FEATURES
// ========================================

function initializeWebsite() {
    console.log('Luxury Fashion Website Initialized');
    initParallax();
    initHoverEffects();
    initLazyLoading();
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
