// Grabbing DOM Elements
const addBookButton = document.querySelector('.add-book-button');
const modalContainer = document.querySelector('.modal-container');
const exitModalButton = document.querySelector('.exit-modal');
const body = document.querySelector('body')

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBookButton.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
  body.style.opacity = '.5' 
  modalContainer.style.opacity = '1'
  
});

exitModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
