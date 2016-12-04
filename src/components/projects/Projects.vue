<template>
	<div class="projects-container">
		<div class="categories">
			<span class="ui button" @click.prevent="filter = 'all'" :class="{active: filter == 'all'}">Tous</span> <span
			class="ui button" style="margin-right: 10px;" v-for="category in categories"
			@click.prevent="filter = category.toLowerCase()" :class="{active: filter == category.toLowerCase()}">{{ category }}</span>
			<br>
			<span class="ui button" @click.prevent="platformsFilter = 'all'" :class="{active: platformsFilter == 'all'}">Tous</span> <span
			class="ui button" style="margin-right: 10px;" v-for="platform in platforms"
			@click.prevent="platformsFilter = platform" :class="{active: platformsFilter == platform}">{{ platform }}</span>
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
			return {
				state: store.state,
				platforms: [],
				filter: 'all',
				platformsFilter: 'all'
			}
		},
		computed: {
			categories() {
				return _.uniq(this.state.projects.map((project) => project.category));
			},
		},
		methods: {
			changeFilter(newFilter) {
				this.filter = newFilter;
			},
			changePlatformsFilter(newFilter) {
				this.platformsFilter = newFilter;
			}
		},
		mounted() {
			let final = [];
			this.state.projects.forEach((project) => {
					if ('platforms' in project) {
						project.platforms.forEach((platform) => final.push(platform))
					}
				}
			);
			this.platforms = _.uniq(final);
		},
		watch: {
			filter(val) {
				if (val == "all") {
					store.resetFilter();
					return;
				}
				store.filter(val, this.platformsFilter);
			},
			platformsFilter(val) {
				if (val == "all") {
					console.log('Filter all')
					store.filter(this.filter);
					return;
				}
				console.log('Filter ' + val)
				store.filter(this.filter, val);
			}
		}
	}
</script>
