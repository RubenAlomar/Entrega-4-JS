const buscarPokemon = async() => {
  const input = document.getElementById('input');
  const pokemon = input.value.toLowerCase();
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await res.json();
    console.log(data)
    const html = 
    `<p styles="display.flex; justify-content:center; align-items:center;">
    <img src="${data.sprites.front_default}">
    </p>
    <p>
    Nombre: ${data.name}</p>
    <p>Habilidades: ${data.abilities}</p>
    <p>Altura: ${data.height /10} mts</p>
    <p>Peso: ${data.weight /10} kg</p>
    <p>Tipo: ${data.types.name} 
    </p>`
    div.innerHTML= html;
  } catch(error){
    console.log(error)
  }
}

//agregar evento al boton
const btn = document.getElementById('btn');
btn.addEventListener('click', buscarPokemon);