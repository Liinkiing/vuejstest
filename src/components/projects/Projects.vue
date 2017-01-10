<template>
	<div class="projects-container">
		<div class="categories">
			<div>
				<h3>Catégorie</h3>
				<span class="ui button" @click.prevent="changeFilter('all')" :class="{active: filter == 'all'}">Tous</span>
				<span
					class="ui button" v-for="category in categories"
					@click.prevent="setFilter(category.toLowerCase())"
					:class="{active: state.filter == category.toLowerCase()}">{{ category }}</span>
			</div>
			<transition name="fadeFromLeft">
				<div v-if="filter == 'jeu'">
					<h3>Plateforme</h3>
					<span class="ui button" @click.prevent="changePlatformsFilter('all')"
						  :class="{active: state.platformsFilter == 'all'}">Tous</span> <span
					class="ui button" v-for="platform in platforms"
					@click.prevent="setPlatformsFilter(platform)" :class="{active: platformsFilter == platform}" v-if="platform != 'HTML5'">{{ platform }}</span>
				</div>
			</transition>
		</div>
		<div class="projects-list">
			<transition name="fade" mode="out-in">
				<div style="margin-top: 20px" v-if="state.filteredProjects.length === 0"><h3>Aucuns projets trouvés</h3>
				</div>
			</transition>
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

		& .categories {
			display: flex;
			flex-direction: row;
			& span {
				margin: 0 10px 10px 0;
			}
		}

		& .projects-list {
			& span {
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
				platforms: []
			}
		},
		computed: {
			categories() {
				return _.uniq(this.state.projects.map((project) => project.category)).sort();
			},
			filter() {
				return this.state.filter;
			},
			platformsFilter() {
				return this.state.platformsFilter;
			}
		},
		methods: {
			changeFilter(newFilter) {
				store.state.filter = newFilter;
			},
			changePlatformsFilter(newFilter) {
				store.state.platformsFilter = newFilter;
			},
			changeOrder(order) {
				store.state.order = order;
				store.changeOrder(this.order, this.filter, this.platformsFilter);
			},
			setFilter(filter) {
				store.state.filter = filter;
			},
			setPlatformsFilter(platformFilter) {
				store.state.platformsFilter = platformFilter;

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
				store.filter(val, this.platformsFilter);
			},
			platformsFilter(val) {
				store.filter(this.filter, val);
			}
		}
	}

</script>
