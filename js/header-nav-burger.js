// Burger menu logic for header__nav

document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector('.header__nav-toggle');
    var navList = document.querySelector('.header__nav-list');
    var navLinks = document.querySelectorAll('.header__nav-item');

    if (!burger || !navList) return;

    burger.addEventListener('click', function () {
        var isOpen = navList.classList.toggle('show');
        burger.setAttribute('aria-expanded', String(isOpen));
        document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
            burger.setAttribute('aria-expanded', 'false');
            document.documentElement.style.overflow = 'auto';
        });
    });
});

