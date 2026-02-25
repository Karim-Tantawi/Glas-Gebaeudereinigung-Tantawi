 
        // Fade-In beim Scrollen
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
   
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = document.querySelectorAll('.gallery-track img');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxClose = document.querySelector('.lightbox-close');

let currentIndex = 0;

/* Bild anklicken → öffnen */
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden"; // verhindert Scrollen im Hintergrund
    });
});

function updateLightbox() {
    lightboxImg.src = images[currentIndex].src;
}

/* Nächstes Bild */
lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
});

/* Vorheriges Bild */
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
});

/* RICHTIGES Schließen */
function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; // Scrollen wieder aktivieren
}

/* X Button */
lightboxClose.addEventListener('click', closeLightbox);

/* Klick auf dunklen Hintergrund */
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

/* ESC Taste */
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});
 