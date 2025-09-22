document.addEventListener('DOMContentLoaded', function() {

    // ================================================== //
    //              Mobile Navigation (Hamburger)         //
    // ================================================== //
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
        });
    }

    // ================================================== //
    //           "WOW" Hero Section Animations            //
    // ================================================== //
    const hero = document.getElementById('hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX: x, clientY: y } = e;
            const { offsetWidth: width, offsetHeight: height } = hero;
            const moveX = (x / width * 40) - 20;
            const moveY = (y / height * 40) - 20;
            hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
        });
    }

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const elements = Array.from(heroContent.children);
        elements.forEach((element, i) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 300 * (i + 1));
        });
    }

    // ================================================== //
    //           Professional Theme Toggle Logic          //
    // ================================================== //
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;

    const setTheme = (theme) => {
        body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', theme);
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

   // ================================================== //
//          Modal Logic for Certificates (FIXED)      //
// ================================================== //
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const certGrid = document.querySelector('.certifications-grid');

if (certGrid) {
    certGrid.addEventListener('click', function(e) {
        // This is the FIX: Find the parent .cert-card no matter what was clicked inside it
        const certCard = e.target.closest('.cert-card'); 
        
        if (certCard && certCard.dataset.image) {
            modal.style.display = "block";
            modalImg.src = certCard.dataset.image;
        }
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
}

// Close modal when clicking outside the image
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

})