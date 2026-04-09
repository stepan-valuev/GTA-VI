// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Set default ease for all animations
gsap.defaults({ ease: "power3.out" });

// Navbar animation on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Hero Section Animations
const heroTl = gsap.timeline();

heroTl.from('.logo', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power4.out"
})
.from('.nav-links li', {
    duration: 0.8,
    y: -30,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out"
}, "-=0.5")
.from('.nav-cta', {
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "power3.out"
}, "-=0.6")
.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: "power4.out"
}, "-=0.4")
.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
}, "-=0.8")
.from('.hero-buttons button', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.6");

// Parallax effect for hero section
gsap.to('.hero-section', {
    backgroundPosition: '50% 100%',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Story Section Animation
gsap.from('.story-text', {
    duration: 1.2,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.story-image', {
    duration: 1.2,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Characters Section Animation
gsap.from('.character-card', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.characters-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    }
});

// Location Stats Animation
gsap.utils.toArray('.stat-card').forEach((stat, index) => {
    gsap.from(stat, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: '.location-stats',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Location Showcase Animation
gsap.from('.showcase-item', {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.location-showcase',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Features Section Animation
gsap.from('.feature-item', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: {
        amount: 0.6,
        grid: [2, 3]
    },
    scrollTrigger: {
        trigger: '.features-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    }
});

// Vehicles Section Animation
gsap.from('.vehicle-card', {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.vehicles-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    }
});

// Gallery Section Animation
gsap.from('.gallery-item', {
    duration: 0.8,
    scale: 0.9,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Music Player Animation
gsap.from('.music-player', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: '.soundtrack-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.station', {
    duration: 0.6,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.radio-stations',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

// Pre-order Section Animation
gsap.from('.edition-card', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.editions-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    }
});

// Scale animation for featured card
gsap.to('.edition-card.featured', {
    scale: 1.05,
    duration: 0.3,
    scrollTrigger: {
        trigger: '.edition-card.featured',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Footer/Newsletter Animation
gsap.from('.newsletter', {
    duration: 1,
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: '.footer-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.footer-logo', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    scrollTrigger: {
        trigger: '.footer-content',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.social-link', {
    duration: 0.6,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    }
});

// Button hover animations with GSAP
const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .cta-btn, .btn-edition');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// Card hover enhancements
const cards = document.querySelectorAll('.character-card, .feature-item, .vehicle-card, .edition-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            rotationY: 5,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            rotationY: 0,
            ease: "power2.out"
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: "power3.inOut"
            });
        }
    });
});

// Number counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');

statNumbers.forEach(stat => {
    const text = stat.textContent;
    const hasNumber = /\d/.test(text);
    
    if (hasNumber && !text.includes('+') && !text.includes('/')) {
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                const num = parseInt(text);
                if (!isNaN(num)) {
                    gsap.fromTo(stat, 
                        { textContent: 0 },
                        { 
                            duration: 2, 
                            textContent: num,
                            snap: { textContent: 1 },
                            ease: "power2.out"
                        }
                    );
                }
            }
        });
    }
});

// Gradient text animation
const gradientTexts = document.querySelectorAll('.gradient-text, .logo, .stat-number, .price');

gradientTexts.forEach(text => {
    gsap.to(text, {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: "linear"
    });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.fromTo(section,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// Cursor trail effect (optional enhancement)
const cursorFollower = document.createElement('div');
cursorFollower.classList.add('cursor-follower');
document.body.appendChild(cursorFollower);

// Add cursor follower styles
const style = document.createElement('style');
style.textContent = `
    .cursor-follower {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 0, 110, 0.3);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
    }
`;
document.head.appendChild(style);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
    });
});

// Hide cursor follower on mobile
if (window.innerWidth < 768) {
    cursorFollower.style.display = 'none';
}

// Loading animation
window.addEventListener('load', () => {
    gsap.to('body', {
        duration: 0.5,
        opacity: 1,
        ease: "power2.out"
    });
});

// Add loading state to body
document.body.style.opacity = '0';

console.log('GTA VI Landing Page loaded successfully! 🎮');
