import { reactive } from 'vue';

export const store = {
  state: {
    products: reactive([
      {
        id: 2,
        name: 'Computer chair',
        category: 1,
        units: 4,
        price: 145.95,
      },
      {
        id: 3,
        name: 'Printer',
        category: 1,
        units: 0,
        price: 65.95,
      },
      {
        id: 1,
        name: 'Computer desk',
        category: 1,
        units: 3,
        price: 125.95,
      },
    ]),
    categories: reactive([
      {
        id: 1,
        name: 'Computing',
        description: 'Descripción',
      },
      {
        id: 2,
        name: 'Kitchenware',
        description: 'Descripción',
      },
      {
        id: 2,
        name: 'Medicine',
        description: 'Descripción',
      },
    ]),
  },
  addProductAction(newName, newCategory, newUnits, newPrice) {
    let maxId = this.state.products.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    this.state.products.push({
      id: maxId + 1,
      name: newName,
      category: newCategory,
      units: newUnits,
      price: newPrice,
    });
  },
  deleteProductAction(id) {
    let index = this.state.products.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.state.products.splice(index, 1);
    }
  },
  incrementProductUnitAction(id) {
    let product = this.state.products.find((i) => i.id === id);
    product.units += 1;
  },
  decreaseProductUnitAction(id) {
    let product = this.state.products.find((i) => i.id === id);
    if (product.units > 0) {
      product.units -= 1;
    }
  }
};
