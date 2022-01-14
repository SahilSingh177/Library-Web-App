console.log('This is created using ES6')

class Book{
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

class Display {
    add(book) {
        console.log('Added to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                         <td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.genre}</td>
                        </tr> `;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.title.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message')
        let text;
        if(type==='success'){
            text='Well Done. '
        }
        else{
            text='Sorry '
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                           <strong>${text}</strong>${displayMessage}
                           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
        setTimeout(() => {
            message.innerHTML = ``;
        }, 5000);
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have successfully submitted the library form')
    let title = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let genre;
    let scifi = document.getElementById('ScifiAndFiction');
    let bio = document.getElementById('Biography');
    let romcom = document.getElementById('Romcom');

    if (scifi.checked) {
        genre = scifi.value;
    }
    else if (bio.checked) {
        genre = bio.value;
    }
    else if (romcom.checked) {
        genre = romcom.value;
    }

    let book = new Book(title, author, genre)
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Book Details Successfully added.')
    }
    else {
        // Show error
        display.show('danger', 'Sorry You cannot add this book ')
    }

}