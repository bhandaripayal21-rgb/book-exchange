let books = JSON.parse(localStorage.getItem("books")) || [];

displayBooks();

function addBook() {

    let bookName = document.getElementById("bookName").value;
    let ownerName = document.getElementById("ownerName").value;
    let condition = document.getElementById("condition").value;

    if (
        bookName === "" ||
        ownerName === "" ||
        condition === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let book = {
        bookName,
        ownerName,
        condition
    };

    books.push(book);

    localStorage.setItem(
        "books",
        JSON.stringify(books)
    );

    displayBooks();

    document.getElementById("bookName").value = "";
    document.getElementById("ownerName").value = "";
    document.getElementById("condition").value = "";
}

function displayBooks() {

    let container = document.getElementById("bookList");

    container.innerHTML = "";

    books.forEach((book, index) => {

        container.innerHTML += `
            <div class="book-card">
                <h3>${book.bookName}</h3>
                <p><b>Owner:</b> ${book.ownerName}</p>
                <p><b>Condition:</b> ${book.condition}</p>

                <button onclick="deleteBook(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteBook(index) {

    books.splice(index, 1);

    localStorage.setItem(
        "books",
        JSON.stringify(books)
    );

    displayBooks();
}