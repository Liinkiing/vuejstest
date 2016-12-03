<template>
    <div class="projects-container">
		<div class="categories">
			<div @click="filter = 'all'">Tous</div>
			<span style="margin-right: 10px;" v-for="category in categories" @click.prevent="filter = category.toLowerCase()">{{ category }}</span>
		</div>
		<div class="projects-list">
			<slot></slot>
		</div>
    </div>
</template>
<style lang="scss">

	@import "../../assets/style/components/variables";

	.projects-container {
		display: flex;
		flex-direction: column;
		justify-content: center;

		& .projects-list {
			display: flex;;
			justify-content: center;
		}
	}



</style>
<script>
	import Project from './Project.vue'
	import store from './ProjectStore';

	export default{
		components: {
			Project
		},
		data(){
			return{
				state: store.state,
				filter: 'all'
			}
		},
		computed: {

			categories() {

				return _.uniq(this.state.projects.map((project) => project.category));
			}
		},
		methods: {
			changeFilter(newFilter) {
				this.filter = newFilter;
			}
		},
		watch: {
			filter(val) {
				if(val == "all") {
					store.resetFilter();
					return;
				}
				store.filter(val);
			}
		}
    }
</script>
