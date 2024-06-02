window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.4)';
    } else {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const navToggle = document.querySelector('.nav-toggle');
//     const nav = document.querySelector('.nav ul');

//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 768) {
//             nav.style.display = 'flex';
//         } else if (!navToggle.checked) {
//             nav.style.display = 'none';
//         }
//     });
// });