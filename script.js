let books = [];

function Book(title, author, pages, have_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
    this.id = crypto.randomUUID();
}

Book.prototype.read = function () {
    if (this.have_read == "Yes") {
        this.have_read = "No";
    } else {
        this.have_read = "Yes";
    }
};

function createBook(title, author, pages, have_read) {
    const book = new Book(title, author, pages, have_read);
    books.push(book);
}

createBook("One Happy Day", "Rosemarry Johnson", 352, "Yes");
createBook("The Weeping Willow", "Harry Potter", 142, "No");
createBook("Cinderella", "James Bond", 150, "Yes");
createBook("How Come?", "George Clooney", 992, "No");

const library = document.querySelector(".library");

function displayBooks(books) {
    library.innerHTML = "";
    for (let book of books) {
        const bookWrapper = document.createElement("div");
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const author = document.createElement("h4");
        const pages = document.createElement("p");
        const have_read = document.createElement("p");
        const removeBtn = document.createElement("button");
        const readBtn = document.createElement("button");

        bookWrapper.className = "book-wrapper";
        div.className = "book";
        title.className = "title";
        author.className = "author";
        pages.className = "pages";
        have_read.className = "have_read";
        removeBtn.className = "remove-button";
        removeBtn.setAttribute("data-book-id", book.id);
        readBtn.className = "read-button";

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages + " pages";
        have_read.textContent = "Have read: " + book.have_read;
        removeBtn.textContent = "Remove";
        readBtn.textContent = "I've read this";

        removeBtn.addEventListener("click", (e) => {
            const bookID = e.target.dataset.bookId;
            for (const b in books) {
                if (bookID == books[b].id) {
                    bookWrapper.remove();
                    books.splice(b, 1);
                }
            }
        });

        readBtn.addEventListener("click", () => {
            book.read();
            displayBooks(books);
        });

        library.appendChild(bookWrapper);
        bookWrapper.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(have_read);
        bookWrapper.appendChild(removeBtn);
        bookWrapper.appendChild(readBtn);
    }
}

displayBooks(books);

// Dialog
const showBtn = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inp_title = document.querySelector("#title").value;
    const inp_author = document.querySelector("#author").value;
    const inp_pages = document.querySelector("#pages").value;
    const inp_have_read = document.querySelector("#have-read").checked ? "Yes" : "No";
    createBook(inp_title, inp_author, inp_pages, inp_have_read);
    displayBooks(books);
    dialog.close();
});
