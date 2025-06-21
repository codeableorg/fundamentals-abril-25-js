const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  showItems: () => {
    console.log(this.items);
  },
  mostrarItems: function () {
    // podemos acceder al this del objeto cart
    // this.items.forEach((item) => { console.log(item)});
  },
  b: () => {
    console.log(`this en metodo b: ${this}`);
  },

  /*
  showProductsArrow: () => {
    console.log(`arrow function: ${this.items}`)
  },
  showProductsExpression() {
    console.log(`express function: ${this.items}`)
  },
  showProductsForEach() {
    this.items.forEach((item) => { // arrow this de la funcion donde fue creada
      console.log(`arrow inside express function: ${item}`)
    })
  },
  addProductFail : (product) => {
    console.log(this.items)
    // this.items.push(product); // this.items is undefined

  }
    */
};

cart.addItem('taza');
cart.addItem('polo');
cart.showItems();
cart.mostrarItems();
// cart.b();
/*
cart.showProductsArrow();
cart.showProductsExpression();
cart.showProductsForEach();
cart.addProductFail('sticker');
*/