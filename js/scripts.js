// Put all of your jQuery and JavaScript in this document.

var numberOfPoints;


var book1 = {
    "id":1,
    "name": "JavaScript - The Good Parts",
    "author":"Dough Crawford",
    "price":12.00,
    "picture_url":"https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._SX381_BO1,204,203,200_.jpg",
    "selling_points":["Best javascript book of 2016","Great example code"]
};

var book2 = {
    "id":2,
    "name":"Exploring ReactJS",
    "author":"Edward Smith",
    "price":19.99,
    "picture_url":"http://reactkungfu.com/assets/images/rbe-cover.png",
    "selling_points":["Great book for beginners"]
};

var album1 = {
    "id":3,
    "name":"Nevermind",
    "author":"Nirvana",
    "price":15.00,
    "picture_url":"https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    "selling_points":["point 1","point 2"]
};

var album2 = {
    "id":4,
    "name":"A Moon-Shaped Pool",
    "author":"Radiohead",
    "price":12.95,
    "picture_url":"http://cdn.pitchfork.com/albums/23244/e3c43867.jpg",
    "selling_points":["point 1", "point 2", "point 3"]
};

var addToPage = function( productObject, targetId ){
    var $target = $( "#" + targetId );
    var $sellingPoints = $target.find( ".selling-points" );
    var i = 0;

    $target.find( ".name" ).text( productObject.name );
    $target.find( ".author" ).text( productObject.author );
    $target.find( ".picture_url").html( "<img src='" + productObject.picture_url + "'>" );
    $target.find( ".price" ).text( productObject.price );

    while( i < productObject.selling_points.length ){
        $sellingPoints.append( "<li>" + productObject.selling_points[i] + "</li>");
        i++;
    }
};

addToPage( book1, "book1" );
addToPage( book2, "book2" );
addToPage( album1, "album1" );
addToPage( album2, "album2" );
