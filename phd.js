document.addEventListener('DOMContentLoaded', function () {
    // Select all dropdown items with submenus
    var dropdowns = document.querySelectorAll('.dropdown-submenu .dropdown-toggle');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the dropdown from closing

            // Toggle the visibility of the next submenu
            var submenu = this.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle('show');
            }
        });
    });
});
