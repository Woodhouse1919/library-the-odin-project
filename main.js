// Grabbing DOM Elements
const addBookButton = document.querySelector('.add-book-button');
const modalContainer = document.querySelector('.modal-container');
const exitModalButton = document.querySelector('.exit-modal');


let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    pages: '300',
    read: true,
  }

];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
// Grabbing table Dom Element
const table = document.querySelector('tbody')
const tableRow = document.createElement('tr')
const tableTitle = document.createElement('td')
const tableAuthor = document.createElement('td')
const tablePages = document.createElement('td')
const tableRead = document.createElement('td')
const checkBox = document.createElement('input')


tableRow.classList.add('book')
table.appendChild(tableRow)

tableTitle.classList.add('title')
tableTitle.textContent = title
tableRow.appendChild(tableTitle)

tableAuthor.classList.add('author')
tableAuthor.textContent = author
tableRow.appendChild(tableAuthor)

tablePages.classList.add('pages')
tablePages.textContent = pages
tableRow.appendChild(tablePages)


checkBox.type = 'checkbox'
checkBox.name = 'read'
checkBox.id = 'read'
checkBox.checked = read
tableRow.appendChild(tableRead)
tableRead.appendChild(checkBox)
}



// Event listener for opening Book Info Model
addBookButton.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
  
});

// Event listener for closing Book Info Modal
exitModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
