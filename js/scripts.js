// Put all of your jQuery and JavaScript in this document.

var book1 = {
  id: 'book_1',
  name: 'The Count of Monte Cristo',
  category: 'Revenge',
  picture_url: 'http://myhero.com/images/guest/g39740/hero35269/g39740_u37232_Count_of_Monte_Cristo.jpg',
  selling_points: ['Grand old yarn of revenge', 'Written by a guy named Alex', 'Starring Jim Caveziel']
};
var book2 = {
  id: 'book_2',
  name: 'Spice World: The Novelization',
  category: 'Girl Power',
  picture_url: 'http://ecx.images-amazon.com/images/I/91sm%2BCaAN6L._SL1500_.jpg',
  selling_points: ['Pinnacle of the written English word', 'Starring Victoria Beckham', 'Also starring some other gals']
};
var album1 = {
  id: 'album_1',
  name: 'Freedom of Choice',
  category: 'SynthPop',
  picture_url: 'http://assets.rollingstone.com/assets/images/album_review/09eeabdb3413f8a6b138ecd9edbcfbd4245b2e42.jpg',
  selling_points: ['You MUST whip it', 'Top-tier headgear', 'Best bass line ever']
};
var album2 = {
  id: 'album_2',
  name: 'Everybody POLKA!',
  category: 'Progressive Melodic Death Metal',
  picture_url: 'http://www.simoneventmanagement.com/content/exhibiting/everybody%20polka.jpg',
  selling_points: ['Brutal Riffs', 'Gruesome lyrics', 'Songs about beer!']
};


$('.content').append($('<div id="book1">').html($('<div class="name">')).text(book1.name));
