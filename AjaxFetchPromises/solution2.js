/*TODO:
 - Use a for loop and fetch() to get the first 25 pokemon from the pokeapi
 - https://pokeapi.co/
 - Once the pokemon appear, get them in order!
*/

function addPokemonToList(id, name, sprite) {
    var listItem = document.createElement('li');
	var nameSpan = document.createElement('span');
	nameSpan.textContent = '#' + id + ': ' + name;
    var spriteImg = document.createElement('img');
	spriteImg.src = sprite;
	listItem.appendChild(nameSpan);
	listItem.appendChild(spriteImg);
    document.getElementById('pokemon_list').appendChild(listItem);
}

function getPokemon(pokedexNumber) {
	fetch(base_url + 'pokemon/' + pokedexNumber).then((response) => {
		response.json().then((pokemon_json) => {
			addPokemonToList(pokemon_json.id, pokemon_json.name, pokemon_json.sprites.front_default);
			if(pokemon_json.id < 25) {
				getPokemon(pokemon_json.id + 1);
			}
		});
	});
}

var base_url = 'https://pokeapi.co/api/v2/';

//Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    //Add the 25 pokemon
	getPokemon(1);
});