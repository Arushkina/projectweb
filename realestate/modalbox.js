document.addEventListener('DOMContentLoaded', function () {
    // Get modal box and map elements
    var modal = document.getElementById('modalBox');
    var maps = document.querySelectorAll('.region');
    var overview = document.querySelectorAll('.overview');
    // Attach click event listeners to each map
    maps.forEach(function (map, index) {
        map.addEventListener('click', function () {
            // Open modal box and display relevant information
            modal.style.display = 'block';
            modal.querySelector('p').textContent = overview[index].innerText;
        });
    });

    // Close the modal box when the close button is clicked
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal box when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
