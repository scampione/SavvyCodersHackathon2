// Put all of your jQuery and JavaScript in this document.

var numberOfPoints;

var book1 = {
    "id":1,
    "type": "book",
    "name": "JavaScript - The Good Parts",
    "author":"Dough Crawford",
    "price":12.00,
    "pictureUrl":"https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._SX381_BO1,204,203,200_.jpg",
    "sellingPoints":["Best javascript book of 2016","Great example code"]
};

var book2 = {
    "id":2,
    "type": "book",
    "name":"Exploring ReactJS",
    "author":"Edward Smith",
    "price":19.99,
    "pictureUrl":"http://reactkungfu.com/assets/images/rbe-cover.png",
    "sellingPoints":["Great book for beginners"]
};

var album1 = {
    "id":3,
    "type": "album",
    "name":"Nevermind",
    "author":"Nirvana",
    "price":15.00,
    "pictureUrl":"https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    "sellingPoints":["point 1","point 2"]
};

var album2 = {
    "id":4,
    "type": "album",
    "name":"A Moon-Shaped Pool",
    "author":"Radiohead",
    "price":12.95,
    "pictureUrl":"http://cdn.pitchfork.com/albums/23244/e3c43867.jpg",
    "sellingPoints":["point 1", "point 2", "point 3"]
};

var addToPage = function( productObject ){
    $( "#content-area" ).append( "<div id='" + productObject.type + productObject.id + "'></div>" );
    var $target = $( "#" + productObject.type + productObject.id );
    var $sellingPoints;

    $target.append( "<div class='name'>" + productObject.name + "</div>" );
    $target.append( "<div class='author'>" + productObject.author + "</div>" );
    $target.append( $( "<div class='picture-url'></div>").html( "<img src='" + productObject.pictureUrl + "'>" ) );
    $target.append( "<div class='price'>" + productObject.price + "</div>" );
    $target.append( "<ul class='selling-points'></ul>" );

    $sellingPoints = $target.find( ".selling-points" );

    productObject.sellingPoints.forEach( function( sellingPoint ){
        $sellingPoints.append( "<li>" + sellingPoint + "</li>" );
    } );
};

addToPage( book1 );
addToPage( book2 );
addToPage( album1 );
addToPage( album2 );

var count = 4;

$( "form" ).on( "submit", function( event ){
    event.preventDefault();

    var data = $( this ).serializeArray();
    var formObject = {};

    formObject.id = ++count;
    formObject.sellingPoints = [];
    data.forEach( function( field ){
        if( field.name === "selling_points" ){
            formObject.sellingPoints.push( field.value );
        } else{
            formObject[ field.name ] = field.value;
        }
    } );

    addToPage( formObject );
});
