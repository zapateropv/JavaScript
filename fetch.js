/* fetch = function used for making HTTP requests to fetch resources
           (JSON style data, images,  files)
           Simplifies asynchronous data fetching in JavaScript and used
           for interactivity with APIs to retrive and send data 
           asynchronously over the web

           fetch(url, {options})

*/


async function pokemonFetch (){


try{
const input  = document.getElementById('myInput').value.toLowerCase();
const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)

if(!api.ok){
    throw new Error('COULDNT FETCH DATA')
}
else{

const data = await api.json()
console.log(data)
const pokemonImage = data.sprites.front_default;



const image1 = document.getElementById('myImg')
image1.src = pokemonImage

image1.style.display = 'block'
}

}

catch(error){
    window.alert(error)
}





}