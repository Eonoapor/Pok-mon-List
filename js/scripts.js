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
repository.forEach((array)=>{
 document.write('Name: '+ array.name +'<br>','Height: ' +array.height+'<br>',
 'Type: ' + array.type +'<br>', 'Weight: '+array.weight+'<br>'+'<br>' ) 
})
