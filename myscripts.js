let myLibrary = []

// testing
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
const theHobbit2 = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
myLibrary.push(theHobbit)
myLibrary.push(theHobbit2)

function Book(title, author, pages, read) {
  this.name = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    let infoStr = `${title}, by ${author}\nPage Count: ${pages} pages\nStatus: ${read ? 'read' : 'not read'}`
    
    return infoStr
  }
}

function submitForm() {
    // console.log(event.target.elements.searchTerm.value)
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageNum = document.getElementById('pageNum').value;
    const finishedStatus = document.getElementById('read').checked;

    const newBook = new Book (title, author, pageNum, finishedStatus);
    addBookToLibrary(newBook)

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pageNum').value = '';
    document.getElementById('read').checked = false;
     
    displayLibraryContent()
}

function addBookToLibrary(book) { 
  myLibrary.push(book)
}


function displayLibraryContent() {
    const page = document.querySelector('.main');
    page.innerHTML = '';
    for (book of myLibrary) {
        const bookCard = document.createElement('div');
        const newTitle = document.createElement('h2');
        newTitle.textContent = `${book.info()}`;
        newTitle.classList.add('book-card');
        bookCard.appendChild(newTitle);
        page.appendChild(bookCard);
    }

}





window.onload = () => {
    displayLibraryContent()
}

