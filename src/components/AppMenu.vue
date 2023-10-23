<template>
	<nav>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24"
				viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
				stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
				<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
			</svg>
			Warehouse IESMRE
		</span>
		<div class="navbar">
			<a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="24" height="24"
					viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
					<path d="M12 12l8 -4.5"></path>
					<path d="M12 12l0 9"></path>
					<path d="M12 12l-8 -4.5"></path>
					<path d="M16 5.25l-8 4.5"></path>
				</svg>
				Products
			</a>
			<a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24"
					viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M4 4h6v6h-6z"></path>
					<path d="M14 4h6v6h-6z"></path>
					<path d="M4 14h6v6h-6z"></path>
					<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
				</svg>
				Categories
			</a>
			<a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24"
					viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 5l0 14"></path>
					<path d="M5 12l14 0"></path>
				</svg>
				Add product
			</a>
			<a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24"
					viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 5l0 14"></path>
					<path d="M5 12l14 0"></path>
				</svg>
				Add category
			</a>
			<a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square-rounded" width="24"
					height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 9h.01"></path>
					<path d="M11 12h1v4h1"></path>
					<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
				</svg>
				About us
			</a>
		</div>
	</nav>
</template>

<script>
export default {

}
</script>

<style>
nav span {
	display: flex;
	align-items: center;
	width: auto;
	font-size: 20px;
	margin-bottom: 0.75rem;
}

nav span svg{
	padding-right: 1rem;
}

.navbar {
	display: flex;
  align-items: center;
	overflow: hidden;
}

.navbar a {
	float: left;
	display: flex;
  flex-direction: column;
  align-items: center;
	text-align: center;
	text-decoration: none;
	color: #bfc7d2;
	border-bottom: 2px solid #10151d;
	padding: 14px 16px
}

.navbar a:hover {
	color: #17b877;
	border-bottom: 2px solid #bfc7d2;
	transition: .5s;
}

@media (max-width: 600px) {
  .navbar {
    display: block;
  }

  .navbar a {
    border-bottom: 2px solid #10151d;
  }
}
</style>