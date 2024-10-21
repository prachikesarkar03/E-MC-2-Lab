document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize the map
        var map = L.map('map').setView([19.0222, 72.8561], 16); // Adjust zoom level for a closer view

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker at VJTI's location
        L.marker([19.0222, 72.8561]).addTo(map)
            .bindPopup('<b>VJTI</b><br>Veermata Jijabai Technological Institute.<br><a href="https://www.google.com/maps?q=19.0222,72.8561" target="_blank">Open in Google Maps</a>')
            .openPopup();
    } catch (error) {
        console.error('Error initializing the map:', error);
    }
});