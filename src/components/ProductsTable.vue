<template>
  <div>
    <h1>Listado de productos</h1>
    <table v-if="products.length">
      <thead>
        <tr>
          <td>Id</td>
          <td>Nombre</td>
          <td>Categoría</td>
          <td>Uds.</td>
          <td>Precio/u</td>
          <td>Importe</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        <product-item v-for="i in products" :key="i.id" :item="i"></product-item>
        <!--Fila de recuento de productos y importe total de estos:-->
        <tr>
          <td colspan="3"> Productos:</td>
          <td><strong> {{ totalProducts }} </strong></td>
          <td>Importe:</td>
          <td colspan="2"><strong> {{ totalAmount }}€ </strong></td>
        </tr>
      </tbody>
    </table>
    <p v-else>No hay productos que mostrar</p>
  </div>
</template>

<script>
import { store } from '../store/data.js'
import ProductItem from './ProductItem.vue';

export default {
  name: "products-table",
  components: {
    ProductItem
  },
  data() {
    return {
      products: store.state.products
    }
  },
  computed: {
    totalProducts() {
      return this.products.reduce((acc, i) => Number.parseFloat(acc += i.units), 0)
    },
    totalAmount() {
      // recursivo???
      return this.products.reduce((acc, i) => Number.parseFloat(acc += (i.price * i.units)), 0).toFixed(2)
    }
  }
}
</script>

<style>
  thead {
    font-weight: bold;
    text-transform: uppercase;
  }
</style>