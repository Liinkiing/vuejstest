<template>
	<div id="app">

		<div class="ui fixed inverted menu">
			<div class="ui container">
				<a href="#" class="header item">
					VueJS 2 Test
				</a>
				<a href="#" class="item">Home</a>
				<div class="ui simple dropdown item">
					Dropdown <i class="dropdown icon"></i>
					<div class="menu">
						<a class="item" href="#">Link Item</a>
						<a class="item" href="#">Link Item</a>
						<div class="divider"></div>
						<div class="header">Header Item</div>
						<div class="item">
							<i class="dropdown icon"></i>
							Sub Menu
							<div class="menu">
								<a class="item" href="#">Link Item</a>
								<a class="item" href="#">Link Item</a>
							</div>
						</div>
						<a class="item" href="#">Link Item</a>
					</div>
				</div>
			</div>
		</div>

		<div class="ui container" style="margin-top: 50px;">
			<todos></todos>
		</div>

	</div>

</template>

<script>
	import Todos from './components/Todos'

	export default {
		name: 'app',
		components: {
			Todos
		}
	}
</script>

<style>
	body {
		background: ghostwhite;
	}

	#app {
		font-family: 'Bk Avenir Book', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;

	}
</style>
