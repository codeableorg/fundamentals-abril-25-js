/*
Ejercicio Promesas
-------------------
Tarea 1
Usar funcion asincrona “buscarProducto”

Tarea 2
Usar funcion asincrona “obtenerResenas”

Tarea 3
Usar funciones asincronas encadenadas

Nota: Prueben buscar p1 y p5
*/
const productos = [
  { id: "p1", nombre: "Laptop Gamer GXT", precio: 1500 },
  { id: "p2", nombre: "Laptop Profesional UX", precio: 2000 },
  { id: "p3", nombre: "Laptop Ligera Zen", precio: 1200 },
];

const resenas = {
  p1: [
    { usuario: "Ana", comentario: "Muy buena calidad y rendimiento." },
    { usuario: "Luis", comentario: "Perfecta para juegos exigentes." },
  ],
  p2: [
    { usuario: "Carlos", comentario: "Ideal para trabajar y programar." },
    { usuario: "Marta", comentario: "Diseño elegante y muy rápida." },
  ],
  p3: [
    { usuario: "Elena", comentario: "Liviana y fácil de transportar." },
    { usuario: "Jorge", comentario: "No es para tareas pesadas, pero cumple." },
  ],
};

function buscarProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((producto) => producto.id === id);
      if (!producto) {
        const error = new Error("no se encontro el producto");
        reject(error);
        return;
      }
      if (producto) {
        resolve(producto);
      }
    }, 2000);
  });
}

function obtenerResenas(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resenasFiltradas = resenas[id];
      if (resenasFiltradas === undefined) {
        const error = new Error("no se encontraron resenas para el producto");
        reject(error);
        return;
      }
      resolve(resenasFiltradas);
    }, 2000);
  });
}
