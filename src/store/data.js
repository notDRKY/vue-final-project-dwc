import { reactive } from "vue";

export const store = {
  debug: false,
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
        name: "Informática"
      },
      {
        id: 2,
        name: "Cocina"
      },
      {
        id: 2,
        name: "Medicina"
      }
    ])
  }
}