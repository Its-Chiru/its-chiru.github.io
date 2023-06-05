// Get all the blog elements
var blogs = document.querySelectorAll('.blog');

// Add an input event listener to the search input field
document.getElementById('searchInput').addEventListener('input', function () {
    // Get the search query entered by the user and convert it to lowercase
    var searchQuery = this.value.toLowerCase();

    // Iterate over each blog
    blogs.forEach(function (blog) {
        // Get the lowercase text content of the blog title, date, and content
        var title = blog.querySelector('h1').textContent.toLowerCase();
        var date = blog.querySelector('date').textContent.toLowerCase();
        var content = blog.querySelector('p').textContent.toLowerCase();

        // Check if the search query is found in the title, date, or content
        if (title.includes(searchQuery) || date.includes(searchQuery) || content.includes(searchQuery)) {
            // Display the blog if it matches the search query
            blog.style.display = 'grid';
        } else {
            // Hide the blog if it does not match the search query
            blog.style.display = 'none';
        }
    });
});