import axios from 'axios';

const url = 'http://localhost:3000';

const instance = axios.create({
  baseURL: url,
});

export const store = {
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
      await Promise.all(
        instance.post(`/products`, {
          id: maxId + 1,
          name: newName,
          category: newCategory,
          units: newUnits,
          price: newPrice,
        })
      );
    } catch (ex) {
      if (!ex.status) {
        alert('Error: el servidor no responde');
      } else {
        alert('Error ' + ex.status + ': ' + ex.message);
      }
    }
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
  },
};
