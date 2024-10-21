document.querySelectorAll('.dropdown-submenu > a').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent following the link
        var submenu = this.nextElementSibling;

        // Toggle the 'open' class to show or hide the submenu
        submenu.classList.toggle('open');
    });
});
