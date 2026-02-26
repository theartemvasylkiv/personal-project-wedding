document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".header__nav-toggle");
    const navList = document.querySelector(".header__nav-list");

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("header__nav-toggle--active");
        navList.classList.toggle("header__nav-list--active");

        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", !isExpanded);
    });
});