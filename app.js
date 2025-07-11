/*
Take note of the shape of the data here. Each Pokemon object in the array has the following properties:

Number: A number between 1 and 151.
Name: A string representing the Pokémon's name.
Type: A string indicating the Pokémon's type.
HP (Hit Points): A numerical value representing the Pokémon's health.
Starter: A boolean indicating whether the Pokémon is a starter.

The starter Pokémon options are:

Pokémon 1: Bulbasaur n1
Pokémon 4: Charmander n4 
Pokémon 7: Squirtle n7
Pokémon 25: Pikachu n25


*/
// Exercise 1
const pokemon = require('./data.js')
const game = {
  difficulty: ['Hard'],
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  collection: []
}
// console.dir(pokemon, { maxArrayLength: null })
console.log('---------------------------------------------');
console.log('Exercise 1 was commented out as console.dir(pokemon, { maxArrayLength: null })')
// Exercise 2
console.log('Exercise 2')
console.log(game)
// Exercise 3
game.difficulty = 'Hard'
// yes I know this code is ^ the correct way to add it but I wanted the difficulty
// to be printed first for cosmetic reasons
console.log('Exercise 3')
console.log(game);
console.log('---------------------------------------------');
console.log('Exercise 4')
console.log(`I select ${pokemon[3].name}!`);
game.party.push(pokemon[3]); 
console.log(game.party)
console.log('---------------------------------------------');
console.log('Exercise 5')
game.party.push(pokemon[79],pokemon[142],pokemon[112]);
console.log(game.party)
console.log('---------------------------------------------');
console.log('Exercise 6')
 completeEzGym = () => {
  game.gyms.forEach(gym => {
    gym.completed = gym.difficulty < 3
    })
    return game.gyms
  }
completeEzGym()
// or
//  game.gyms[0].completed = true
//  game.gyms[1].completed = true
//  game.gyms[2].completed = true
console.log(game.gyms)
console.log('---------------------------------------------');
console.log('Exercise 7')
game.party.splice(0, 1,pokemon[4]);
console.log(game)
console.log('---------------------------------------------');
console.log('Exercise 8')
game.party.forEach(poke =>{
  console.log(poke.name)
})
console.log('---------------------------------------------');
console.log('Exercise 9')
const starterPokemon = () => {
  pokemon.forEach(poke => {
    if (poke.starter) {
      console.log(poke.name);
    }
  })
}

starterPokemon()

console.log('---------------------------------------------');
console.log('Exercise 10')
game.catchPokemon = function catchaPokemon(pokemonObj){
  this.party.push(pokemonObj)
  this.items[1].quantity--   //<-- this was added exercise 11 
  console.log('You have caught a pokemon!');
  console.log(game.party)
}
game.catchPokemon.description = 'Catches a pokemon and uses a pokeball!'
console.log(game.items)
game.catchPokemon(pokemon[88])
console.log('---------------------------------------------');
console.log('Exercise 11')
// game.catchPokemon = function(pokemonObj){
//   this.party.push(pokemonObj)
//   this.items[1].quantity--
// }
console.log(game.items)
console.log('---------------------------------------------');
console.log('Exercise 12')
 completeMdGym = () => {
  game.gyms.forEach(gym => {
  gym.completed = gym.difficulty < 6
  })
  return game.gyms
  }
completeMdGym()
console.log(game.gyms)
console.log('---------------------------------------------');
console.log('Exercise 13')
game.gymStatus = function gymsCompletedVsIncompleted(){
  const gymTally = { completed: 0, incomplete: 0 }
  this.gyms.forEach(gym => {
    gym.completed ? gymTally.completed++ : gymTally.incomplete++;
  })
  console.log(gymTally)
}
game.gymStatus.description = "Checks the amount of gym's completed vs uncompleted and returns the number"
game.gymStatus()
console.log('---------------------------------------------');
console.log('Exercise 14')
game.partyCount = function partyCount(countpartymembers) {
  return this.party.length;
}
game.partyCount.description = 'Counts the number of pokemon that are within the party' 
console.log(`The amount of pokemon that are currently in the party is ${game.partyCount()}`)
console.log('---------------------------------------------');
console.log('Exercise 15')
 completeHdGym = () => {
    game.gyms.forEach(gym => {
      gym.completed = gym.difficulty < 8
    })
    return game.gyms
  }
completeHdGym()
console.log('---------------------------------------------');
console.log('Exercise 16')
console.log(game)
console.log('---------------------------------------------');
console.log('Exercise 17')
console.log('before');
console.log(game.party)
console.log('<-------------------------------------->'); //
game.party.sort((a, b) => b.hp - a.hp);
console.log(game.party)
console.log('after');
console.log('---------------------------------------------');
console.log('Exercise 18')
game.catchPokemon = function(pokemonObj){
  this.items[1].quantity--
  if (this.party.length < 6){
    this.party.push(pokemonObj)
    console.log(`You have caught ${pokemonObj.name}`);
    console.log('pokeballs left:',this.items[1].quantity)
  }else{
    this.collection.push(pokemonObj)
    console.log(`You have caught  ${pokemonObj.name} it has been added to your collection.`);
    console.log('pokeballs left:',this.items[1].quantity)
    }
    
  console.log(game.party)
}
game.catchPokemon(pokemon[97])
console.log('---------------------------------------------');
console.log('Exercise 19')
game.catchPokemon = function(pokemonObj){
  const pokeBall = this.items.find(item => item.name === 'pokeball')
  if (pokeBall.quantity <= 0){
    console.log('You are out of pokeballs!')
  }
  this.items[1].quantity--
  if (this.party.length < 6){
    this.party.push(pokemonObj)
    console.log(`You have caught ${pokemonObj.name}`);
    console.log('pokeballs left:',this.items[1].quantity)
  }else{
    this.collection.push(pokemonObj)
    console.log(`You have caught  ${pokemonObj.name} it has been added to your collection.`);
    console.log('pokeballs left:',this.items[1].quantity)
    }
    
  console.log(game.party)
}
console.log('---------------------------------------------');
console.log('Exercise 20')
game.catchPokemon = function(pokemonObj){
  const pokeBall = this.items.find(item => item.name === 'pokeball')
  if (pokeBall.quantity <= 0){
    console.log('You are out of pokeballs!')
    return
  }
  pokeBall.quantity--
  if (this.party.length < 6){
    this.party.push(pokemonObj)
    console.log(`You have caught ${pokemonObj.name}`);
    console.log('pokeballs left:',pokeBall.quantity)
  }else{
    this.collection.push(pokemonObj)
    console.log(`You have caught  ${pokemonObj.name} it has been added to your collection.`);
    console.log('pokeballs left:',pokeBall.quantity)
    }
    
  console.log(game.party)
}
console.log('---------------------------------------------');
console.log('Exercise 21')
const groupedPokemonByType = {}
pokemon.forEach(poke => {
  const type = poke.type
  if (!groupedPokemonByType[type]) {
    groupedPokemonByType[type] = []
  }
  groupedPokemonByType[type].push(poke)
});
console.log(groupedPokemonByType)
console.log('---------------------------------------------');

