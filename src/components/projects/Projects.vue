<template>
    <div class="projects-container">
		<div class="categories">
			<span class="ui button" @click.prevent="filter = 'all'" :class="{active: filter == 'all'}">Tous</span> <span class="ui button" style="margin-right: 10px;" v-for="category in categories" @click.prevent="filter = category.toLowerCase()" :class="{active: filter == category.toLowerCase()}">{{ category }}</span>
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

		& .categories span {
			margin-bottom: 10px;
		}

		& .projects-list {
			& span {
				display: block;
				text-align: center;
			}
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
