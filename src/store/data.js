import { reactive } from "vue";
//import axios from 'axios';

export const store = {
  state: {
    products: reactive([
      {
        id: 2,
        name: "Silla de ordenador",
        category: 1,
        units: 4,
        price: 145.95
      },
      {
        id: 3,
        name: "Mesa de impresora",
        category: 1,
        units: 0,
        price: 45.95
      },
      {
        id: 1,
        name: "Mesa de ordenador",
        category: 1,
        units: 3,
        price: 125.95
      }
    ]),
    categories: reactive([
      {
        id: 1,
        name: "Informática",
        description: "Descripción"
      },
      {
        id: 2,
        name: "Cocina",
        description: "Descripción"
      },
      {
        id: 2,
        name: "Medicina",
        description: "Descripción"
      }
    ])
  },
  addProductAction(newName, newCategory,newUnits, newPrice) {
    let maxId = this.state.todos.reduce(
      (max, item) => (item.id > max ? item.id : max), 0
    );
    this.state.products.push({
      id: maxId + 1,
      name: newName,
      category: newCategory,
      units: newUnits,
      price: newPrice
    });
  }
}