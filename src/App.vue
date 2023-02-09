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
      products: [],
      categories: [],
    };
  },
  async mounted() {
    const { products, categories } = await store.loadData()

    this.products = products
    this.categories = categories
  },
}
</script>

<template>
  <div class="container">
    <AppMenu />
    <ProductsTable :products="products"/>
    <ProductForm :categories="categories" />
    <footer><small>Diseño Web en Entorno Cliente - IES Mestre Ramon Esteve</small></footer>
  </div>
</template>