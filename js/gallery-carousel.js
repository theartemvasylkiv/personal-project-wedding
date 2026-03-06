// Gallery Carousel Synchronization
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("galleryCarousel");
    if (!carousel) return;

    const thumbButtons = document.querySelectorAll(".gallery__thumb");

    new bootstrap.Carousel(carousel, {
        interval: false,
        wrap: true,
    });

    function fixSlideWidths() {
        const items = carousel.querySelectorAll(".carousel-item");
        const cw = carousel.offsetWidth;

        items.forEach((item) => {
            item.style.width = cw + "px";
        });
    }

    function updateActiveThumbnail(index) {
        thumbButtons.forEach((button, i) => {
            button.classList.toggle("gallery__thumb--active", i === index);
        });
    }

    function getActiveSlideIndex() {
        const items = carousel.querySelectorAll(".carousel-item");
        return [...items].findIndex((item) =>
            item.classList.contains("active")
        );
    }

    fixSlideWidths();

    window.addEventListener("resize", fixSlideWidths);

    carousel.addEventListener("slid.bs.carousel", function () {
        const index = getActiveSlideIndex();
        updateActiveThumbnail(index);
    });

    // init state
    updateActiveThumbnail(getActiveSlideIndex());
});