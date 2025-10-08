// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a dropdown link
        document.querySelectorAll('.dropdown-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Handle mobile dropdown toggle
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Only prevent default and toggle on mobile
                if (window.innerWidth <= 768) {
                    // If it's a main nav link with dropdown, toggle dropdown
                    const navItem = link.closest('.nav-item');
                    const dropdown = navItem.querySelector('.dropdown-menu');
                    
                    if (dropdown) {
                        e.preventDefault();
                        navItem.classList.toggle('active');
                    }
                } else {
                    // On desktop, close mobile menu if it's open
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        // Add animation
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Smooth scrolling for anchor links
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

    // Add scroll effect to navbar
    // window.addEventListener('scroll', function() {
    //     const navbar = document.querySelector('.navbar');
    //     if (window.scrollY > 50) {
    //         navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    //         navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    //     } else {
    //         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    //         navbar.style.boxShadow = 'none';
    //     }
    // });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    // const animateElements = document.querySelectorAll('.feature-card, .hobby-card, .project-card, .timeline-item');
    // animateElements.forEach(el => {
    //     el.style.opacity = '0';
    //     el.style.transform = 'translateY(30px)';
    //     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    //     observer.observe(el);
    // });

    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.textContent.includes('Your Name')) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add hover effect to social links
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form validation (if contact form is added later)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add loading animation for images
    // document.querySelectorAll('img').forEach(img => {
    //     img.addEventListener('load', function() {
    //         this.style.opacity = '1';
    //     });
        
    //     img.style.opacity = '0';
    //     img.style.transition = 'opacity 0.3s ease';
    // });

    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Utility function to debounce scroll events
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

// Add theme toggle functionality (for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Media toggle functionality for hobbies (images)
function toggleMedia(mediaId) {
    const mediaContent = document.getElementById(mediaId);
    const toggleBtn = document.querySelector(`button[onclick="toggleMedia('${mediaId}')"]`);
    const arrow = toggleBtn.querySelector('.toggle-arrow');
    const span = toggleBtn.querySelector('span');
    
    if (mediaContent.style.display === 'none' || mediaContent.style.display === '') {
        mediaContent.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
        span.textContent = 'Hide Images';
        
        // Add smooth reveal animation
        mediaContent.style.opacity = '0';
        mediaContent.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            mediaContent.style.opacity = '1';
            mediaContent.style.transform = 'translateY(0)';
        }, 10);
    } else {
        mediaContent.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        span.textContent = 'View Gaming Images';
    }
}

// Video toggle functionality for hobbies
function toggleVideos(videoId) {
    const videoContent = document.getElementById(videoId);
    const toggleBtn = document.querySelector(`button[onclick="toggleVideos('${videoId}')"]`);
    const arrow = toggleBtn.querySelector('.toggle-arrow');
    const span = toggleBtn.querySelector('span');
    
    if (videoContent.style.display === 'none' || videoContent.style.display === '') {
        videoContent.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
        span.textContent = 'Hide Videos';
        
        // Add smooth reveal animation
        videoContent.style.opacity = '0';
        videoContent.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            videoContent.style.opacity = '1';
            videoContent.style.transform = 'translateY(0)';
        }, 10);
    } else {
        videoContent.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        span.textContent = 'View Gaming Videos';
        
        // Pause all videos when hiding
        videoContent.querySelectorAll('video').forEach(video => {
            video.pause();
        });
    }
}
