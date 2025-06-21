function creadorDeFrase(saludoODespedida) {
  if (saludoODespedida === "saludo") {
    return function (nombre) {
      console.log(`Hola ${nombre}`);
    };
  } else if (saludoODespedida === "despedida") {
    return function (nombre) {
      console.log(`Chau ${nombre}`);
    };
  }
}

let saluda = creadorDeFrase("saludo");
let despide = creadorDeFrase("despedida");

saluda("Juan"); // Imprime "Hola Juan"
saluda("Maria"); // Imprime "Hola Maria"

despide("Miguel"); // Imprime "Chau Migue"
despide("Alejandra"); // Imprime "Chau Alejandra"
