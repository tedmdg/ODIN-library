//const bookTitle = document.getElementById('bookTitle')
//const bookAuthor = document.getElementById('bookAuthor')


function myFunction(e){
    e.preventDefault();
    let bookTitle = document.querySelector("#bookTitle");
    let bookAuthor = document.querySelector("#bookAuthor");

    let msgbooktitle = document.querySelector("#msgbooktitle");
    let msgbookAuthor = document.querySelector("#msgbookAuthor");

    msgbooktitle.innerHTML = "The book title is " + bookTitle.value;
    msgbookAuthor.innerHTML = "The author of the book is " + bookAuthor.value;

    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('mybutton').addEventListener('click', myFunction);
});
