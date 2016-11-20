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

		<div class="ui container" style="margin-top: 50px;">
			<h1>Carousel component</h1>
			<carousel>
				<carousel-slide v-for="n in 9" :index="n - 1">
					<div style="position:absolute; left:0; right: 0; text-align:center; top: 50%; color: #FFF; font-size:16px; padding: 20px; background: rgba(0,0,0,0.5); width: 100%;"><h2>Slide n°{{ n }}</h2></div>
					<img :src="'http://lorempicsum.com/futurama/600/400/' + n" width="100%" >
				</carousel-slide>
			</carousel>
		</div>


	</div>

</template>

<script>
	import Todos from './components/Todos'
	import Carousel from './components/carousel/Carousel'
	import CarouselSlide from './components/carousel/CarouselSlide'

	export default {
		name: 'app',
		components: {
			Todos,
			Carousel,
			CarouselSlide
		}
	}
</script>

<style>

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;

	}
</style>
