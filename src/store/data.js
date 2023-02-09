import axios from 'axios';
import { reactive } from 'vue';

const url = 'http://localhost:3000';

const instance = axios.create({
  baseURL: url,
});

export const store = {
  state: {
    products: reactive([]),
    categories: reactive([]),
  },
  async loadData() {
    try {
      const [{ data: products }, { data: categories }] = await Promise.all([
        instance.get(`/products`),
        instance.get(`/categories`),
      ]);

      this.products = products;
      this.categories = categories;

      return { products, categories };
    } catch (ex) {
      if (!ex.status) {
        alert('Error: el servidor no responde');
      } else {
        alert('Error ' + ex.status + ': ' + ex.message);
      }
    }
  },
  async addProductAction(newName, newCategory, newUnits, newPrice) {
    let maxId = this.products.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );

    try {
      await instance.post(`/products`, {
        id: maxId + 1,
        name: newName,
        category: newCategory,
        units: newUnits,
        price: newPrice,
      });
      console.log('Actualizado serv');

      this.products.push({
        id: maxId + 1,
        name: newName,
        category: newCategory,
        units: newUnits,
        price: newPrice,
      });
      console.log('Actualizado local');
    } catch (ex) {
      if (!ex.status) {
        alert('Error: el servidor no responde');
      } else {
        alert('Error ' + ex.status + ': ' + ex.message);
      }
    }
  },
  async deleteProductAction(id) {
    let index = this.state.products.findIndex((i) => i.id === id);
    if (index !== -1) {
      try {
        await instance.delete(`products/${id}`);
        this.state.products.splice(index, 1);
      }  catch (ex) {
        if (!ex.status) {
          alert('Error: el servidor no responde, no se ha podido borrar el registro');
        } else {
          alert('Error ' + ex.status + ': ' + ex.message);
        }
      }
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
  },
};
