// Mobile Navigation
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

// Open mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
    mobileNavBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close mobile menu with close button
closeMenuBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    mobileNavBackdrop.classList.remove('active');
    document.body.style.overflow = '';
});

// Close mobile menu with backdrop click
mobileNavBackdrop.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    mobileNavBackdrop.classList.remove('active');
    document.body.style.overflow = '';
});

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileNavBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Menu Category Filtering
const menuCategories = document.querySelectorAll('.menu-category');
const menuItems = document.querySelectorAll('.menu-item');

menuCategories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove active class from all categories
        menuCategories.forEach(c => c.classList.remove('active'));
        // Add active class to clicked category
        category.classList.add('active');
        
        const selectedCategory = category.getAttribute('data-category');
        
        // Show/hide menu items
        menuItems.forEach(item => {
            if (selectedCategory === item.getAttribute('data-category')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We'll respond to ${email} as soon as possible.`);
    
    // Reset form
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Update active nav link
            document.querySelectorAll('.site-nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Calculate header height for offset
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.site-nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Fix for iOS viewport height issue
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set viewport height on load and resize
setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);

// Initialize with first section active
window.dispatchEvent(new Event('scroll'));

// Add active class to current section on page load
window.addEventListener('DOMContentLoaded', () => {
    // Set the home link as active by default
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        document.querySelectorAll('.site-nav-link').forEach(link => {
            link.classList.remove('active');
        });
        homeLink.classList.add('active');
    }
});