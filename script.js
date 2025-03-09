let books = [];

function Book(title, author, pages, have_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
    this.id = crypto.randomUUID();
}

function createBook(title, author, pages, have_read) {
    const book = new Book(title, author, pages, have_read);
    books.push(book);
}

createBook("One Happy Day", "Rosemarry Johnson", 352, "yes");
createBook("The Weeping Willow", "Harry Potter", 142, "no");
createBook("The Last One Standing", "Bill Ross", 535, "yes");
createBook("How Many Men", "Patricia Lakes", 523, "no");

const library = document.querySelector(".library");

function displayBooks(books) {
    for (let book of books) {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const author = document.createElement("h4");
        const pages = document.createElement("p");
        const have_read = document.createElement("p");
        const id = document.createElement("p");
    
        div.className = "book";
        title.className = "title";
        author.className = "author";
        pages.className = "pages";
        have_read.className = "have_read";
        id.className = "id";
        
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + " pages";
        have_read.textContent = "Have read: " + book.have_read;
        id.textContent = "ID: " + book.id;
    
        library.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(have_read);
        div.appendChild(id);
    }
}

displayBooks(books);