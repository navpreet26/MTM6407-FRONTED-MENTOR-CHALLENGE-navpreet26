document.addEventListener("DOMContentLoaded", function () {
    // Select all sections or cards related to news categories
    const newsSections = document.querySelectorAll('.news-section');

    // Listen for when a news section is clicked
    newsSections.forEach(function(section) {
        section.addEventListener('click', function () {
            // Get all open or active sections
            const openSections = document.querySelectorAll('.news-section.active');
            openSections.forEach(function(openSection) {
                // Remove 'active' class from any other open section
                if (openSection !== section) {
                    openSection.classList.remove('active');
                }
            });

            // Toggle the 'active' class on the clicked section (to display content or highlight)
            section.classList.toggle('active');
        });
    });
});
