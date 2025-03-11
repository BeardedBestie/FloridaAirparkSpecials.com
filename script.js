// [SECTION: document_ready]
/**
 * Execute when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    loadProperties();
    loadAirparks();
    loadTestimonials();
    initializeContactForm();
    initializeSearchForm();
});
// [END SECTION: document_ready]

// [SECTION: mobile_menu]
/**
 * Initialize mobile menu functionality
 */
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (!mobileMenuToggle || !mainNavigation) return;
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNavigation.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    const navLinks = mainNavigation.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mainNavigation.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}
// [END SECTION: mobile_menu]

// [SECTION: property_data]
/**
 * Sample property data
 */
const propertyData = [
    {
        id: 1,
        title: "Luxury Hangar Home",
        price: 795000,
        image: "https://via.placeholder.com/600x400",
        location: "Spruce Creek Fly-In",
        city: "Port Orange",
        region: "central",
        bedrooms: 3,
        bathrooms: 2.5,
        hangarSize: "2,400 sq ft",
        description: "Stunning aviation property with attached hangar and direct runway access.",
        airparkName: "Spruce Creek Fly-In",
        runwayLength: "4,000 ft",
        featured: true
    },
    {
        id: 2,
        title: "Pilot's Dream Estate",
        price: 1250000,
        image: "https://via.placeholder.com/600x400",
        location: "Leeward Air Ranch",
        city: "Ocala",
        region: "central",
        bedrooms: 4,
        bathrooms: 3,
        hangarSize: "3,200 sq ft",
        description: "Executive home with panoramic runway views and oversized hangar.",
        airparkName: "Leeward Air Ranch",
        runwayLength: "6,000 ft",
        featured: true
    },
    {
        id: 3,
        title: "Modern Aviation Residence",
        price: 625000,
        image: "https://via.placeholder.com/600x400",
        location: "Tailwinds Airpark",
        city: "Jupiter",
        region: "south",
        bedrooms: 3,
        bathrooms: 2,
        hangarSize: "1,800 sq ft",
        description: "Contemporary design meets aviation convenience in this stunning property.",
        airparkName: "Tailwinds Airpark",
        runwayLength: "3,200 ft",
        featured: true
    },
    {
        id: 4,
        title: "Scenic Runway Retreat",
        price: 875000,
        image: "https://via.placeholder.com/600x400",
        location: "Ridge Landing Airpark",
        city: "Lake Wales",
        region: "central",
        bedrooms: 3,
        bathrooms: 2.5,
        hangarSize: "2,600 sq ft",
        description: "Serene setting with direct taxiway access and stunning sunset views.",
        airparkName: "Ridge Landing Airpark",
        runwayLength: "3,500 ft",
        featured: true
    },
    {
        id: 5,
        title: "Pilot's Paradise",
        price: 549000,
        image: "https://via.placeholder.com/600x400",
        location: "Buckingham Airpark",
        city: "Fort Myers",
        region: "south",
        bedrooms: 2,
        bathrooms: 2,
        hangarSize: "1,500 sq ft",
        description: "Affordable fly-in property with all the essentials for the aviation enthusiast.",
        airparkName: "Buckingham Airpark",
        runwayLength: "2,500 ft",
        featured: true
    },
    {
        id: 6,
        title: "Executive Hangar Estate",
        price: 1450000,
        image: "https://via.placeholder.com/600x400",
        location: "Jumbolair Aviation Estates",
        city: "Ocala",
        region: "central",
        bedrooms: 5,
        bathrooms: 4.5,
        hangarSize: "5,000 sq ft",
        description: "Luxurious estate with capacity for multiple aircraft and resort-style amenities.",
        airparkName: "Jumbolair Aviation Estates",
        runwayLength: "7,550 ft",
        featured: true
    }
];
// [END SECTION: property_data]

// [SECTION: airpark_data]
/**
 * Sample airpark data
 */
