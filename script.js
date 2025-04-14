const myCollection = [];

class Book {
    constructor(title, author, pages, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
        this.id = id;    
    }
    info() {
        let reply;
        if(this.isRead) {
            reply = `${this.title} by ${this.author}, ${this.pages} pages long. Already read`;
        }
        else {
            reply = `${this.title} by ${this.author}, ${this.pages} pages long. Not read yet`;
        }
        return reply;
    }
    haveRead() {
        this.isRead = true;
    }
}

function addBook() {
    let bookName, authorName, pageCount, id;
    bookName = document.querySelector("#newTitle").value;
    authorName = document.querySelector("#newAuthor").value;
    pageCount = document.querySelector("#newPages").value;
    id = crypto.randomUUID();
    let bookObject = new Book(bookName, authorName, pageCount, id);
    myCollection.push(bookObject);
    populateLibrary();
}


document.querySelector(".addButton").addEventListener('click', ()=> {
    document.querySelector("dialog").showModal();
});
document.querySelector("#updateBook").addEventListener('click', ()=> {
    addBook();
    document.querySelector("dialog").close();
});

function populateLibrary() {
    let shelf = document.querySelector("main > div");
    let book, closeButton, title, image, info, readButton;
    book = document.createElement("div");
    book.classList.add("cards");
    book.dataset.uniqueID = myCollection[myCollection.length-1].id;
    shelf.appendChild(book);
    closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("closeButton");
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', (Event)=>{
        let parent = Event.target.parentNode;
        let id = parent.dataset.uniqueID;    
        parent.remove();
        for(let i=0;i<myCollection.length;i++) {
            if(myCollection[i].id==id) {
                myCollection.splice(i,1);
            }
        }
    });
    book.appendChild(closeButton);
    title = document.createElement("h3");
    title.textContent = myCollection[myCollection.length-1].title;
    book.appendChild(title);
    image = document.createElement("img");
    image.src = "./assets/view-dashboard.svg";
    book.appendChild(image);
    info = document.createElement("p");
    info.textContent = myCollection[myCollection.length-1].info();
    book.appendChild(info);
    readButton = document.createElement("button");
    readButton.type = "button";
    readButton.classList.add("haveRead");
    readButton.textContent = 'Read';
    readButton.addEventListener('click', (Event)=>{
        let parent = Event.target.parentNode;
        let id = parent.dataset.uniqueID;
        for(let i=0;i<myCollection.length;i++) {
            if(myCollection[i].id==id) {
                myCollection[i].haveRead();
                Event.target.previousSibling.textContent = myCollection[i].info();
                Event.target.remove();
            }
        }        
    });
    book.appendChild(readButton);
}