let myLibrary = []

// testing
const theHobbit = new Book(
    myLibrary.length,
    'The Hobbit',
    'J.R.R Tolkien',
    295,
    false
)
myLibrary.push(theHobbit)

const theHobbit2 = new Book(
    myLibrary.length,
    'The Hobbit',
    'J.R.R Tolkien',
    295,
    false
)
myLibrary.push(theHobbit2)



// window.onchange = () => {
// 	const main = document.querySelector('.main')
// 	const bookCards = main.querySelectorAll('button')
// 	console.log(bookCards)	
// }



function Book(index, title, author, pages, read) {   
    this.index = index;
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

    const newBook = new Book (myLibrary.length, title, author, pageNum, finishedStatus);
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
        const bookCard = `
            <div class="book-card">
                <h2>${book.index}</h2>
                <h2>${book.name}</h2>
                <h3>by ${book.author}</h3>
                <h4>Pages: ${book.pages}</h4>
                <h4>Read: ${book.read}</h4> 
                <button class="delete-button" onclick="deleteCard(${book.index})">Delete</button>
                <button class="toggle-button" onclick="toggleReadStatus(${book.index})">Toggle Status</button>
            </div>`
    	page.insertAdjacentHTML("beforeend", bookCard);
  	}    
    
    
}

function deleteCard(targetIndex) {
    console.log("Before: " + myLibrary)
    myLibrary.forEach( (book) => {
        console.log(book);
        if (book.index == targetIndex) {
            const index = myLibrary.indexOf(book)
            if (index > -1) {
                myLibrary.splice(index, 1)
            }
        }
    })
    console.log("After:" + myLibrary)
    displayLibraryContent()
}

function toggleReadStatus(targetIndex) {
    myLibrary.forEach((book) => {
        if (book.index == targetIndex) {
            const index = Number(myLibrary.indexOf(book));
            myLibrary[index].read = !myLibrary[index].read
        }
    })
    displayLibraryContent()
}

window.onload = () => {
    displayLibraryContent()
}



