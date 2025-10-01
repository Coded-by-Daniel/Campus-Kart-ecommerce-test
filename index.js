// CampusKart JavaScript - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    console.log('CampusKart website loaded successfully!');
    
    // Initialize all interactive features
    initializeButtons();
    initializeFilters();
    initializeScrollEffects();
    initializeWhatsAppFeatures();
});

/**
 * Initialize button click handlers
 */
function initializeButtons() {
    // Main interactive button that shows alert (as requested)
    const interactiveBtn = document.getElementById('interactive-btn');
    if (interactiveBtn) {
        interactiveBtn.addEventListener('click', function() {
            alert('🎉 Welcome to CampusKart! Your campus marketplace for all student needs. Browse our categories to find books, fashion, electronics, food, and more!');
        });
    }

    // Start Shopping button
    const startShoppingBtn = document.getElementById('start-shopping-btn');
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', function() {
            // Smooth scroll to categories section
            const categoriesSection = document.querySelector('.categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Add a small delay then show alert
            setTimeout(() => {
                alert('🛍️ Start exploring our categories! Books, Fashion, Electronics, and Food - everything a student needs!');
            }, 800);
        });
    }

// index.js
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount(); // from cart.js

  const productList = document.getElementById("product-list");

  // Generate product cards dynamically from products.js
  for (let key in products) {
    const product = products[key];

    const card = document.createElement("div");
    card.classList.add("product-card");
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-info">
        <h3>${product.title}</h3>
        <p class="product-price">
          <span class="current-price">${product.price}</span>
          ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ""}
        </p>
        <p class="product-rating">${product.rating}</p>
        <button class="btn btn-primary view-product">View Product</button>
      </div>
    `;

    // Add click event to View Product button
    card.querySelector(".view-product").addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });

    productList.appendChild(card);
  }

  // Scroll to product section when Start Shopping is clicked
  document.getElementById("start-shopping-btn").addEventListener("click", () => {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  });
});


    // Sign In button
    const signInBtn = document.querySelector('.sign-in-btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', function() {
            alert('🔐 Sign In feature coming soon! For now, you can order directly via WhatsApp by clicking the green buttons.');
        });
    }

    // Category cards - make them clickable
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const categoryName = card.querySelector('h3').textContent;
            const categoryDesc = card.querySelector('p').textContent;
            
            // Add click animation
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
            
            alert(`📚 ${categoryName} Category\n${categoryDesc}\n\nComing soon: Browse all ${categoryName.toLowerCase()} items!`);
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
}

/**
 * Initialize filter functionality
 */
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show filter feedback
            const filterType = this.textContent;
            showTemporaryMessage(`Showing ${filterType} products...`);
        });
    });
}

/**
 * Initialize scroll effects and animations
 */
function initializeScrollEffects() {
    // Smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('.footer a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-triggered animations
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
    const animatedElements = document.querySelectorAll('.category-card, .testimonial-card, .promise-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Initialize WhatsApp features
 */
function initializeWhatsAppFeatures() {
    // WhatsApp order buttons
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn, .whatsapp-btn-float');
    
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const message = "Hi! I'm interested in ordering from CampusKart. Can you help me browse your available products?";
            const phoneNumber = "2347000000000"; // Replace with actual WhatsApp number
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // For demo purposes, show alert instead of opening WhatsApp
            alert('📱 WhatsApp Order\n\nIn a real implementation, this would open WhatsApp with a pre-filled message to place your order!\n\nMessage: ' + message);
            
            // Uncomment the line below for actual WhatsApp integration:
            // window.open(whatsappUrl, '_blank');
        });
    });

    // Order on WhatsApp button (secondary button)
    const orderWhatsAppBtn = document.querySelector('.btn-secondary');
    if (orderWhatsAppBtn && orderWhatsAppBtn.textContent.includes('WhatsApp')) {
        orderWhatsAppBtn.addEventListener('click', function() {
            alert('📱 Quick WhatsApp Order\n\nThis feature allows instant ordering via WhatsApp for faster service!');
        });
    }
}

/**
 * Show temporary success/info messages
 */
function showTemporaryMessage(message) {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #22c55e;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        messageEl.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 2000);
}

/**
 * Utility function to add click animation to elements
 */
function addClickAnimation(element) {
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
}

/**
 * Initialize testimonial slider (basic version)
 */
function initializeTestimonialSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const reviewer = card.querySelector('.reviewer strong').textContent;
            const review = card.querySelector('p').textContent;
            const rating = card.querySelector('.stars').textContent;
            
            alert(`${rating}\n\n"${review}"\n\n- ${reviewer}`);
        });
    });
}

// Consolidated DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial slider
    initializeTestimonialSlider();
    
    // Add loading animation class removal
    document.body.classList.add('loaded');
    
    // Add click effects to all buttons
    const buttons = document.querySelectorAll('.btn, button');
    buttons.forEach(addClickAnimation);
});

// Flash Sale Daily Countdown
let countdownTime = new Date().getTime() + 2 * 60 * 60 * 1000;

let timer = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownTime - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("flash-timer").innerHTML = "Expired!";
    return;
  }

  let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  let seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  document.getElementById("flash-timer").innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
