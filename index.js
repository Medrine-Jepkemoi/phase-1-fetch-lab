function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('http://localhost:3000/books')
  .then(res => res.json())
  .then (data => renderBooks(data))

  // return fetch()

  
}
 
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    console.log('before')
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  console.log('after')
});
