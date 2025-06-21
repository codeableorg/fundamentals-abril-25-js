/* 
// ejercicio 1

function agregarComidaRapida(array) {
  array.unshift("🍕");
  array.push("🍔")
  return array
}

console.log(agregarComidaRapida(["🌭", "🍟"])); // ["🍕", "🌭", "🍟", "🍔"]

// ejercicio 2
function obtenerPrimerosTres(array) {
  return array.slice(0, 3)
}
 
console.log(obtenerPrimerosTres(["a", "b", "c", "d", "e"])); // ["a", "b", "c"]

// ejercicio 3
function encontrarPrimerPar(array) {
  return array.find(n => n % 2 === 0);
}
 
console.log(encontrarPrimerPar([7, 9, 12, 15, 20])); // 12

// ejercicio 4
function filtrarMayoresQue(array, num) {
  return array.filter(elemento => elemento > num)
}
 
const itemsMayoresQue10 = filtrarMayoresQue([5, 12, 18, 3, 20], 10);
console.log(itemsMayoresQue10) // [12, 18, 20]

// ejercicio 5

function generarListaHtml(nombres) {
  const cadena = nombres.map(nombre => "<li>" + nombre + "</li>")
  return "<ul>" + cadena.join("") + "</ul>"

}
 
console.log(generarListaHtml(["Ana", "Luis", "Carlos", "María"]));
// "<ul><li>Ana</li><li>Luis</li><li>Carlos</li><li>María</li></ul>"

// ejercicio 6
function sumarElementos(array) {
  return array.reduce((acc, elemento) => acc + elemento, 0)
}
 
console.log(sumarElementos([4, 7, 10, 25])); // 46

function ordenarDescendente(array) {
  return array.sort((a, b) => b - a)
}
 
console.log(ordenarDescendente([50, 10, 30, 5, 80, 1])); // [80, 50, 30, 10, 5, 1]

// ejercicio 8
function contarNombres(array) {
  const nombres = {}
  array.forEach(nombre => nombres[nombre]  = nombres[nombre] ? nombres[nombre] + 1 : 1 )
  return nombres
}
 
console.log(contarNombres(["Ana", "Luis", "Ana", "Carlos", "Luis", "Ana"]));
// { Ana: 3, Luis: 2, Carlos: 1 }

// ejercicio 9
function encontrarPalabraMasLarga(array) {
  return array.reduce((acc, palabra) => palabra.length > acc.length ? palabra : acc,  "")
}
 
console.log(encontrarPalabraMasLarga(["elefante", "gato", "mariposa", "tigredebengala"])); // "elefante"
*/