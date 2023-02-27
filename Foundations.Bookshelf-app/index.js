




let app = document.querySelector('#app');
let bookshelf = new Bookshelf();

// Load in book data
for (let bookInfo of bookData) {
let book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

app.append(bookshelf.render());





// let users add new books inside the library app

let addBtn = document.querySelector('#add-book')

addBtn.addEventListener('click', () => { // adds an event listener to button
  let title = document.querySelector('#book-title').value  // these all get the input and adds a value to them
  let author = document.querySelector('#book-author').value
  let language = document.querySelector('#book-language').value
  let subject = document.querySelector('#book-subject').value
  let comments = document.querySelector('#book-comments').value

let newBook = new Book(author, language, subject, title, comments);  // this will be the new book that the user will type in 

bookshelf.addBook(newBook)  // appemds the new book to bookshelf

app.append(bookshelf.render())  // render function to display the new book to the webpage

// 

})


