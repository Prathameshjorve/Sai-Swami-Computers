/* ============================================
   Sai Swami Computers - Main Application JS
   Storage, Data Management & UI Logic
   ============================================ */

// ==================== STORAGE MODULE ====================
const Storage = {
    get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Storage get error:', e);
            return null;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage set error:', e);
            return false;
        }
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

// ==================== DEFAULT DATA ====================
const defaultServices = [
    {
        id: 1,
        name: "CCTV Installation",
        description: "Professional CCTV camera installation for homes and businesses. Complete setup with remote monitoring capabilities.",
        price: "₹3,500 onwards",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
        enabled: true
    },
    {
        id: 2,
        name: "Laptop Repair",
        description: "Expert laptop repair services including screen replacement, motherboard repair, and software troubleshooting.",
        price: "₹500 onwards",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
        enabled: true
    },
    {
        id: 3,
        name: "Printer Service",
        description: "Complete printer maintenance, repair, and cartridge refilling services for all major brands.",
        price: "₹300 onwards",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop",
        enabled: true
    },
    {
        id: 4,
        name: "Networking",
        description: "LAN setup, Wi-Fi installation, network configuration, and troubleshooting for offices and homes.",
        price: "₹2,000 onwards",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        enabled: true
    },
    {
        id: 5,
        name: "Software Installation",
        description: "OS installation, software setup, antivirus installation, and system optimization services.",
        price: "₹200 onwards",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        enabled: true
    },
    {
        id: 6,
        name: "Jio AirFiber Booking",
        description: "Get high-speed Jio AirFiber internet connection. We help with booking, installation, and setup.",
        price: "Contact for pricing",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
        enabled: true
    }
];

const defaultProducts = [
    {
        id: 1,
        name: "HP EliteBook 840 G5",
        category: "Refurbished Laptops",
        brand: "HP",
        processor: "Intel Core i5 8th Gen",
        ram: "8 GB DDR4",
        storage: "256 GB SSD",
        condition: "Refurbished - Excellent",
        availability: "In Stock",
        description: "Premium business laptop with excellent build quality. Perfect for office work and daily use.",
        price: "₹22,999",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Lenovo ThinkPad T480",
        category: "Refurbished Laptops",
        brand: "Lenovo",
        processor: "Intel Core i5 8th Gen",
        ram: "8 GB DDR4",
        storage: "512 GB SSD",
        condition: "Refurbished - Good",
        availability: "In Stock",
        description: "Reliable ThinkPad with legendary keyboard. Great for professionals and students.",
        price: "₹24,999",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Dell Inspiron 15 3520",
        category: "New Laptops",
        brand: "Dell",
        processor: "Intel Core i3 12th Gen",
        ram: "8 GB DDR4",
        storage: "512 GB SSD",
        condition: "Brand New",
        availability: "In Stock",
        description: "Brand new Dell laptop with latest processor. Ideal for students and home users.",
        price: "₹35,999",
        image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Logitech M235 Wireless Mouse",
        category: "Mouse",
        brand: "Logitech",
        processor: "N/A",
        ram: "N/A",
        storage: "N/A",
        condition: "Brand New",
        availability: "In Stock",
        description: "Comfortable wireless mouse with reliable connectivity. 12 months battery life.",
        price: "₹699",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "HP LaserJet Pro M126nw",
        category: "Printer",
        brand: "HP",
        processor: "N/A",
        ram: "N/A",
        storage: "N/A",
        condition: "Brand New",
        availability: "In Stock",
        description: "Multi-function laser printer with Wi-Fi. Print, scan, and copy with ease.",
        price: "₹15,499",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Assembled Desktop PC",
        category: "CPU",
        brand: "Custom Build",
        processor: "Intel Core i3 10th Gen",
        ram: "8 GB DDR4",
        storage: "256 GB SSD + 1 TB HDD",
        condition: "Brand New",
        availability: "In Stock",
        description: "Custom assembled desktop PC perfect for office work, accounting, and daily computing needs.",
        price: "₹18,999",
        image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop"
    }
];

const defaultCompany = {
    name: "Sai Swami Computers",
    owner: "Santosh Gursal",
    phone: "7219575781",
    email: "saiswamico@gmail.com",
    address: "Kopargaon, Maharashtra – 423601",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 2:00 PM"
};

const defaultSettings = {
    primaryColor: "#2563EB",
    secondaryColor: "#0F172A",
    accentColor: "#14B8A6",
    socialFacebook: "#",
    socialInstagram: "#",
    socialWhatsapp: "https://wa.me/917219575781"
};

// ==================== INITIALIZE DATA ====================
function initializeData() {
    if (!Storage.get('services')) Storage.set('services', defaultServices);
    if (!Storage.get('products')) Storage.set('products', defaultProducts);
    if (!Storage.get('company')) Storage.set('company', defaultCompany);
    if (!Storage.get('settings')) Storage.set('settings', defaultSettings);
}

