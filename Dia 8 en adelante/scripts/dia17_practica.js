/*
const books = [
    { id: 1, title: "Clean Code", author: "Robert Martin", available: true },
    { id: 2, title: "JavaScript: The Good Parts", author: "Douglas Crockford", available: false },
    { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }
];

function traerTodosLosdDisponibles(inventory){
    if (inventory.available === true){
        for (const key in inventory) {
            console.log(`${key.title}`)
        }
    }
}

traerTodosLosdDisponibles(books)
*/


/*
function traerNombrePorId (id){

}
*/



// primero dar la vuelta a una palabra o frase
function daVuelta(palabra) {
  let resultado = "";
  for (let indice = palabra.length - 1; indice >= 0; indice--) {
    resultado = resultado + palabra[indice];
  }
  return resultado;
}
function sinEspacios(palabra) {
  let resultado = "";
  for (let index = 0; index <= palabra.length - 1; index++) {
    if (palabra[index] !== " ") {
      resultado = resultado + palabra[index];
    }
  }
  return resultado;
}
//segundo
let cliente = prompt("ingresa la palabra o frase");
let resultadoVuelta = daVuelta(cliente);
let kevin = sinEspacios(resultadoVuelta);
kevin = kevin.toLowerCase();
if ((cliente = kevin)) {
  console.log("la palabra es palindroma");
} else {
  console.log("la palabra no es palindroma :c");
}