// Navigation menu logic
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Faculty card show/hide logic
const btn = document.getElementById('see-more-btn');
btn.addEventListener('click', () => {
    const all = Array.from(document.querySelectorAll('.faculty-card'));
    const hidden = all.filter(card => card.classList.contains('hidden'));
    if (hidden.length) {
        hidden.slice(0, 3).forEach(card => card.classList.remove('hidden'));
        if (hidden.length <= 3) btn.classList.add('hidden');
    }
});
const batchSize = 0;
const seeMoreBtn = document.getElementById('see-more-btn');
const showLessBtn = document.getElementById('show-less-btn');
const facultyCards = Array.from(document.querySelectorAll('.faculty-card'));
let expandedCount = batchSize;

seeMoreBtn.addEventListener('click', function () {
    const hidden = facultyCards.filter(card => card.classList.contains('hidden'));
    if (hidden.length) {
        hidden.slice(0, batchSize).forEach(card => card.classList.remove('hidden'));
        expandedCount += batchSize;
    }
    if (facultyCards.filter(card => card.classList.contains('hidden')).length === 0) {
        seeMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
    }
});

showLessBtn.addEventListener('click', function () {
    facultyCards.slice(batchSize).forEach(card => card.classList.add('hidden'));
    seeMoreBtn.classList.remove('hidden');
    showLessBtn.classList.add('hidden');
    expandedCount = batchSize;
    window.scrollTo({ top: document.getElementById('faculty').offsetTop - 80, behavior: "smooth" });
});

// News auto-scroll
const newsContainer = document.getElementById("news-container");
const newsContent = document.getElementById("news-content");
newsContainer.appendChild(newsContent.cloneNode(true));
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 1;
    if (scrollAmount >= newsContent.scrollHeight) {
        scrollAmount = 0;
    }
    newsContainer.scrollTop = scrollAmount;
}, 50);

// Footer year auto-update
document.getElementById("year").textContent = new Date().getFullYear();

// News ticker animation
const ticker = document.getElementById('news-ticker');
let tickerSpeed = 1;
let position = ticker.offsetWidth;
function animateTicker() {
    position -= tickerSpeed;
    if (position < -ticker.scrollWidth) {
        position = ticker.offsetWidth;
    }
    ticker.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateTicker);
}
ticker.innerHTML += ticker.innerHTML;
requestAnimationFrame(animateTicker);
ticker.addEventListener('mouseenter', () => tickerSpeed = 0);
ticker.addEventListener('mouseleave', () => tickerSpeed = 1);

// Floating Login Modal logic
document.querySelectorAll('a[href="#login"]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.getElementById("login-modal-bg").classList.remove("hidden");
            });
        });

        // Close modal function
        function closeLogin() {
            document.getElementById("login-modal-bg").classList.add("hidden");
        }

        // Optional: close modal by clicking outside box
        document.getElementById("login-modal-bg").addEventListener("click", function (e) {
            if (e.target === this) closeLogin();
        });


        // Simple JavaScript for sliding gallery
  const slides = document.querySelectorAll('#gallery-slider .gallery-slide');
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 2500);