/*
Crea una función de orden superior llamada ejecutarTresVeces. 
Esta función debe recibir una función como argumento (cualquier función) y ejecutarla tres veces.

Coding Time! 🔥
*/

// ejecutarTresVeces es : funcion de order superior 
function ejecutarTresVeces(unaFuncion) {
  // completar codigo de ejecutarTresVeces
  // bucle for / while
  for (let i = 0 ; i < 3; i++) {
    unaFuncion();
  }

}

/*
i = 0 => 0 < 3 === true
i = 1 => 1 < 3 === true
i = 2 => 2 < 3 === true
i = 3 => 3 < 3 === false


*/

// hola es : funcion callback
function hola() {
  console.log("hola");
}

ejecutarTresVeces(hola);
