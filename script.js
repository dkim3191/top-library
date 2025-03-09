let books = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function createBook(title, author) {
    const book = new Book(title, author);
    books.push(book);
    displayBook(book);
}

function displayBook(book) {
    const library = document.querySelector(".library");

    const div = document.createElement("div");
    div.className = "book";
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = book.title;
    const author = document.createElement("div");
    author.className = "author";
    author.textContent = book.author;
    const id = document.createElement("div");
    id.textContent = book.id;

    library.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(id);
}

createBook("One Happy Day", "Rosemarry Johnson");
createBook("The Weeping Willow", "Harry Potter");
createBook("The Last One Standing", "Bill Ross");
createBook("How Many Men", "Patricia Lakes");

for (let book of books) {
    console.log(book);
}