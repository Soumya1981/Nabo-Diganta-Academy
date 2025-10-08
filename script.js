// //  Mobile menu script

// const menuBtn = document.getElementById('menu-btn');
//             const menu = document.getElementById('menu');
//             const mobileMenu = document.getElementById('mobile-menu');
//             menuBtn.addEventListener('click', () => {
//                 mobileMenu.classList.toggle('hidden');
//             });
//             // Hide mobile menu on navigation
//             document.querySelectorAll('#mobile-menu a').forEach(link => {
//                 link.addEventListener('click', () => {
//                     mobileMenu.classList.add('hidden');
//                 });
//             });

// const btn = document.getElementById('see-more-btn');
//                 btn.addEventListener('click', () => {
//                     // .faculty-card, skip first 3 (0,1,2): reveal next 3, then next 3 etc.
//                     const all = Array.from(document.querySelectorAll('.faculty-card'));
//                     const hidden = all.filter(card => card.classList.contains('hidden'));
//                     if (hidden.length) {
//                         hidden.slice(0, 3).forEach(card => card.classList.remove('hidden'));
//                         // Hide button if none left
//                         if (hidden.length <= 3) btn.classList.add('hidden');
//                     }
//                 });