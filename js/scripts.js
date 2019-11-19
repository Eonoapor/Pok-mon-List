var pokemonRepository = (function () {
 var repository = [];

 var $pokemonList = document.querySelector('ul');
 var $modalContainer = document.querySelector('#modal-container');
 var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// for adding new Pokemon to var repository
 function add(pokemon){

    if (typeof pokemon !== 'object'){
      return 'Invalid entry'
    }else{
    repository.push(pokemon);
    }
  }

 function catchAll() { // Function for returning Pokemon object array
   return repository;
 }

 function search(searchName) {  // Function for searching repository
   repository.filter(function(pokemon) {
     if (pokemon.name === searchName) {
       return pokemon;
     }
  });
 }

 function addListItem(pokemon) { // Function for adding a list for every Pokemon
   var listItem = document.createElement('li');
   var button = document.createElement('button');

   button.innerText = pokemon.name; // For adding name to text within button

   button.classList.add('pokemon-name'); // For Adding CSS class to button

   listItem.appendChild(button); // For adding button element to 'li'

   $pokemonList.appendChild(listItem);//For adding 'li' to 'ul' with pokemonList class in index file

   button.addEventListener('click', function() { //For calling showDetails function when button is clicked

     showDetails(pokemon)
   });
 }

 function showDetails(pokemon) { //Function for displaying Pokemon details
   pokemonRepository.loadDetails(pokemon).then(function () {
     showModal(pokemon);
   });
 }


 function loadList() { // For loading Pokemon list from API
   return fetch(apiUrl).then(function (response) {
     return response.json();
   }).then(function (json) {
     json.results.forEach(function (item) {
       var pokemon = {
         name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
         detailsUrl: item.url
       };
       add(pokemon);
     });
   }).catch(function (e) {

     console.error(e);
   })
 }


 function loadDetails(item) { //For loading Pokemon details when clicked
   var url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();
   }).then(function (details) {

     // Inputing Pokemon information
     item.imageUrl = details.sprites.front_default;
     item.height = details.height;

     if (details.types.length == 2 ) {
			item.types = [details.types[0].type.name, details.types[1].type.name];
		} else {
			item.types = [details.types[0].type.name];
		}
   }).catch(function (e) {
     console.error(e);
   });
 }


 function showModal(item) { // For displaying Pokemon datat modal

   $modalContainer.innerHTML = '';

   var modal = document.createElement('div');
   modal.classList.add('modal');

   var closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   closeButtonElement.innerText = 'X EXIT';
   closeButtonElement.addEventListener('click', hideModal);

   var nameElement = document.createElement('h1');
   nameElement.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);

   var imageElement = document.createElement('img');
   imageElement.src = item.imageUrl;
   imageElement.classList.add('modal-img');

   var heightElement = document.createElement('p');
   heightElement.innerText = 'Height: ' + item.height + 'm';

   var typesElement = document.createElement('p');
   typesElement.innerText = 'Type(s): ' + item.types;

   modal.appendChild(closeButtonElement);
   modal.appendChild(nameElement);
   modal.appendChild(imageElement);
   modal.appendChild(heightElement);
   modal.appendChild(typesElement);
   $modalContainer.appendChild(modal);

   $modalContainer.classList.add('is-visible');
 }

 function hideModal() {
   $modalContainer.classList.remove('is-visible');
 }

 window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
       hideModal();
     }
   })

// Click outside of the modal to close the modal
$modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // I only want the modal to close if the user clicks directly on the overlay
  var target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
})

 return {
   add: add,
   catchAll: catchAll,
   addListItem: addListItem,
   search: search,
   showDetails: showDetails,
   loadList: loadList,
   loadDetails: loadDetails,
   showModal: showModal,
   hideModal: hideModal
 };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded
  pokemonRepository.catchAll().forEach(function(pokeList) {
    pokemonRepository.addListItem(pokeList);
  });
});
