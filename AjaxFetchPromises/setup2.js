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
        response.json().then((json_data) => {
            addPokemonToList(json_data.id, json_data.name, json_data.sprites.front_default);
            if(json_data.id < 151) {
                getPokemon(json_data.id + 1);
            }
        });
    });
}

var base_url = 'https://pokeapi.co/api/v2/';

//Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    //Add the 25 pokemon
    // for(var i = 1; i <= 25; i++) {
    //     getPokemon(i);
    // }
    getPokemon(1);
});