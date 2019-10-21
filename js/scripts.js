
var $pokemonList = document.querySelector('ul');

var pokemonRepository = (function ()
    {
    var repository = [
    {
      name: 'Bulbasaur',       //The first Pokemon
      height: 0.7,
      type: ['grass', 'poison'],
      weight: 6.9
  },
  {
      name: 'Electrode',       //The second Pokemon
      height: 1.7 ,
      type: ['electric'],
      weight: 7.6
  },
  {
      name: 'Machoke',         //The third Pokemon
      height: 0.5,
      type: ['fighting'],
      weight: 6.5
  }
];

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
  }

  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
