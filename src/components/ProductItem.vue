<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ returnCategory(item.category) }}</td>
    <td>{{ item.units }}</td>
    <td>{{ (item.price).toFixed(2) }}€/u</td>
    <td>{{ (item.price * item.units).toFixed(2) }} €</td>
    <td class="text-center">
      <!--Botón flecha apuntando hacía arriba-->
      <button @click="incrementProductUnts" class="bi bi-arrow-up-square-fill"></button>
      <!--Botón flecha apuntando hacía abajo-->
      <button @click="decreaseProductUnts" class="bi bi-arrow-down-square-fill"></button>
      <!--Botón de editar (no funcional)-->
      <button class="bi bi-pencil-fill" disabled></button>
      <!--Botón de borrar-->
      <button @click="delProduct" class="bi bi-x-square-fill text-danger"></button>
    </td>
  </tr>
</template>

<script>
import { store } from '@/store/data';

export default {
  name: 'product-item',
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  methods: {
    incrementProductUnts() {
      store.incrementProductUnitAction(this.item.id)
    },
    decreaseProductUnts() {
      store.decreaseProductUnitAction(this.item.id)
    },
    delProduct() {
      if (confirm(`Se va a borrar el producto '${this.item.name}'`)) {
        store.deleteProductAction(this.item.id)
      }
     },
     returnCategory(id) {
       return store.state.categories.find((i) => i.id === id).name
     }
  }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");

tr td button {
  padding: 0.5rem;
  border: 0px;
  background-color: transparent;
}

tr td button:hover {
  cursor: pointer;
}
</style>