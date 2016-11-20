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
			<carousel style="width: 48%; display: inline-block; vertical-align: top;" :autoplay="false" slide-duration="200">
				<carousel-slide v-for="n in 9" :index="n - 1">
					<img :src="'http://lorempicsum.com/futurama/600/450/' + n">
				</carousel-slide>
			</carousel>
			<carousel style="width: 48%; display: inline-block;" :autoplay="false" slide-duration="400">
				<carousel-slide v-for="n in 4" :index="n - 1">
					<img :src="'http://lorempicsum.com/rio/200/200/' + n">
				</carousel-slide>
			</carousel>
			<br><br><br><br>
		</div>

		<carousel autoplay="true" slide-duration="5000" style="width: 1400px; margin: 0 auto;">
			<carousel-slide :index="0">
				<img src="https://static.pexels.com/photos/87646/horsehead-nebula-dark-nebula-constellation-orion-87646.jpeg" height="1000">
			</carousel-slide>
			<carousel-slide :index="1">
				<img src="https://static.pexels.com/photos/30986/pexels-photo.jpg" height="1000">
			</carousel-slide>
			<carousel-slide :index="2">
				<img src="https://static.pexels.com/photos/190076/pexels-photo-190076.jpeg" height="1000">
			</carousel-slide>
			<carousel-slide :index="3">
				<img src="https://static.pexels.com/photos/87646/horsehead-nebula-dark-nebula-constellation-orion-87646.jpeg" height="1000">
			</carousel-slide>
		</carousel>
		<br><br><br><br>

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

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	body {
		font: 14px 'Avenir LT Std 35 Light', Helvetica, Arial, sans-serif;
		line-height: 1.4em;
		background: #f5f5f5;
		color: #4d4d4d;
		min-width: 230px;
		max-width: 1920px;
		margin: 0 auto;
		-webkit-font-smoothing: antialiased;
		-moz-font-smoothing: antialiased;
		font-smoothing: antialiased;
		font-weight: 300;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;

	}
</style>
