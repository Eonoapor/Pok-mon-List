
var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function(){
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //Array removed and replaced with external data source

function add(pokemon){
  function add(pokemon){

    if (typeof pokemon !== 'object'){
      return 'Invalid entry'
    }else{
    repository.push(pokemon);
    }
  }

  function getAll(){
    return repository;
  }

  function addListItem(pokemon){
    var listItem = document.createElement('li');
    var button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('new-style');
    listItem.appendChild(button);
    $pokemonList.appendChild(listItem)
    button.addEventListener('click', function (){
      showDetails(pokemon)
    })
  }

  function showDetails(pokemon){
    console.log(pokemon)
    pokemonRepository.loadDetails(pokemon).then(function(){//to get Pokémon details using URL from Pokémon object in parameter
    });
  function loadList(){ //Fuction as a return key
    return fetch(apiUrl).then(function(response){ //fetch for complete list of pokemon
      return response.json();
    }).then(function(json){ //returning a JSON response
      json.results.forEach(function(pokemon){
        var pokemon = {
          name: pokemon.name, //key
          detailsUrl: pokemon.url //key
        };
        add(pokemon); // for adding Pokémon from results to repository variable
      });
    }).catch(function(error){
      console.error(error);
    })
  }
  function loadDetails(pokemon){
    var url = pokemon.detailsUrl;
    return fetch(url).then(function(response){
    }).then(function(details){ //Assigning some details from response to object in repository
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = Object.keys(details.types);
    }).catch(function(error){
      console.error(error);
    })
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
    //showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() { //Calling loadList function

pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon); //calling the addListItem function
  });
});
