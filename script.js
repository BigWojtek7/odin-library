
const myLibrary = [];
getUserInput()

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}


function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book (title, author, pages, isRead);

  myLibrary.push(book);
  displayBookInTable()
}



function displayBookInTable() {
  const table = document.querySelector(".table-rows");
  const clearTable = document.querySelector(".table-rows")

  clearTable.innerHTML="";
  myLibrary.forEach(element => {
    const row = table.insertRow(-1);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    const elementIndex = myLibrary.indexOf(element);

    cell1.innerHTML = `${element.title}`;
    cell2.innerHTML = `${element.author}`;
    cell3.innerHTML = `${element.pages}`;
    cell4.innerHTML = `${element.isRead} <button class="change-button" value="${elementIndex}">Change</button>`;
    cell5.innerHTML =  `<button class="delete-button" value="${elementIndex}">Remove</button>`;
  });

  const deleteButtons = document.querySelectorAll(".delete-button")

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("wojtek1", button.value)
      deleteBook(button.value)
    });
  });

  const changeButtons = document.querySelectorAll(".change-button")

  changeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      console.log("wojtek1", button.value)
      changeBookStatus(button.value);
    });
  });
}

function getUserInput(){
  const dialog = document.querySelector("dialog");
  const showButton = document.getElementById("show-button");

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  const form = document.getElementById("get-book");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.querySelector('input[name="is-read"]:checked').value;
    // console.log(title, author, pages, isRead)
    dialog.close();
    form.reset();
    addBookToLibrary(title, author, pages, isRead)
  });
}


function deleteBook(arrayIndex) {
  console.log("wojtek" ,arrayIndex);
  myLibrary.splice(arrayIndex, 1);
  console.log(myLibrary)
  displayBookInTable();
}


function changeBookStatus(arrayIndex) {

  let bookStatus = myLibrary[arrayIndex].isRead;
  bookStatus === "Yes" ? bookStatus = "No" : bookStatus ="Yes";
  myLibrary[arrayIndex].isRead = bookStatus;

  console.log(typeof myLibrary[arrayIndex].isRead);
  displayBookInTable();
}