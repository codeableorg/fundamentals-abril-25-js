const productos = [
  { "id": "p1", "nombre": "Laptop Gamer GXT", "precio": 1500 },
  { "id": "p2", "nombre": "Laptop Profesional UX", "precio": 2000 },
  { "id": "p3", "nombre": "Laptop Ligera Zen", "precio": 1200 }
]

const resenas = {
    p1: [
      { usuario: "Ana", comentario: "Muy buena calidad y rendimiento." },
      { usuario: "Luis", comentario: "Perfecta para juegos exigentes." }
    ],
    p2: [
      { usuario: "Carlos", comentario: "Ideal para trabajar y programar." },
      { usuario: "Marta", comentario: "Diseño elegante y muy rápida." }
    ],
    p3: [
      { usuario: "Elena", comentario: "Liviana y fácil de transportar." },
      { usuario: "Jorge", comentario: "No es para tareas pesadas, pero cumple." }
    ]
  };

function buscarProducto(id, callback)  {
  setTimeout(()=> {
    const producto = productos.find(producto => producto.id === id)
    if (!producto) {
      const error = new Error('no se encontro el producto')
      callback(error)
      return;
    }
    if (producto) {
      callback(null, producto)
    }
  }, 2000)
}

function obtenerResenas(id, callback) {
  setTimeout(()=> {
    const resenasFiltradas = resenas[id]
    if (resenasFiltradas === undefined) {
      const error = new Error('no se encontraron resenas para el producto')
      callback(error)
      return;
    }
    callback(null, resenasFiltradas)
  }, 2000)
}

// solucion tarea 1
/*
buscarProducto('p1', (error, producto) => {
  if(error) {
    console.log(error.message)
    return
  }
  console.log(producto.nombre)
})

// solucion tarea 2
obtenerResenas('p1', (error, resenas) => {
  if (error) {
    console.log(error.message)
    return
  }

  // mostrar el contenido del array con los comentarios en consola
  console.log(resenas.map(resena => `${resena.usuario}: ${resena.comentario}`).join("\n"))
})
  */


// solucion tarea 3 
buscarProducto('p5', (error, producto) => {
  if(error) {
    console.log(error.message)
    return
  }
  console.log(producto.nombre)
  obtenerResenas(producto.id, (error, resenas) => {
    if (error) {
      console.log(error.message)
      return
    }

    // mostrar el contenido del array con los comentarios en consola
    console.log(resenas.map(resena => `${resena.usuario}: ${resena.comentario}`).join("\n"))
  })
 
})

