// john-jane-carousel.js
// Custom multi-item carousel for #johnandjane section only

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('johnJaneCarousel');
    if (!carousel) return;

    // Only for john-jane__carousel
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carouselInner.querySelectorAll('.carousel-item');

    // Responsive settings
    function getSlidesToShow() {
        if (window.innerWidth >= 991) return 6;
        if (window.innerWidth >= 767) return 3;
        if (window.innerWidth >= 478) return 2;
        return 1;
    }

    function updateCarousel() {
        const slidesToShow = getSlidesToShow();
        items.forEach(item => item.classList.remove('multi-active'));
        // Find the active index
        let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
        if (activeIndex === -1) activeIndex = 0;
        // Show N slides
        for (let i = 0; i < slidesToShow; i++) {
            const idx = (activeIndex + i) % items.length;
            items[idx].classList.add('multi-active');
        }
    }

    // Patch Bootstrap's slide event to update visible slides
    carousel.addEventListener('slide.bs.carousel', function (event) {
        // event.to is the index of the new active slide
        setTimeout(updateCarousel, 10);
    });

    // On resize, update visible slides
    window.addEventListener('resize', updateCarousel);

    // Initial update
    updateCarousel();
});
