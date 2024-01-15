const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

const appendToBook = (parent, content) => {
  const element = document.createElement("div");
  element.innerHTML = content;
  parent.appendChild(element);
};

btn.addEventListener('click', function (e) {
  e.preventDefault();

  //work on CRUD operation of DOM
  const book = document.createElement("section");

  appendToBook(book, title.value);
  appendToBook(book, author.value);
  appendToBook(book, year.value);

  bookList.appendChild(book);
});
