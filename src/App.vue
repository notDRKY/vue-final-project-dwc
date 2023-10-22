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
  <AppMenu></AppMenu>
  <div id="container">
    <ProductsTable></ProductsTable>
    <ProductForm></ProductForm>
  </div>
  <footer><small>Diseño Web en Entorno Cliente - IES Mestre Ramon Esteve</small></footer>
</template>

<style>
body {
  color: #f2f2f2;
  background-color: #2f2f2f;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
}

#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

table {
  flex: 1;
  width:100%;
}

form {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
}

form .form_cont {
  padding:1rem;
}

form .input-group {
  position: relative;
  margin: 20px 0;
}

form .input-group label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #f2f2f2;
  padding: 0 5px;
  pointer-events: none;
  transition: .5s;
}

form .input-group input {
  margin: 0;
  padding: 0;
  font-size: 18px;
  height: 2rem;
  min-width: 100%;
  color: #f2f2f2;
  background-color: transparent;
  border: 1.25px solid #f2f2f2;
  border-radius: 12px;
  outline: none;
}

form .input-group input:focus~label,
form .input-group input:valid~label {
  top: 0;
  font-size: 14px;
  background: #2f2f2f;
}

form select {
  margin: 0;
  padding: 0;
  font-size: 18px;
  height: 2rem;
  min-width: 100%;
  text-align: center;
  color: #f2f2f2;
  background-color: transparent;
  border: 1.25px solid #f2f2f2;
  border-radius: 12px;
}

form select option {
  outline: none;
  background-color: #2f2f2f;
}

form .buttons {
  display: flex;
  flex-wrap: wrap;
}

form button {
  margin: 1rem 0.125rem 0.125rem 0.125rem;
  color: #f2f2f2;
  font-size: 18px;
  min-height: 2rem;
  border-radius: 10px;
  border: 0.1rem transparent;
  cursor: pointer;
  background-color: #ff3d43;
  flex: 1;
}

form button:hover {
  background-color: #b22a2e;
  transition: .5s;
}

form button[type=submit] {
  color: #f2f2f2;
  background-color: #198754;
  flex: 1;
}

form button[type=submit]:hover {
  background-color: #0f5434;
  transition: .5s;
}

</style>