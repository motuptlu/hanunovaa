// ============================================
// PREMIUM HANU NOVA - JAVASCRIPT
// ============================================

// ===========================
// Preloader
// ===========================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Initialize AOS
        AOS.init({
            duration: 1000,
            offset: 100,
            once: true,
            easing: 'ease-out-cubic'
        });
        
        // Initialize Particles
        initParticles();
        
    }, 2500);
});

// ===========================
// Custom Cursor
// ===========================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor hover effects
document.querySelectorAll('a, button, .service-card-premium, .portfolio-item-premium').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'scale(2)';
        cursorOutline.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.transform = 'scale(1)';
    });
});

// ===========================
// Particles.js Background
// ===========================
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#6366f1', '#a855f7', '#ec4899']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ===========================
// Scroll Progress Bar
// ===========================
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// ===========================
// Navigation
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navbar with Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Active Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Close menu when clicking link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===========================
// Dark Mode Toggle
// ===========================
const darkModeToggle = document.querySelector('.dark-mode-toggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    
    const icon = darkModeToggle.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ===========================
// Counter Animation
// ===========================
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Intersection Observer for Counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (!counter.classList.contains('counted')) {
                    animateCounter(counter);
                    counter.classList.add('counted');
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    counterObserver.observe(heroSection);
}

// ===========================
// Parallax Effect
// ===========================
const parallaxBgs = document.querySelectorAll('.parallax-bg');
const parallaxShapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Background parallax
    parallaxBgs.forEach(bg => {
        const speed = bg.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        bg.style.transform = `translateY(${yPos}px)`;
    });
    
    // Shape parallax
    parallaxShapes.forEach(shape => {
        const speed = shape.getAttribute('data-speed') || 1;
        const yPos = scrolled * speed * 0.5;
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// ===========================
// Portfolio Filter
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn-premium');
const portfolioItems = document.querySelectorAll('.portfolio-item-premium');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeInScale 0.6s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Add animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// FAQ Accordion
// ===========================
const faqItems = document.querySelectorAll('.faq-item-premium');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question-premium');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===========================
// Contact Form
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `
🌟 *New Inquiry from Hanu Nova Website* 🌟

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🎯 *Service:* ${service}

💬 *Message:*
${message}

---
Sent via Hanu Nova Contact Form
    `.trim();
    
    const whatsappURL = `https://wa.me/918209893933?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    // Show success message
    showNotification('Thank you! Your message has been sent. We will contact you soon!', 'success');
    
    // Reset form
    contactForm.reset();
});

// ===========================
// Newsletter Form
// ===========================
const newsletterForm = document.querySelector('.newsletter-form-premium');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        showNotification(`Successfully subscribed with: ${email}`, 'success');
        newsletterForm.reset();
    });
}

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #6366f1, #a855f7)'};
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
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
`;
document.head.appendChild(notificationStyle);

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Smooth Scroll for All Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Reveal on Scroll Animation
// ===========================
const revealElements = document.querySelectorAll('[data-aos]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

// ===========================
// Image Lazy Loading
// ===========================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===========================
// Prevent Right Click (Optional)
// ===========================
// Uncomment if you want to protect images
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// ===========================
// Console Welcome Message
// ===========================
console.log('%c👋 Welcome to Hanu Nova! ', 'background: linear-gradient(135deg, #6366f1, #a855f7); color: white; font-size: 20px; padding: 10px 20px; border-radius: 10px;');
console.log('%cInterested in working with us? Contact: +91 8209893933', 'color: #6366f1; font-size: 14px; font-weight: bold;');

// ===========================
// Page Load Performance
// ===========================
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});
