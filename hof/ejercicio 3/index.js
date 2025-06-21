/* Ejm de Funcion de Orden Superior (HOF)

crear una funcion de orden superior cree funciones que modifiquen el valor de un contador. se llamara: generadorFuncionContador
las funciones pueden incrementar o decrementar el contador, segun un valor especifico

incrementarPorUno()
incrementarPorDos()
incrementarPorDiez()
decrementarPorUno()
decrementarPorDos()

*/
const CONTADOR_INICIAL = 10;
let contador = CONTADOR_INICIAL; // valor que cambie en el tiempo : datos o estado

function generadorFuncionContador (valor) { // HOF
  const nuevaFuncion = function () {
    contador = contador + valor;
  }
  return nuevaFuncion // que estoy devolviendo? una funcion
}

const incrementarPorUno = generadorFuncionContador (1);
const incrementarPorDos = generadorFuncionContador (2);
const decrementarPorUno = generadorFuncionContador (-1);
const decrementarPorDos = generadorFuncionContador (-2);
const incrementarPorDiez = generadorFuncionContador (10);

console.log(contador);
incrementarPorUno();
incrementarPorDos();
decrementarPorUno();
decrementarPorDos();
incrementarPorDiez();
console.log(contador);

function hola1 () {
  return "hola"
}

const hola2 = function () {
  return "hola"
}

hola1()
hola2()


                                                    
                                                    

