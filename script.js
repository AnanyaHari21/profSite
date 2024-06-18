document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const items = document.querySelectorAll(".accomplishments-list li, .news-list li, .section h2, .section p, .section ul");

    const showItems = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    };

    window.addEventListener("scroll", showItems);

    // Initial call to show items on page load
    showItems();
});