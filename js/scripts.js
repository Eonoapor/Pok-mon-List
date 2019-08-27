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
  ]
repository.forEach (function(repository) {
    document.write(repository.name + "(" )
    document.write("Height:" + repository.height +",")
    document.write("Type:" + repository.type + ",")
    document.write("Weight:" + repository.weight + ")" + "<br><br>")
    if (repository ===1.7) {
      document.write("Wow, that's big!")
    }
});
