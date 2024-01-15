// common.js
// Function to load shared HTML content
function loadSharedContent() {
    // Create a new XMLHttpRequest (AJAX) object
    var xhr = new XMLHttpRequest();

    // Define the URL of the common HTML file
    var url = 'social-link.html';

    // Configure the request
    xhr.open('GET', url, true);

    // Set up a callback function to handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            // If the request is successful, insert the content into a specified element
            // var sharedContent = document.getElementById('shared-content');
            // var sharedContent = document.getElementsByClassName('shared-content');
            var sharedContent = document.getElementById('social-links');
            sharedContent.innerHTML = xhr.responseText;
        }
    };

    // Send the request
xhr.send();
}

// Call the function to load shared content when the page loads
window.onload = loadSharedContent;  

