var repository = [
  {
    name: 'Bulbasaur',       //The first Pokemon
    height: 0.7,
    type:['grass', 'poison'],
    weight:6.9
  },
    {
    name:'Electrode',       //The second Pokemon
    height:1.7,
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
for (var i=0; i< repository.length; i++){
  document.write( "Name: " + repository.name + " Height: " + repository.height + "Type: " + repository.type + "Weight: " + repository.weight);
}
  if (repository.height === 1.7) {
    document.write( "Electrode (height:1.7)- Wow, that's big ");
  }else if (repository.height === 0){
    document.write( 'Normal size' );
  }
