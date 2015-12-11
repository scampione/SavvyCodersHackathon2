// Put all of your jQuery and JavaScript in this document.

//Item Objects
var book1 = {
  id: 'book_1',
  name: 'The Count of Monte Cristo',
  category: 'Revenge',
  picture_url: 'http://myhero.com/images/guest/g39740/hero35269/g39740_u37232_Count_of_Monte_Cristo.jpg',
  selling_points: ['Grand old yarn of revenge', 'Written by a guy named Alex', 'Starring Jim Caveziel'],
  type: 'book'
};
var book2 = {
  id: 'book_2',
  name: 'Spice World: The Novelization',
  category: 'Girl Power',
  picture_url: 'http://ecx.images-amazon.com/images/I/91sm%2BCaAN6L._SL1500_.jpg',
  selling_points: ['Pinnacle of the written English word', 'Starring Victoria Beckham', 'Also starring some other gals'],
  type: 'book'
};
var album1 = {
  id: 'album_1',
  name: 'Freedom of Choice',
  category: 'SynthPop',
  picture_url: 'http://assets.rollingstone.com/assets/images/album_review/09eeabdb3413f8a6b138ecd9edbcfbd4245b2e42.jpg',
  selling_points: ['You MUST whip it', 'Top-tier headgear', 'Best bass line ever'],
  type: 'music'
};
var album2 = {
  id: 'album_2',
  name: 'Everybody POLKA!',
  category: 'Progressive Melodic Death Metal',
  picture_url: 'http://www.simoneventmanagement.com/content/exhibiting/everybody%20polka.jpg',
  selling_points: ['Brutal Riffs', 'Gruesome lyrics', 'Songs about beer!'],
  type: 'music'
};

//category arrays
var books = [book1, book2];
var music = [album1, album2];

//full products array
var products = [books, music];

//add_to_page function, with an object passed in as a parameter
var add_to_page = function (item_arr) {
  for(var j = 0; j < item_arr.length; j++ ){
    //extract item objects from the item_arr array of items
    var item = item_arr[j];
    //create function that takes an array and returns a set of HTML list objects through jQuery
    var sp_lister = function(array) {
      //set up first element of list
      var list = $('<li>'+array[0]+'</li>');
      //.append() subsequent elements from the list
      for(var i = 1; i < array.length; i++){
        list = list.append($('<li>'+array[i]+'</li>'));
      }
      //return the full jQuery command
      return list;
    };

    //set up jQuery for each object property
    var name = $('<div class="name">').text(item.name);
    var category = $('<div class="category">').text(item.category);
    var pic = $('<div class="pic">').html($('<img src="'+item.picture_url+'" alt="'+item.name+'">'));
    var sp = $('<div class="selling_points">').html($('<ul></ul>')).html(sp_lister(item.selling_points));

    //add all content to the page
    $('.content').append($('<div id="'+item.id+'">').html(name).append(category).append(pic).append(sp));
  }
};

//create function to show books or music
var content = function () {
  //remove existing content from the content div
  $('.content').empty();
  //set up items to show based on text content of each link
  if($(this).text() === 'books'){
    add_to_page(books)
  } else if ($(this).text() === 'music') {
    add_to_page(music);
  } else if ($(this).text() === 'all' || 'HOME'){
    add_to_page(books);
    add_to_page(music);
  }
}

//Add click event handlers that show books or music
$('nav').on('click','a', content);
$('footer').on('click','a', content);
