<template>
  <div>
    <h1>Listado de productos</h1>
    <table v-if="products.length" class="table table-striped">
      <thead class="table-dark">
        <tr>
          <td class="text-center">Id</td>
          <td class="text-center">Nombre</td>
          <td class="text-center">Categoría</td>
          <td class="text-center">Uds.</td>
          <td class="text-center">Precio/u</td>
          <td class="text-center">Importe</td>
          <td class="text-center">Acciones</td>
        </tr>
      </thead>
      <tbody>
        <product-item v-for="i in products" :key="i.id" :item="i"></product-item>
        <!--Fila de recuento de productos y importe total de estos:-->
        <tr>
          <!--Las etiquetas <td> vacías son por fines estéticos cuando se muestre la tabla-->
          <td>Productos:</td>
          <td></td>
          <td></td>
          <td>{{ totalProducts }}</td>
          <td>Importe:</td>
          <td>{{ totalAmount }}€</td>
          <td></td>
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
      return this.products.reduce((acc, i) => Number.parseFloat(acc += (i.price * i.units)), 0)
    }
  }
}
</script>