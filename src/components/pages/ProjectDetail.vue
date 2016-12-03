<template>
	<div>
		Page de détail
		<div v-if="project.images.length > 0">
			<carousel>
				<carousel-slide v-for="image in project.images" :index="project.images.indexOf(image)">
					<img :src="image" >
				</carousel-slide>
			</carousel>
		</div>
	</div>
</template>
<style lang="scss">

</style>
<script>

	import store from '../projects/ProjectStore';
	import Carousel from '../carousel/Carousel';
	import CarouselSlide from '../carousel/CarouselSlide';


	export default{
		data(){
			return {
				state: store.state,
				project: store.getProject(this.$route.params.slug)
			}
		},
		components: {
			Carousel,
			CarouselSlide
		},

		mounted(){

		},
		computed() {

		},

		methods: {}
	}
</script>
