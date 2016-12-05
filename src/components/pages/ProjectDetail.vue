<template>
	<div class="container">
		<div v-if="project !== undefined && project != null">
			Page de détail
			<div v-if="'platforms' in project && project.platforms.length > 0">
				<ul>
					<li v-for="platform in project.platforms">{{platform}}</li>
				</ul>
			</div>
			<div class="content" v-if="'content' in project" v-html="project.content">
			</div>
			<div v-if="'images' in project">
				<carousel>
					<carousel-slide v-for="image in project.images" :index="project.images.indexOf(image)">
						<img :src="image">
					</carousel-slide>
				</carousel>
			</div>
		</div>
		<div v-else>
			<h1>Ce projet n'existe pas !</h1>
		</div>
	</div>

</template>
<style lang="scss">

</style>
<script>

	import store from '../projects/ProjectStore';
	import appStore from '../../AppStore';
	import Carousel from '../carousel/Carousel';
	import CarouselSlide from '../carousel/CarouselSlide';


	export default{
		data(){
			return {
				state: store.state,
			};
		},

		components: {
			Carousel,
			CarouselSlide
		},


		mounted(){
			store.setCurrentProject(store.getProject(this.$route.params.slug));
			let scrollListener = window.addEventListener('scroll', () => {
				if (window.scrollY >= 187) {
					// console.log(window.scrollY);
					if(!appStore.header.classList.contains('fixed')) {
						appStore.container.classList.add('offset');
						appStore.header.classList.add('fixed');
					}
				} else {
					if(appStore.header.classList.contains('fixed'))  {
						appStore.container.classList.remove('offset');
						appStore.header.classList.remove('fixed');
					}
				}
			});
		},
		destroyed() {
			store.setCurrentProject(null);
		},
		computed: {
			project() {
				return this.state.project;
			}
		},
		methods: {}
	}
</script>
