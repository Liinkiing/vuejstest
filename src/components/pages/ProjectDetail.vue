<template>
	<div class="container" v-if="project !== undefined && project != null" >
		<div class="project-detail">
			<div class="content">
				<div v-if="'content' in project" v-html="project.content"></div>
				<div class="project-gallery" v-if="'images' in project && project.images.length > 0">
					<h3>Galerie</h3>
					<a v-for="image in project.images" :href="image" v-lightbox="{group: project.title.slugify()}">
						<img :src="image" width="140" height="100">
					</a>
				</div>
			</div>
			<div class="metas" v-if="'platforms' in project && project.platforms.length > 0">
				<ul>
					<li v-for="platform in project.platforms"><i :class="platform.toLowerCase() + ' icon'"></i>{{platform}}</li>
					<li class="date"><i class="calendar icon"></i>{{project.date}}</li>
				</ul>
			</div>
		</div>

	</div>
	<div class="container" v-else>
		<h1>Ce projet n'existe pas !</h1>
	</div>

</template>
<style lang="scss">

	@import "../../assets/style/components/variables";

	.project-detail {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		@media screen and (max-width: 720px) {
			flex-direction: column;
		}
		& .content {
			flex: 3;
			padding-right: 40px;
		}
		& .metas {
			flex: 1;
			@media screen and (max-width: 720px) {
				order: -1;
			}
		}
		& .project-gallery {
			margin-top: 20px;
		}
		& ul {
			padding-left: 15px;
			list-style: none;
			border-left: 3px solid $medium-teal-color;
			& i[class~="icon"] {
				margin-right: 15px;
			}
			& li.date {
				margin-top: 20px;
				opacity: 0.5;
			}
			@media screen and (max-width: 720px) {
				border-left: none;
				padding-bottom: 15px;
				border-bottom: 3px solid $medium-teal-color;
			}
		}
	}

	.light-theme {
		& ul {
			border-left-color: $light-teal-color;
			border-bottom-color: $light-teal-color;
		}
	}

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
