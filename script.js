function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead} yet`
  }
}

const book1 = new Book ("Harry Potter", "J.K Rowling", 533, "not read")

console.log(book1.info());