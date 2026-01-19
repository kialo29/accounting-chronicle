// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Check for saved preference or system preference
if (localStorage.getItem('darkMode') === 'enabled' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = '☀️';
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙';
        }
    });
}

// Filter tabs (for Beyond the Books page)
const filterTabs = document.querySelectorAll('.filter-tab');
const articleCards = document.querySelectorAll('.article-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const category = tab.dataset.category;
        
        // Filter articles
        articleCards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'flex';
            } else {
                const cardCategory = card.querySelector('.article-category')?.textContent.toLowerCase();
                if (cardCategory && cardCategory.includes(category)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});