window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Jika scroll lebih dari 100px dari atas
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.4)'; // Atur latar belakang navigasi menjadi lebih transparan
    } else {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.8)'; // Kembalikan latar belakang navigasi ke transparansi default
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav ul');

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        } else if (!navToggle.checked) {
            nav.style.display = 'none';
        }
    });
});

AOS.init()