var pokemonRepository = (function() {       // pokemon array goes in IIFE
  var repository = [
  {
      name: 'Bulbasaur',       //The first Pokemon
      height: 0.7,
      type:['grass', 'poison'],
      weight:6.9
  },
  {
      name:'Electrode',       //The second Pokemon
      height:1.7 ,
      type:['electric'],
      weight:7.6
  },
  {
      name:'Machoke',         //The third Pokemon
      height:0.5,
      type: ['fighting'],
      weight:6.5
  }
  ];

  function add(pokemon) {
    repository.push (pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
}) ();

pokemonRepository.add ({ name: 'Charizard', height:2.10, type: ["Fire", "Flying"], weight:9.5});
document.write('Name: '+ pokemonRepository.name +'<br>','Height: ' +pokemonRepository.height+'<br>',
 'Type: ' + pokemonRepository.type +'<br>', 'Weight: '+pokemonRepository.weight+'<br>'+'<br>');
