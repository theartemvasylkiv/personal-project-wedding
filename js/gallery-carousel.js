// Gallery Carousel Synchronization
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('galleryCarousel');
    if (!carousel) return;

    const thumbButtons = document.querySelectorAll('.gallery__thumb');

    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: false, // Disable auto-slide
        wrap: true
    });

    // keep slides full-width -- recalc on load/resize/slide
    function fixSlideWidths() {
        const items = carousel.querySelectorAll('.carousel-item');
        const cw = carousel.offsetWidth;
        items.forEach(i => {
            i.style.width = cw + 'px';
        });
    }
    // run immediately and on events
    fixSlideWidths();
    window.addEventListener('load', fixSlideWidths);
    window.addEventListener('resize', fixSlideWidths);
    carousel.addEventListener('slide.bs.carousel', fixSlideWidths);

    // ensure positions recalc after images load (fix incomplete initial slide)
    window.addEventListener('load', function () {
        carouselInstance.to(carouselInstance._activeIndex || 0);
    });

    carousel.addEventListener('slid.bs.carousel', function (event) {
        updateActiveThumbnail(event.to);
    });

    // Update thumbnail active state when thumbnail is clicked
    thumbButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            updateActiveThumbnail(index);
        });
    });

    function updateActiveThumbnail(activeIndex) {
        thumbButtons.forEach((button, index) => {
            if (index === activeIndex) {
                button.classList.add('gallery__thumb--active');
            } else {
                button.classList.remove('gallery__thumb--active');
            }
        });
    }
});
