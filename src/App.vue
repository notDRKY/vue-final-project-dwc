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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display&display=swap');

html {
  color-scheme: dark;
}

body {
  color: #bfc7d2;
  background-color: #10151d;
  font-family: Noto Sans Display,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
  font-size: 18px;
}

h1 {
  color: #ffc26e;
}

#container {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
}

/* Table styles */

.table_cont {
  padding: 1rem;
  width: auto;
}

table {
  flex: 1;
  width:100%;
  box-sizing: border-box;
  align-items: center;
  border: 0 solid #bfc7d2;
  border-radius: 14px;
  border-collapse: collapse;
  padding: 0.25rem;
}

table thead {
  text-transform: uppercase;
  font-weight: bold;
  color: #a87ffb;
}

table td {
  min-width: 7rem;
  padding: 0.125rem;
  padding-right: 1.75rem;
}

table tr.total {
  text-transform: uppercase;
}

table tr.total td {
  border-top: 2px solid #2e3c51;
  padding-top: 0.5rem;
}

/* Form styles */
form {
  flex: 1;
  width: auto;
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
  color: #bfc7d2;
  padding: 0 5px;
  pointer-events: none;
  transition: .5s;
}

form .input-group input {
  margin: 0;
  padding: 0;
  font-size: 18px;
  height: 2.5rem;
  min-width: 100%;
  color: #bfc7d2;
  background-color: transparent;
  border-top: 0;
  border-bottom: 2px solid #2e3c51;
  border-left: 0;
  border-right: 0;
  outline: none;
}

form .input-group input:focus~label,
form .input-group input:valid~label {
  top: 0;
  font-size: 14px;
  background: #10151d;
}

form select {
  margin: 0;
  padding: 0;
  font-size: 18px;
  height: 2.5rem;
  min-width: 100%;
  text-align: center;
  color: #bfc7d2;
  background-color: transparent;
  border: 0px solid #bfc7d2;
  border-radius: 12px;
  outline: none;
}

form select option {
  outline: none;
  background-color: #10151d;
}

form .buttons {
  display: flex;
  flex-wrap: wrap;
}

form button {
  margin: 1rem 0.125rem 0.125rem 0.125rem;
  color: #bfc7d2;
  font-size: 18px;
  min-height: 2.5rem;
  border-radius: 10px;
  border: 0.1rem transparent;
  cursor: pointer;
  background-color: #cc3131;
  flex: 1;
}

form button:hover {
  background-color: #992424;
  transition: .5s;
}

form button[type=submit] {
  color: #bfc7d2;
  background-color: #108456;
  flex: 1;
}

form button[type=submit]:hover {
  background-color: #095134;
  transition: .5s;
}

</style>