// Function to filter books by category

function filterBooks(category) {
	// Get all book elements
	var books = document.getElementsByClassName('book');

	// If category is "All", show all books
	if (category === 'All') {
		for (var i = 0; i < books.length; i++) {
					books[i].style.display = 'block';
		}
	}
	else {
		// Hide all books and show only books in selected category
		for (var i = 0; i < books.length; i++) {
			if (books[i].getAttribute('data-category') === category) {
				books[i].style.display = 'block';
			}
			else {
						books[i].style.display = 'none';
			}
		}
	}
}