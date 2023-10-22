<template>
	<form @submit.prevent="submitForm">
		<div class="form_cont">
			<h1>Añadir producto</h1>
			<!-- Aquí los inputs y botones del form -->

			<div class="input-group">
				<input type="text" v-model="product.id" disabled>
				<label for="newprod-id">ID</label>
			</div>

			<div class="input-group">
				<input type="text" v-model="product.name" required>
				<label for="newprod-name">Nombre</label>
			</div>

			<div class="input-group">
				<input type="number" v-model="product.units" required min="0" step="1">
				<label for="newprod-units">Unidades</label>
			</div>

			<div class="input-group">
				<input type="number" v-model="product.price" required min="0" step="0.01">
				<label for="newprod-price">Precio</label>
			</div>
			<div>
				<label for="newprod-cat"></label>
				<select v-model="product.category" required>
					<option value="">--- Selecciona categoría ---</option>
					<option v-for="cat in categories" :key="cat.id" :value="cat.id" :title="cat.description">{{ cat.name }}
					</option>
				</select>
			</div>
			<div class="buttons">
				<button type="submit">Añadir</button>
				<button type="reset">Reset</button>
			</div>
		</div>
	</form>
</template>

<script>
import { store } from '../store/data.js'

export default {
	name: 'product-form',
	data() {
		return {
			product: {
				id: '',
				name: '',
				category: '',
				units: '',
				price: ''
			},
			categories: store.state.categories
		}
	},
	methods: {
		submitForm() {
			if (this.product) {
				store.addProductAction(this.product.name, this.product.category, this.product.units, this.product.price)
				this.product.name = ''
				this.product.category = ''
				this.product.units = ''
				this.product.price = ''
			}
		}
	}
}
</script>