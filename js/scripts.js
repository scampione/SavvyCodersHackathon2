// Put all of your jQuery and JavaScript in this document.

var numberOfPoints;


var book1 = {
    "id":1,
    "type": "book",
    "name": "JavaScript - The Good Parts",
    "author":"Dough Crawford",
    "price":12.00,
    "picture_url":"https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._SX381_BO1,204,203,200_.jpg",
    "selling_points":["Best javascript book of 2016","Great example code"]
};

var book2 = {
    "id":2,
    "type": "book",
    "name":"Exploring ReactJS",
    "author":"Edward Smith",
    "price":19.99,
    "picture_url":"http://reactkungfu.com/assets/images/rbe-cover.png",
    "selling_points":["Great book for beginners"]
};

var album1 = {
    "id":3,
    "type": "album",
    "name":"Nevermind",
    "author":"Nirvana",
    "price":15.00,
    "picture_url":"https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    "selling_points":["point 1","point 2"]
};

var album2 = {
    "id":4,
    "type": "album",
    "name":"A Moon-Shaped Pool",
    "author":"Radiohead",
    "price":12.95,
    "picture_url":"http://cdn.pitchfork.com/albums/23244/e3c43867.jpg",
    "selling_points":["point 1", "point 2", "point 3"]
};

var addToPage = function( productObject ){
    $( "#content-area" ).append( "<div id='" + productObject.type + productObject.id + "'></div>" );
    var $target = $( "#" + productObject.type + productObject.id );
    var $sellingPoints;
    var i = 0;

    $target.append( "<div class='name'>" + productObject.name + "</div>" );
    $target.append( "<div class='author'>" + productObject.author + "</div>" );
    $target.append( $( "<div class='picture_url'></div>").html( "<img src='" + productObject.picture_url + "'>" ) );
    $target.append( "<div class='price'>" + productObject.price + "</div>" );
    $target.append( "<div class='selling_points'></div>" );

    $sellingPoints = $target.find( ".selling_points" );

    while( i < productObject.selling_points.length ){
        $sellingPoints.append( "<li>" + productObject.selling_points[i] + "</li>");
        i++;
    }
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
    formObject.selling_points = [];
    data.forEach( function( field ){
        if( field.name === "selling_points" ){
            formObject.selling_points.push( field.value );
        } else{
            formObject[ field.name ] = field.value;
        }
    } );

    addToPage( formObject );
});
