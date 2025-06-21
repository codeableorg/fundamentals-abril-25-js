// version 1
function agregarIngredienteReceta(receta, ...ingredientes) {
  console.log(`Receta: ${receta}`);

  for (const ingrediente of ingredientes) {
    console.log(ingrediente);
  }
}

agregarIngredienteReceta(
  "Pastel de Chocolate",
  "Harina, Chocolate, Azúcar, Huevos"
);

// version 2

const pastelDeChocolate = {
  nombre: "Pastel de Chocolate",
  ingredientes: {
    harina: "250 gr",
    chocolate: "100 gr",
    azucar: "30 gr",
    huevos: "6",
  },
};

const superPasteDeChocolate = {
  nombre: "Super Pastel De Chocolate",
  ingredientes: {
    ...pastelDeChocolate.ingredientes , 
    vainilla : "1 cucharadita"
  }
}

console.log(superPasteDeChocolate)