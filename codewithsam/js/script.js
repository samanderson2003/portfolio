// Enhanced Portfolio JavaScript
class PortfolioEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupCursor();
        this.setupParticles();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupMagneticButtons();
        this.setupCounterAnimation();
        this.setupNavigation();
        this.setupParallax();
        this.setupThreeJSBackground();
    }

    // Custom Cursor with Trail Effect
    setupCursor() {
        const cursor = document.querySelector('.cursor');
        const cursorTrail = document.querySelector('.cursor-trail');
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        if (!cursor || !cursorTrail) return;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Smooth trail animation
        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            
            cursorTrail.style.left = trailX + 'px';
            cursorTrail.style.top = trailY + 'px';
            
            requestAnimationFrame(animateTrail);
        };
        animateTrail();

        // Hover effects
        document.querySelectorAll('a, button, .project-card, .contact-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.borderColor = '#ff0099';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#00d4ff';
            });
        });
    }

    // Enhanced Particle System
    setupParticles() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach((particle, index) => {
            // Random positions and delays
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (6 + Math.random() * 4) + 's';
            
            // Random sizes
            const size = 1 + Math.random() * 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
        });

        // Add mouse interaction
        document.addEventListener('mousemove', (e) => {
            particles.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(
                    Math.pow(e.clientX - centerX, 2) + 
                    Math.pow(e.clientY - centerY, 2)
                );
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const angle = Math.atan2(centerY - e.clientY, centerX - e.clientX);
                    const moveX = Math.cos(angle) * force * 20;
                    const moveY = Math.sin(angle) * force * 20;
                    
                    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    particle.style.transform = 'translate(0, 0)';
                }
            });
        });
    }

    // Advanced Typing Animation
    setupTypingAnimation() {
        const typedTextElement = document.querySelector('.typed-text');
        if (!typedTextElement) return;

        const texts = [
            'Frontend Developer',
            'AI/ML Specialist',
            'React Native Developer',
            'Flutter Developer', 
            'Accessibility Innovator',
            'Computer Vision Expert',
            'Mobile App Developer',
            'Freelancer'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;

        const typeText = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 50;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typingDelay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingDelay = 500;
            }

            setTimeout(typeText, typingDelay);
        };

        // Start typing animation after a delay
        setTimeout(typeText, 1000);
    }

    // Scroll-triggered Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counter animation when stats come into view
                    if (entry.target.classList.contains('experience-stats')) {
                        this.animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe elements for reveal animations
        document.querySelectorAll('.about-content, .project-card, .contact-card, .experience-stats').forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });

        // Parallax scroll effect for floating icons
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-icon');
            
            parallaxElements.forEach((el, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }

    // Magnetic Button Effects
    setupMagneticButtons() {
        document.querySelectorAll('.magnetic').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }

    // Counter Animation
    animateCounters() {
        document.querySelectorAll('[data-count]').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const increment = target / 50;
            let current = 0;
            const isHappyClients = counter.parentElement.querySelector('.stat-label').textContent === 'Happy Clients';
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    const displayValue = Math.ceil(current);
                    counter.textContent = isHappyClients ? displayValue + '+' : displayValue;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = isHappyClients ? target + '+' : target;
                }
            };
            
            updateCounter();
        });
    }

    // Smooth Navigation
    setupNavigation() {
        // Smooth scroll for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Update active nav on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Parallax Effects
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Hero parallax
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            
            // Background elements parallax
            document.querySelectorAll('.profile-glow').forEach((el, index) => {
                const speed = 0.3 + (index * 0.1);
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Advanced Background with Three.js-like effects (CSS only)
    setupThreeJSBackground() {
        // Create floating geometric shapes
        const createFloatingShape = () => {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';
            shape.style.cssText = `
                position: fixed;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: linear-gradient(45deg, 
                    rgba(0, 212, 255, 0.1), 
                    rgba(255, 0, 153, 0.1), 
                    rgba(255, 215, 0, 0.1));
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                pointer-events: none;
                z-index: 1;
                animation: floatShape ${10 + Math.random() * 20}s infinite linear;
                opacity: 0.3;
            `;
            
            document.body.appendChild(shape);
            
            // Remove after animation
            setTimeout(() => {
                if (shape.parentNode) {
                    shape.parentNode.removeChild(shape);
                }
            }, 30000);
        };

        // Create shapes periodically
        setInterval(createFloatingShape, 5000);
        
        // Create initial shapes
        for (let i = 0; i < 5; i++) {
            setTimeout(createFloatingShape, i * 1000);
        }

        // Add CSS animation for floating shapes
        if (!document.querySelector('#floating-shapes-style')) {
            const style = document.createElement('style');
            style.id = 'floating-shapes-style';
            style.textContent = `
                @keyframes floatShape {
                    0% {
                        transform: translateY(100vh) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Email Copy Functionality
function copyEmail(event) {
    event.preventDefault();
    
    const email = 'sam.youngren2003@gmail.com';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        showEmailToast();
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showEmailToast();
    });
}

function showEmailToast() {
    const toast = document.getElementById('emailToast');
    const message = 'Email copied successfully! Can\'t wait to hear from you!';
    
    toast.querySelector('.toast-message').textContent = message;
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Advanced Performance Optimizations
class PerformanceOptimizer {
    constructor() {
        this.setupLazyLoading();
        this.setupPreloading();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        // Lazy load images when they come into view
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    setupPreloading() {
        // Preload critical resources
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    optimizeAnimations() {
        // Pause animations when tab is not visible
        document.addEventListener('visibilitychange', () => {
            const animations = document.querySelectorAll('*');
            if (document.hidden) {
                animations.forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
            } else {
                animations.forEach(el => {
                    el.style.animationPlayState = 'running';
                });
            }
        });

        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.documentElement.style.setProperty('--animation-duration', '0.1s');
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioEffects();
    new PerformanceOptimizer();

    // Add loading animation
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loading);

    // Remove loading screen after everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                if (loading.parentNode) {
                    loading.parentNode.removeChild(loading);
                }
            }, 500);
        }, 1000);
    });
});

// Add spinner styles
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
    .loading-spinner {
        text-align: center;
        color: var(--text-color);
    }
    
    .spinner {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(0, 212, 255, 0.3);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);

// Add email toast styles
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        z-index: 10000;
        max-width: 350px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .toast-notification.show {
        transform: translateX(0);
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .toast-content i {
        font-size: 20px;
        color: #4ade80;
        animation: checkBounce 0.6s ease-out;
    }
    
    .toast-message {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.4;
    }
    
    @keyframes checkBounce {
        0% { transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    @media (max-width: 768px) {
        .toast-notification {
            right: 10px;
            left: 10px;
            max-width: none;
            transform: translateY(-100px);
        }
        
        .toast-notification.show {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(toastStyle);

// Email copy button event listener
document.getElementById('emailCopyButton').addEventListener('click', copyEmail);
