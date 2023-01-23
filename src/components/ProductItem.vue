<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.category }}</td>
    <td>{{ item.units }}</td>
    <td>{{ item.price }}€/u</td>
    <td>{{ item.price * item.units }} €</td>
    <td class="text-center">
      <i class="bi bi-arrow-up-square-fill"></i>
      <i class="bi bi-arrow-down-square-fill"></i>
      <i class="bi bi-pencil-fill"></i>
      <i class="bi bi-x-square-fill"></i>
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
  }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");

tr td i {
  padding: 0.5rem;
}

tr td i:hover {
  cursor: pointer;
}
</style>