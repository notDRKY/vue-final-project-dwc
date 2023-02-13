import axios from 'axios';
import { reactive } from 'vue';

const url = 'http://localhost:3000';

const instance = axios.create({
  baseURL: url,
});

export const store = {
  state: reactive({
    products: [],
    categories: [],
  }),
  async loadData() {
    return Promise.all([instance.get('/products'), instance.get('/categories')])
      .then((responses) => {
        const products = responses[0].data;
        const categories = responses[1].data;

        this.state.products = products;
        this.state.categories = categories;

        return { products: products, categories: categories };
      })
      .catch((ex) => {
        if (!ex.status) {
          alert('Error: el servidor no responde');
        } else {
          alert('Error ' + ex.status + ': ' + ex.message);
        }
      });
  },
  addProductAction(newName, newCategory, newUnits, newPrice) {
    let maxId = this.state.products.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    instance
      .post(`/products`, {
        id: maxId + 1,
        name: newName,
        category: newCategory,
        units: newUnits,
        price: newPrice,
      })
      .then(() => {
        this.state.products.push({
          id: maxId + 1,
          name: newName,
          category: newCategory,
          units: newUnits,
          price: newPrice,
        });
      })
      .catch((ex) => {
        if (!ex.status) {
          alert(
            'Error: el servidor no responde, no se ha podido agregar el registro.'
          );
        } else {
          alert('Error ' + ex.status + ': ' + ex.message);
        }
      });
  },
  deleteProductAction(id) {
    let index = this.state.products.findIndex((i) => i.id === id);
    if (index !== -1) {
      instance
        .delete(`products/${id}`)
        .then(() => {
          this.state.products.splice(index, 1);
        })
        .catch((ex) => {
          if (!ex.status) {
            alert(
              'Error: el servidor no responde, no se ha podido borrar el registro.'
            );
          } else {
            alert('Error ' + ex.status + ': ' + ex.message);
          }
        });
    }
  },
  incrementProductUnitAction(id) {
    const product = this.state.products.find((i) => i.id === id);
    instance
      .put(`/products/${product.id}`, {
        id: product.id,
        name: product.name,
        category: product.category,
        units: product.units + 1,
        price: product.price,
      })
      .then(() => {
        product.units += 1;
      })
      .catch((ex) => {
        if (!ex.status) {
          alert('Error: el servidor no responde');
        } else {
          alert('Error ' + ex.status + ': ' + ex.message);
        }
      });
  },
  decreaseProductUnitAction(id) {
    const product = this.state.products.find((i) => i.id === id);
    if (product.units > 0) {
      instance
        .put(`/products/${product.id}`, {
          id: product.id,
          name: product.name,
          category: product.category,
          units: product.units - 1,
          price: product.price,
        })
        .then(() => {
          product.units -= 1;
        })
        .catch((ex) => {
          if (!ex.status) {
            alert('Error: el servidor no responde');
          } else {
            alert('Error ' + ex.status + ': ' + ex.message);
          }
        });
    }
  },
};
