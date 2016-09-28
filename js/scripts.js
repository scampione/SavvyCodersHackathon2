// Put all of your jQuery and JavaScript in this document.

var book = {
    title:,
    author:,
    isbn:,
    price:,
    imageFrontAddress:,
    imageBackAddress:
}

var loadBook = function() {
    getBookImage();
    getBookAuthor();
}

var getBookImage = function(bookIsbn) {
    book.imageFrontAddress ="<img src="https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._SX381_BO1,204,203,200_.jpg"
}

var getBookAuthor = function(bookIsbn) {
    book.author="Douglas Crockford"
}

var getBookPrice = function(bookIsbn) {
    book.price=1500
}
