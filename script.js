// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveNav() {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.borderBottomColor = 'transparent';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.borderBottomColor = 'var(--gold)';
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Add fade-in effect to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.research-project, .publication, .course, .cv-section, .contact-card, .info-card'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add fade-in class styles
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Parallax effect for profile photo frame
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const profileFrame = document.querySelector('.profile-frame');
    
    if (profileFrame && window.innerWidth > 900) {
        const speed = 0.3;
        profileFrame.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Add subtle hover effect to section ornaments
document.querySelectorAll('.section-ornament').forEach(ornament => {
    const parent = ornament.closest('.section-header');
    
    parent.addEventListener('mouseenter', () => {
        ornament.style.width = '150px';
        ornament.style.transition = 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    parent.addEventListener('mouseleave', () => {
        ornament.style.width = '120px';
    });
});

// Smooth reveal for hero elements
window.addEventListener('load', () => {
    const heroElements = [
        '.profile-frame',
        '.decorative-line',
        '.hero-title',
        '.hero-position',
        '.hero-affiliation',
        '.hero-divider',
        '.hero-description',
        '.hero-links'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        }
    });
});

// Add golden ratio based spacing helper (for development)
// Uncomment to see spacing guides
/*
window.addEventListener('load', () => {
    const phi = 1.618;
    console.log('Golden Ratio Spacing Reference:');
    console.log(`Base: 1rem = 16px`);
    console.log(`φ: ${phi}rem = ${phi * 16}px`);
    console.log(`φ²: ${phi * phi}rem = ${phi * phi * 16}px`);
    console.log(`φ³: ${Math.pow(phi, 3)}rem = ${Math.pow(phi, 3) * 16}px`);
});
*/

// Enhance corner decorations with subtle animation
const corners = document.querySelectorAll('.corner-decoration');
let ticking = false;

function animateCorners() {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const maxExpand = 40;
    const expansion = scrollPercent * maxExpand;
    
    corners.forEach((corner, index) => {
        if (window.innerWidth > 900) {
            const delay = index * 0.05;
            corner.style.width = `${120 + expansion}px`;
            corner.style.height = `${120 + expansion}px`;
            corner.style.transition = `all 0.3s ease ${delay}s`;
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            animateCorners();
            ticking = false;
        });
        ticking = true;
    }
});