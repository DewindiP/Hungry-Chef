
    document.addEventListener("DOMContentLoaded", function () {
        const categoryButtons = document.querySelectorAll('.white_btn');
        const items = document.querySelectorAll('.box1');

        categoryButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                const selectedCategory = button.textContent.trim();

                // Toggle the 'selected' class for category buttons
                categoryButtons.forEach(function (btn) {
                    btn.classList.remove('selected');
                });
                button.classList.add('selected');

                // Show or hide items based on the selected category
                items.forEach(function (item) {
                    const category = item.querySelector('.category span').textContent.trim();
                    if (selectedCategory === 'All' || category === selectedCategory) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
        });
    });
});