// ==================== DATA ACCESS ====================
function getServices() {
    return Storage.get('services') || defaultServices;
}

function getProducts() {
    return Storage.get('products') || defaultProducts;
}

function getCompany() {
    return Storage.get('company') || defaultCompany;
}

function getSettings() {
    return Storage.get('settings') || defaultSettings;
}

// ==================== UI HELPERS ====================
function createServiceCard(service) {
    return `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="h-48 overflow-hidden">
                <img src="${service.image}" alt="${service.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-secondary mb-2">${service.name}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${service.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-primary font-bold text-lg">${service.price}</span>
                    <a href="https://wa.me/917219575781?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}" target="_blank" class="inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    `;
}

function createProductCard(product) {
    return `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
            <div class="h-48 overflow-hidden relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
                <span class="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">${product.category}</span>
                <span class="absolute top-3 right-3 px-3 py-1 ${product.availability === 'In Stock' ? 'bg-green-500' : 'bg-red-500'} text-white text-xs font-semibold rounded-full">${product.availability}</span>
            </div>
            <div class="p-6">
                <h3 class="text-lg font-bold text-secondary mb-1">${product.name}</h3>
                <p class="text-sm text-gray-500 mb-3">${product.brand}</p>
                <div class="space-y-1 mb-4 text-sm text-gray-600">
                    ${product.processor !== 'N/A' ? `<p><span class="font-medium">Processor:</span> ${product.processor}</p>` : ''}
                    ${product.ram !== 'N/A' ? `<p><span class="font-medium">RAM:</span> ${product.ram}</p>` : ''}
                    ${product.storage !== 'N/A' ? `<p><span class="font-medium">Storage:</span> ${product.storage}</p>` : ''}
                    <p><span class="font-medium">Condition:</span> ${product.condition}</p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t">
                    <span class="text-primary font-bold text-xl">${product.price}</span>
                    <a href="tel:7219575781" class="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ==================== PAGE INITIALIZERS ====================
function initHomePage() {
    const servicesGrid = document.getElementById('home-services-grid');
    const productsGrid = document.getElementById('home-products-grid');

    if (servicesGrid) {
        const services = getServices().filter(s => s.enabled !== false).slice(0, 3);
        servicesGrid.innerHTML = services.map(createServiceCard).join('');
    }

    if (productsGrid) {
        const products = getProducts().slice(0, 3);
        productsGrid.innerHTML = products.map(createProductCard).join('');
    }
}

function initServicesPage() {
    const grid = document.getElementById('services-grid');
    if (grid) {
        const services = getServices().filter(s => s.enabled !== false);
        grid.innerHTML = services.map(createServiceCard).join('');
    }
}

function initProductsPage() {
    const grid = document.getElementById('products-grid');
    const searchInput = document.getElementById('product-search');
    const categoryFilter = document.getElementById('category-filter');

    if (!grid) return;

    function renderProducts() {
        let products = getProducts();
        const search = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : '';

        if (search) {
            products = products.filter(p =>
                p.name.toLowerCase().includes(search) ||
                p.brand.toLowerCase().includes(search) ||
                p.category.toLowerCase().includes(search)
            );
        }

        if (category) {
            products = products.filter(p => p.category === category);
        }

        if (products.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-gray-500 text-lg">No products found matching your criteria.</p></div>';
        } else {
            grid.innerHTML = products.map(createProductCard).join('');
        }
    }

    if (searchInput) searchInput.addEventListener('input', renderProducts);
    if (categoryFilter) categoryFilter.addEventListener('change', renderProducts);

    renderProducts();
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'bg-white');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white');
            navbar.classList.add('bg-white/80');
        }
    });
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl shadow-lg text-white font-medium z-[9999] transition-all duration-300 transform translate-y-4 opacity-0 ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-primary'}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const phone = form.querySelector('[name="phone"]').value;
        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;

        if (!name || !phone || !message) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }

        // Open WhatsApp with the message
        const whatsappMsg = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
        window.open(`https://wa.me/917219575781?text=${whatsappMsg}`, '_blank');
        showToast('Redirecting to WhatsApp...', 'success');
        form.reset();
    });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
    initScrollAnimations();

    // Page-specific initialization
    if (document.getElementById('home-services-grid')) initHomePage();
    if (document.getElementById('services-grid')) initServicesPage();
    if (document.getElementById('products-grid')) initProductsPage();
    if (document.getElementById('contact-form')) initContactForm();
});

// Export for use in other pages
window.SaiSwami = {
    Storage, getServices, getProducts, getCompany, getSettings,
    showToast, createServiceCard, createProductCard,
    defaultServices, defaultProducts, defaultCompany, defaultSettings
};