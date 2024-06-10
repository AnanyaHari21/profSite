document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".news-list li");

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
