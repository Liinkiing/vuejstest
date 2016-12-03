<template>
		<div class="container">
			<projects>
				<transition-group name="fade">
					<project v-for="project in state.filteredProjects" :thumbnail="project.thumbnail" :title="project.title" :shortDescription="project.shortDescription"
							 :category="project.category" :language="project.language" :date="project.date" :key="project.title"></project>
				</transition-group>

			</projects>
		</div>
</template>
<style lang="scss">

	@import "../../assets/style/components/variables";





</style>
<script>

	import Projects from '../projects/Projects.vue';
	import Project from '../projects/Project.vue';
	import LightboxDirective from '../lightbox/LightboxDirective'
	import store from '../projects/ProjectStore';

	export default {

		components: {
			Projects,
			Project
		},
		data() {
			return {
				state: store.state,
			}
		},

		methods: {

		},



		mounted() {

		}

	}
</script>
