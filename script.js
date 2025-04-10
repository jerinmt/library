const myLibrary = [];

function Book(title, author, pages) {
    if(!new.target) {
        throw Error("Use the 'new' operator to call the constructor");   
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.info = function() {
        let reply;
        if(this.isRead) {
            reply = `${this.title} by ${this.author}, ${this.pages}. Not read yet`;    
        }
        else {
            reply = `${this.title} by ${this.author}, ${this.pages}. Already read`;
        }
        return reply;
    }
}
Book.prototype.haveRead = function() {
    this.isRead = !this.isRead;
}

function addBook() {
    let bookName, authorName, pageCount;
    //take parameters
    let bookObject = new Book(bookName, authorName, pageCount);
    myLibrary.push(bookObject);
}

document.querySelectorAll("#addButton").addEventlistener('click', ()=> {
    let modalBox = document.querySelector("dialog");
    modalBox.show();
    modalBox.
});