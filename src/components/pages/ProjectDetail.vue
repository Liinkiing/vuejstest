<template>
	<div>
		Page de détail
		<div v-if="project != null && 'platforms' in project && project.platforms.length > 0">
			<ul>
				<li v-for="platform in project.platforms">{{platform}}</li>
			</ul>
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
				project: null
			};
		},

		components: {
			Carousel,
			CarouselSlide
		},


		mounted(){
			store.loadProjects(() => {
				this.project = store.getProject(this.$route.params.slug);
			});
		},
		computed() {

		},

		methods: {}
	}
</script>
