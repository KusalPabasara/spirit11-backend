// portfolio-effects.js - Interactive effects for Kusal Pabasara's portfolio

// Configuration options
const config = {
  typingSpeed: 100,            // Speed of typing animation in milliseconds
  particleCount: 50,           // Number of background particles
  enableParticles: false,      // Whether to show background particles
  darkModeEnabled: false,      // Track dark mode state
  scrollAnimationThreshold: 0.2 // How far into viewport before animation triggers
};

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio effects initialized');
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize project filtering
  initProjectFilter();
  
  // Initialize skill progress bars
  initSkillBars();
  
  // Setup typing effect on hero section
  typeWriterEffect();
  
  // Check if user prefers dark mode
  checkUserPreference();
});

// Setup various event listeners
function setupEventListeners() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.burger');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // Portfolio hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', zoomProjectImage);
    card.addEventListener('mouseleave', resetProjectImage);
  });
  
  // Setup scroll animations
  window.addEventListener('scroll', handleScrollAnimations);
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navMenu = document.querySelector('.nav-links');
  if (navMenu) {
    navMenu.classList.toggle('active');
    this.classList.toggle('active');
  }
}

// Toggle dark/light mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  config.darkModeEnabled = !config.darkModeEnabled;
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', config.darkModeEnabled);
  
  // Update toggle icon
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.innerHTML = config.darkModeEnabled ? 
      '<i class="fas fa-sun"></i>' : 
      '<i class="fas fa-moon"></i>';
  }
}

// Check user preference for dark/light mode
function checkUserPreference() {
  const savedPreference = localStorage.getItem('darkMode');
  
  if (savedPreference === 'true') {
    document.body.classList.add('dark-mode');
    config.darkModeEnabled = true;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Check system preference if no saved preference
    document.body.classList.add('dark-mode');
    config.darkModeEnabled = true;
  }
  
  // Update toggle icon if it exists
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.innerHTML = config.darkModeEnabled ? 
      '<i class="fas fa-sun"></i>' : 
      '<i class="fas fa-moon"></i>';
  }
}

// Project image zoom effect
function zoomProjectImage() {
  const image = this.querySelector('img');
  if (image) {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.5s ease';
  }
}

// Reset project image zoom
function resetProjectImage() {
  const image = this.querySelector('img');
  if (image) {
    image.style.transform = 'scale(1.0)';
  }
}

// Initialize project category filtering
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-filter');
      filterProjects(category);
    });
  });
}

// Filter projects by category
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    if (category === 'all') {
      project.style.display = 'block';
    } else {
      const projectCategory = project.getAttribute('data-category');
      if (projectCategory === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    }
  });
}

// Initialize skill progress bars
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    
    // Start at 0 and animate to the target percentage
    setTimeout(() => {
      bar.style.width = percentage + '%';
    }, 500);
  });
}

// Typewriter effect for hero text
function typeWriterEffect() {
  const heroText = document.querySelector('.hero h2');
  if (!heroText) return;
  
  const text = heroText.textContent;
  heroText.textContent = '';
  
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, config.typingSpeed);
}

// Handle scroll animations
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * config.scrollAnimationThreshold;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animated');
    }
  });
}

// Calculate reading time for blog posts
function calculateReadingTime() {
  const blogContent = document.querySelector('.blog-content');
  if (!blogContent) return;
  
  const text = blogContent.textContent;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
  
  const timeElement = document.querySelector('.reading-time');
  if (timeElement) {
    timeElement.textContent = `${readingTime} min read`;
  }
}

// Add parallax effect to hero section
function parallaxEffect() {
  window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
}

// Generate random quote for the day
function generateRandomQuote() {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Design is not just what it looks like and feels like. Design is how it works.",
    "The computer is the most remarkable tool that we've ever built.",
    "Technology is best when it brings people together.",
    "The advance of technology is based on making it fit in so that you don't really even notice it."
  ];
  
  const quoteElement = document.querySelector('.random-quote');
  if (!quoteElement) return;
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Export functions for potential use in other scripts
window.portfolioEffects = {
  toggleDarkMode,
  filterProjects,
  calculateReadingTime,
  generateRandomQuote
};
