// Put all of your jQuery and JavaScript in this document.

//Item Objects
var book1 = {
  id: 'book_1',
  name: 'The Count of Monte Cristo',
  price: '$18.44',
  category: 'Revenge',
  picture_url: 'http://myhero.com/images/guest/g39740/hero35269/g39740_u37232_Count_of_Monte_Cristo.jpg',
  selling_points: ['Grand old yarn of revenge', 'Written by a guy named Alex', 'Starring Jim Caveziel'],
  type: 'book'
};
var book2 = {
  id: 'book_2',
  name: 'Spice World: The Novelization',
  price: 'priceless',
  category: 'Girl Power',
  picture_url: 'http://ecx.images-amazon.com/images/I/91sm%2BCaAN6L._SL1500_.jpg',
  selling_points: ['Pinnacle of the written English word', 'Starring Victoria Beckham', 'Also starring some other gals'],
  type: 'book'
};
var book3 = {
  id: 'book_3',
  name: 'Moon People',
  price: '$0.02',
  category: 'Ironically Bad Sci-Fi',
  picture_url: 'http://litreactor.com/sites/default/files/images/column/2012/09/moon-people-cover.jpeg',
  selling_points: ['Nadir of the written English word', 'Best Amazon Reviews Ever', 'Seriously, check out the Amazon reviews.'],
  type: 'book'
};
var album1 = {
  id: 'album_1',
  name: 'Freedom of Choice',
  price: '$19.80',
  category: 'SynthPop',
  picture_url: 'http://assets.rollingstone.com/assets/images/album_review/09eeabdb3413f8a6b138ecd9edbcfbd4245b2e42.jpg',
  selling_points: ['You MUST whip it', 'Top-tier headgear', 'Best bass line ever'],
  type: 'music'
};
var album2 = {
  id: 'album_2',
  name: 'Everybody POLKA!',
  price: '$6.66',
  category: 'Progressive Melodic Death Metal',
  picture_url: 'http://www.simoneventmanagement.com/content/exhibiting/everybody%20polka.jpg',
  selling_points: ['Brutal Riffs', 'Gruesome lyrics', 'Songs about beer!'],
  type: 'music'
};
var lightsaber1 = {
  id: 'lightsaber_1',
  name: 'Mace Windu Saber',
  price: '1000 RC',
  category: 'Jedi Saber',
  picture_url: 'http://www.bladeseller.com/MasterReplicas/images/black/Mace%20lightsaber.jpg',
  selling_points: ['purple!','Samuel L. Jackson', 'Mix of Light and Dark Force Powers'],
  type: 'lightsaber'
};
var lightsaber2 = {
  id: 'lightsaber_2',
  name: 'Kylo Ren Claymore',
  price: '1000 NRC',
  category: 'Knight of Ren Saber',
  picture_url: 'https://i.ytimg.com/vi/LDm0EGNhWIo/hqdefault.jpg',
  selling_points: ['Hilt/Exhaust Ports','Now with MORE MENACING sound!', 'Might Explode at any moment'],
  type: 'lightsaber'
};

//category arrays
var books = [book1, book2, book3];
var music = [album1, album2];
var lightsabers = [lightsaber1, lightsaber2];
// var all = [].push(books).push(music).push(lightsabers);

//full products array
var products = {books, music, lightsabers};

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

//add_to_page function, with an object passed in as a parameter
var add_to_page = function (item_arr) {

  //extract item objects from the item_arr array of items, then continue with rest of function
  for(var j = 0; j < item_arr.length; j++ ){
    var item = item_arr[j];

    //set up jQuery for each object property
    var name = $('<div class="name">').html('<h3>'+item.name+'</h3>');
    var price = $('<div class="price">').html('<h4>'+item.price+'</h4>');
    var category = $('<div class="category">').html("<p>KEYWORDS: "+item.category+"</p>");
    var pic = $('<div class="pic">').html($('<img src="'+item.picture_url+'" alt="'+item.name+'">'));
    var sp = $('<div class="selling_points">').html($('<ul></ul>')).html(sp_lister(item.selling_points));

    //add all content to the page
    $('.content').append($('<div id="'+item.id+'">').html(pic).append(name).append(price).append(category).append(sp));
  }
};

//content function to show books or music
var content = function () {
  //remove existing content from the content div
  $('.content').empty();
  //set up items to show based on text content of each link
  var item = $(this).text();
  if(item === 'all'){
    for(var i in products){
      add_to_page(products[i]);
    }
  } else {
    add_to_page(products[item]);
  }
};

//construct dropdown menu from items in products array
var drop_lister = function (prod_obj) {
  var item_arr = Object.keys(prod_obj);
  //set up first element of list
  var list = '<li><a href="#">all</a></li>';
  //.append() subsequent elements from the list
  for(var i = 0; i < item_arr.length; i++){
    list += '<li><a href="#">'+item_arr[i]+'</a></li>';
  }
  //drop the list into the .drop class with jQuery
  $('.drop').children('ul').html(list);
};

drop_lister(products);

//Add click event handlers that show books or music
$('nav').on('click','a', content);
$('footer').on('click','a', content);

//add hover event handler for dropdown menu
$('.drop').hover(function(){
  $(this).children('ul').slideDown(300);
},function(argument){
  $(this).children('ul').slideUp(300);
});

//get list of all of the item names across all product lines
var name_scraper = function (obj) {
  var names = [];
  for(var i in obj){
    var type = obj[i];
    for(var j = 0; j < type.length; j++){
      names.push(type[j].name);
    }
  }
  return names;
};


//search functions
$('form').submit(function(){
    event.preventDefault();

    var input = $(this).children('input[type=text]').val();
    var names = name_scraper(products);
    var all = [];
    var all_scraper = function(obj){
      for(var type in obj){
          var arr = obj[type];
          for(var i = 0; i < arr.length; i++){
            all.push(arr[i]);
          }
      }
    };
    all_scraper(products);


    console.log(all);
    if(input !== ''){
      var target_arr = [];
      for(var i=0; i < names.length; i++){
        if(!!names[i].match(input)){
          var target_name = names[i];

          all.forEach(function(item){
            // console.log('Running on '+item.name);
            if(item.name === target_name){
              target_arr.push(item);
            }
          });
        }
      }
      add_to_page(target_arr)
    }

    $(this).children('input[type=text]').val('');
});
