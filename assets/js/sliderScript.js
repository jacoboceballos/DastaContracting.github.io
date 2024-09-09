$(document).ready(function() {
    // Function to cycle through images within each slider
    function cycleImages() {
        $('.project-slider').each(function() {
            // Find the current active image
            var currentImg = $(this).find('img.active');
            // Find the next image to show
            var nextImg = currentImg.next('img');
            // If there's no next image, loop back to the first image
            if (nextImg.length === 0) {
                nextImg = $(this).find('img:first');
            }
            // Remove the 'active' class from the current image
            currentImg.removeClass('active');
            // Add the 'active' class to the next image
            nextImg.addClass('active');
        });
    }

    // Set the cycle to run every 3000 milliseconds (3 seconds)
    setInterval(cycleImages, 3000);
});
