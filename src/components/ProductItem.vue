<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.category }}</td>
    <td>{{ item.units }}</td>
    <td>{{ item.price }}€/u</td>
    <td>{{ item.price * item.units }} €</td>
    <td class="text-center">
      <!--Botón flecha apuntando hacía arriba-->
      <button @click="incrementProductUnts" class="bi bi-arrow-up-square-fill"></button>
      <!--Botón flecha apuntando hacía abajo-->
      <button @click="decreaseProductUnts" class="bi bi-arrow-down-square-fill"></button>
      <!--Botón de editar (claramnte no funcional)-->
      <button class="bi bi-pencil-fill"></button>
      <!--Botón de borrar-->
      <button @click="delProduct" class="bi bi-x-square-fill"></button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'product-item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    incrementProductUnts() {
      alert('Unidades aumentan')
    },
    decreaseProductUnts() {
      alert('Unidades disminuyen')
    },
    delProduct() {
      alert('Carlos chupa pijitas')
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