const myLibrary = [];
getUserInput();

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

Book.prototype.changeReadState = function () {
  this.isRead = this.isRead === "Yes" ? "No" : "Yes";
};

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);
  displayBookInTable();
}

function displayBookInTable() {
  const table = document.querySelector(".table-rows");
  const clearTable = document.querySelector(".table-rows");

  clearTable.innerHTML = "";
  myLibrary.forEach((element) => {
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
    cell5.innerHTML = `<button class="delete-button" value="${elementIndex}">Remove</button>`;
  });

  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      deleteBook(button.value);
    });
  });

  const changeButtons = document.querySelectorAll(".change-button");

  changeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault;
      changeBookStatus(button.value);
    });
  });
}

function getUserInput() {
  const dialog = document.querySelector("dialog");
  const showButton = document.getElementById("show-button");
  const closeButton = document.getElementById("close-button");

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  const form = document.getElementById("get-book");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputArr = [];

    [...e.currentTarget.elements]
      .filter(
        (el) =>
          el.dataset.type !== "ignore" ||
          (el.type === "radio" && el.checked === true)
      )
      .forEach((item) => {
        if (item.type !== "radio") {
          const error = item.parentElement.querySelector(".error");
          error.textContent = "";
          if (item.value === "") {
            error.textContent = `You need to enter ${item.name}.`;
          }
        }

        inputArr.push({ name: item.name, value: item.value });
      });

    if (
      inputArr[0].value !== "" &&
      inputArr[1].value !== "" &&
      inputArr[2].value !== ""
    ) {
      dialog.close();
      form.reset();
      addBookToLibrary(
        inputArr[0].value,
        inputArr[1].value,
        inputArr[2].value,
        inputArr[3].value
      );
    }
  });

  closeButton.addEventListener("click", () => dialog.close());
}

function deleteBook(arrayIndex) {
  myLibrary.splice(arrayIndex, 1);
  displayBookInTable();
}

function changeBookStatus(arrayIndex) {
  myLibrary[arrayIndex].changeReadState();
  displayBookInTable();
}
