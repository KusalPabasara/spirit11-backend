// main.js - Placeholder JavaScript file for Kusal Pabasara's portfolio website

// Wait for the DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Basic website initialization
    initWebsite();
    
    // Check if the page has been loaded before
    checkReturnVisitor();
    
    // Add some simple animations
    addAnimations();
});

// Initialize website functionality
function initWebsite() {
    console.log('Initializing website components...');
    
    // Set current year in the footer copyright
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Kusal Pabasara. All Rights Reserved.`;
    }
    
    // Log page visit for analytics (placeholder)
    logPageVisit();
}

// Check if this is a returning visitor
function checkReturnVisitor() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toISOString();
    
    if (lastVisit) {
        console.log('Welcome back! Your last visit was: ' + lastVisit);
    } else {
        console.log('Welcome to your first visit!');
    }
    
    localStorage.setItem('lastVisit', now);
}

// Add subtle animations to elements
function addAnimations() {
    // Add a subtle pulse animation to skill cards on hover
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Log page visit (placeholder for analytics)
function logPageVisit() {
    const visitData = {
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent
    };
    
    console.log('Page visit logged:', visitData);
    // In a real implementation, this would send data to an analytics service
}

// Placeholder function for form validation
function validateContactForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="_replyto"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    
    if (!nameInput.value.trim()) {
        alert('Please enter your name');
        return false;
    }
    
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (!messageInput.value.trim()) {
        alert('Please enter a message');
        return false;
    }
    
    return true;
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Lazy load images when they come into view (placeholder implementation)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        images.forEach(image => imageObserver.observe(image));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(image => {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
        });
    }
}

// This is just a placeholder file - add your actual JavaScript functionality here
console.log('main.js loaded - ready to implement actual functionality');
