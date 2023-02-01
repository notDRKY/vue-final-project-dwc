<script>
import AppMenu from './components/AppMenu.vue';
import ProductForm from './components/ProductForm.vue';
import ProductsTable from './components/ProductsTable.vue';

import { store } from './store/data.js'

export default {
  name: 'App',
  components: { ProductForm, ProductsTable, AppMenu },
  data() {
    return {
      products: store.state.products,
      categories: store.state.categories,
    };
  },
  // mounted() {
  //   store.loadData()
  // },
}
</script>

<template>
  <div class="container">
    <AppMenu></AppMenu>
    <ProductsTable></ProductsTable>
    <ProductForm></ProductForm>
    <footer><small>Diseño Web en Entorno Cliente - IES Mestre Ramon Esteve</small></footer>
  </div>
</template>