const airparkData = [
    {
        id: 1,
        name: "Spruce Creek Fly-In",
        image: "https://via.placeholder.com/600x400",
        location: "Port Orange, FL",
        region: "central",
        runwayLength: "4,000 ft",
        runwaySurface: "Asphalt",
        lighting: "MIRL",
        totalProperties: 1,200,
        description: "America's premier residential airpark with country club amenities."
    },
    {
        id: 2,
        name: "Leeward Air Ranch",
        image: "https://via.placeholder.com/600x400",
        location: "Ocala, FL",
        region: "central",
        runwayLength: "6,000 ft",
        runwaySurface: "Asphalt",
        lighting: "MIRL",
        totalProperties: 180,
        description: "Upscale airpark community in Central Florida's horse country."
    },
    {
        id: 3,
        name: "Tailwinds Airpark",
        image: "https://via.placeholder.com/600x400",
        location: "Jupiter, FL",
        region: "south",
        runwayLength: "3,200 ft",
        runwaySurface: "Asphalt",
        lighting: "LIRL",
        totalProperties: 35,
        description: "Exclusive South Florida airpark with easy access to beaches."
    },
    {
        id: 4,
        name: "Ridge Landing Airpark",
        image: "https://via.placeholder.com/600x400",
        location: "Lake Wales, FL",
        region: "central",
        runwayLength: "3,500 ft",
        runwaySurface: "Asphalt",
        lighting: "LIRL",
        totalProperties: 64,
        description: "Scenic airpark community with beautiful lake views."
    },
    {
        id: 5,
        name: "Buckingham Airpark",
        image: "https://via.placeholder.com/600x400",
        location: "Fort Myers, FL",
        region: "south",
        runwayLength: "2,500 ft",
        runwaySurface: "Asphalt",
        lighting: "None",
        totalProperties: 45,
        description: "Friendly community perfect for light aircraft enthusiasts."
    },
    {
        id: 6,
        name: "Jumbolair Aviation Estates",
        image: "https://via.placeholder.com/600x400",
        location: "Ocala, FL",
        region: "central",
        runwayLength: "7,550 ft",
        runwaySurface: "Asphalt",
        lighting: "HIRL",
        totalProperties: 35,
        description: "Ultra-luxury airpark that can accommodate any size aircraft."
    }
];
// [END SECTION: airpark_data]

// [SECTION: testimonial_data]
/**
 * Sample testimonial data
 */
const testimonialData = [
    {
        id: 1,
        content: "Florida Airpark Specials made our dream of aviation living a reality. Their knowledge of airpark communities is unmatched, and they guided us through every step of the process.",
        author: "Michael Johnson",
        title: "Cessna 182 Owner",
        image: "https://via.placeholder.com/100x100"
    },
    {
        id: 2,
        content: "After searching for years to find the perfect airpark property, we connected with Florida Airpark Specials and found our ideal home within weeks. Their expertise in this niche market is invaluable.",
        author: "Jennifer Williams",
        title: "Cirrus SR22 Owner",
        image: "https://via.placeholder.com/100x100"
    },
    {
        id: 3,
        content: "As a commercial pilot, I needed a property that could accommodate my schedule and aircraft. The team at Florida Airpark Specials understood my unique requirements and found me the perfect hangar home.",
        author: "Robert Thompson",
        title: "Commercial Pilot",
        image: "https://via.placeholder.com/100x100"
    }
];
// [END SECTION: testimonial_data]

// [SECTION: property_listing]
/**
 * Load and display featured properties
 */
function loadProperties() {
    const propertyListings = document.getElementById('property-listings');
    
    if (!propertyListings) return;
    
    // Filter for featured properties
    const featuredProperties = propertyData.filter(property => property.featured);
    
    // Create and append property cards
    featuredProperties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertyListings.appendChild(propertyCard);
    });
}

/**
 * Create a property card element
 */
