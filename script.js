// Mobile Menu Toggle
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // Faculty See More/Less
            const seeMoreBtn = document.getElementById('see-more-btn');
            const showLessBtn = document.getElementById('show-less-btn');
            const facultyCards = document.querySelectorAll('.faculty-card');

            seeMoreBtn.addEventListener('click', () => {
                facultyCards.forEach(card => card.classList.remove('hidden'));
                seeMoreBtn.classList.add('hidden');
                showLessBtn.classList.remove('hidden');
            });

            showLessBtn.addEventListener('click', () => {
                facultyCards.forEach((card, index) => {
                    if (index >= 3) card.classList.add('hidden');
                });
                showLessBtn.classList.add('hidden');
                seeMoreBtn.classList.remove('hidden');
                document.getElementById('faculty').scrollIntoView({ behavior: 'smooth' });
            });

            // Gallery Slider
            let currentSlide = 0;
            const slides = document.querySelectorAll('.gallery-slide');
            const dots = document.querySelectorAll('.gallery-dot');

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('opacity-100');
                    slide.classList.add('opacity-0');
                    if (i === index) {
                        slide.classList.remove('opacity-0');
                        slide.classList.add('opacity-100');
                    }
                });

                dots.forEach((dot, i) => {
                    dot.classList.toggle('opacity-100', i === index);
                    dot.classList.toggle('opacity-50', i !== index);
                });

                currentSlide = index;
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }

            // Auto slide
            setInterval(nextSlide, 5000);

            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => showSlide(index));
            });

            // Modal functions
            function openModal() {
                const modal = document.getElementById('galleryModal');
                const modalImg = document.getElementById('modalImg');
                modalImg.src = slides[currentSlide].src;
                modal.classList.remove('hidden');
            }

            function closeModal() {
                document.getElementById('galleryModal').classList.add('hidden');
            }

            function nextImg() {
                nextSlide();
                document.getElementById('modalImg').src = slides[currentSlide].src;
            }

            function prevImg() {
                prevSlide();
                document.getElementById('modalImg').src = slides[currentSlide].src;
            }

            // Login Modal
            const loginLinks = document.querySelectorAll('a[href="#login"]');
            const loginModal = document.getElementById('login-modal-bg');

            loginLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loginModal.classList.remove('hidden');
                });
            });

            function closeLogin() {
                loginModal.classList.add('hidden');
            }

            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal) closeLogin();
            });

            // Scroll Reveal Animation
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

            // Set current year
            document.getElementById('year').textContent = new Date().getFullYear();

            // Navbar scroll effect
            let lastScroll = 0;
            const navbar = document.querySelector('nav');

            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 100) {
                    navbar.classList.add('py-2');
                    navbar.classList.remove('py-4');
                } else {
                    navbar.classList.add('py-4');
                    navbar.classList.remove('py-2');
                }

                lastScroll = currentScroll;
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href !== '#login' && href !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });


