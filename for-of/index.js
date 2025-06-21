const productos = {
    taza : {
        nombre : "taza",
        descripcion : "tazas para programadores de diferentes modelos",
        precio : 5
    },
    polo: {
        nombre : "polo",
        descripcion : "polos de diferentes modelos y tamanos",
        precio: 15
    }
};

for (const producto in productos) {
  console.log(`Datos de ${producto}:` )
    for (const nombrecito in productos[producto]) {
        console.log(`${nombrecito} :${productos[producto][nombrecito]}`);
    }
};

// 
// Object.keys(productos)

productos.taza
productos.polo