function createPropertyCard(property) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="property-card__image">
        <div class="property-card__content">
            <div class="property-card__location">${property.location}, ${property.city}</div>
            <h3 class="property-card__title">${property.title}</h3>
            <div class="property-card__price">${formatter.format(property.price)}</div>
            <div class="property-card__features">
                <div class="property-card__feature">
                    <span>🛏️ ${property.bedrooms}</span>
                </div>
                <div class="property-card__feature">
                    <span>🚿 ${property.bathrooms}</span>
                </div>
                <div class="property-card__feature">
                    <span>✈️ ${property.hangarSize}</span>
                </div>
            </div>
            <div class="property-card__footer">
                <div class="property-card__airpark">${property.airparkName}</div>
                <a href="#" class="property-card__link">View Details</a>
            </div>
        </div>
    `;
    
    return card;
}
// [END SECTION: property_listing]

// [SECTION: airpark_listing]
/**
 * Load and display airparks
 */
function loadAirparks() {
    const airparksList = document.getElementById('airparks-list');
    
    if (!airparksList) return;
    
    // Create and append airpark cards
    airparkData.forEach(airpark => {
        const airparkCard = createAirparkCard(airpark);
        airparksList.appendChild(airparkCard);
    });
    
    // Set up view list button
    const viewListButton = document.getElementById('view-airparks-list');
    if (viewListButton) {
        viewListButton.addEventListener('click', () => {
            airparksList.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

/**
 * Create an airpark card element
 */
function createAirparkCard(airpark) {
    const card = document.createElement('div');
    card.className = 'airpark-card';
    card.innerHTML = `
        <img src="${airpark.image}" alt="${airpark.name}" class="airpark-card__image">
        <div class="airpark-card__content">
            <h3 class="airpark-card__title">${airpark.name}</h3>
            <div class="airpark-card__location">${airpark.location}</div>
            <div class="airpark-card__features">
                <div class="airpark-card__feature">
                    <span>Runway:</span>
                    <span>${airpark.runwayLength}</span>
                </div>
                <div class="airpark-card__feature">
                    <span>Surface:</span>
                    <span>${airpark.runwaySurface}</span>
                </div>
                <div class="airpark-card__feature">
                    <span>Lighting:</span>
                    <span>${airpark.lighting}</span>
                </div>
                <div class="airpark-card__feature">
                    <span>Properties:</span>
                    <span>${airpark.totalProperties}</span>
                </div>
            </div>
            <a href="#" class="airpark-card__link">View Properties</a>
        </div>
    `;
    
    return card;
}
// [END SECTION: airpark_listing]

// [SECTION: testimonials]
/**
 * Load and display testimonials
 */
function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    if (!testimonialsContainer) return;
    
    // Create slider elements
    let currentIndex = 0;
    
    // Create testimonial elements
    testimonialData.forEach((testimonial, index) => {
        const testimonialElement = createTestimonialElement(testimonial);
        testimonialElement.style.display = index === 0 ? 'block' : 'none';
        testimonialsContainer.appendChild(testimonialElement);
    });
    
    // Create slider controls
    const sliderControls = document.createElement('div');
    sliderControls.className = 'slider-controls';
    sliderControls.innerHTML = `
        <button id="prev-testimonial" aria-label="Previous testimonial">←</button>
        <button id="next-testimonial" aria-label="Next testimonial">→</button>
    `;
    testimonialsContainer.appendChild(sliderControls);
    
    // Set up event listeners for controls
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    prevButton.addEventListener('click', () => {
        const testimonials = testimonialsContainer.querySelectorAll('.testimonial');
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    });
    
    nextButton.addEventListener('click', () => {
        const testimonials = testimonialsContainer.querySelectorAll('.testimonial');
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    });
}

/**
 * Create a testimonial element
 */
function createTestimonialElement(testimonial) {
    const element = document.createElement('div');
    element.className = 'testimonial';
    element.innerHTML = `
        <div class="testimonial__content">${testimonial.content}</div>
        <div class="testimonial__author">
            <img src="${testimonial.image}" alt="${testimonial.author}" class="testimonial__author-image">
            <div>
                <div class="testimonial__author-name">${testimonial.author}</div>
                <div class="testimonial__author-title">${testimonial.title}</div>
            </div>
        </div>
    `;
    
    return element;
}
// [END SECTION: testimonials]

// [SECTION: contact_form]
/**
 * Initialize the contact form
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // In a real application, you would send the form data to a server
        // For demo purposes, we'll just show a success message
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Basic validation
        if (!formValues.name || !formValues.email) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! We will contact you shortly.');
        contactForm.reset();
    });
}
// [END SECTION: contact_form]

// [SECTION: search_form]
/**
 * Initialize the property search form
 */
function initializeSearchForm() {
    const searchForm = document.getElementById('property-search');
    
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // In a real application, you would process the search criteria
        // and display filtered results
        
        // Get form data
        const formData = new FormData(searchForm);
        const searchCriteria = Object.fromEntries(formData.entries());
        
        // Log search criteria for demonstration
        console.log('Search criteria:', searchCriteria);
        
        // Scroll to featured properties
        const featuredProperties = document.getElementById('featured-properties');
        if (featuredProperties) {
            featuredProperties.scrollIntoView({ behavior: 'smooth' });
        }
        
        // For demo purposes, show a message
        alert('Search feature will be implemented in the full version.');
    });
}
// [END SECTION: search_form]

// [SECTION: utility_functions]
/**
 * Format currency
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(value);
}

/**
 * Smooth scroll to element
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
// [END SECTION: utility_functions]
