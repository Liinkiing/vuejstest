<template>
	<div class="container" v-if="project !== undefined && project != null" >
		<div class="project-detail">
			<div class="content">
				<div v-if="'content' in project" v-html="project.content"></div>
				<div class="project-gallery" v-if="'images' in project && project.images.length > 0">
					<h3>Galerie</h3>
					<a v-for="image in project.images" :href="image.url" v-lightbox="{group: project.title.slugify(), title: 'title' in image ? image.title : null, desc: 'desc' in image ? image.desc : null}">
						<img :src="image.url" width="140" height="100">
					</a>
				</div>
			</div>
			<div class="metas" v-if="('platforms' in project && project.platforms.length > 0) || ('language' in project && project.language.length > 0)">
				<ul>
					<li v-if="('platforms' in project && project.platforms.length > 0)" v-for="platform in project.platforms"><i :class="platform.toLowerCase() + ' icon'"></i>{{platform}}</li>
					<li class="date"><i class="calendar icon"></i>{{date}}</li>
					<li v-if="'language' in project && project.language.length > 0" class="languages"><i class="code icon"></i>Langages utilisés : {{project.language}}</li>

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
			@media screen and (max-width: 720px) {
				padding-right: 0;
			}
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
			& li {
				margin-bottom: 5px;
				&.date {
					margin-top: 20px;
					opacity: 0.5;
				}
				&.languages {
					margin-top: 20px;
					opacity: 0.5;
				}
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
	import lbstore from '../lightbox/LightboxStore'
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
			lbstore.close();
			store.setCurrentProject(store.getProject(this.$route.params.slug));
			console.log(store.state.project);
			appStore.resetSelectors();
			let scrollListener = window.addEventListener('scroll', () => {
				if (window.scrollY >= 187) {
					if(!appStore.header.classList.contains('fixed')) {
						appStore.container.classList.add('offset');
						console.log(appStore.container);
						appStore.header.classList.add('fixed');
						console.log('add offset');
					}
				} else {
					if(appStore.header.classList.contains('fixed'))  {
						appStore.container.classList.remove('offset');
						appStore.header.classList.remove('fixed');
					console.log('remove offset')
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
			},
			date() {
				let date = new Date(this.project.date);

				return date.toLocaleString('fr-FR', {month: 'long'}).capitalize() + ' ' + date.getFullYear()
			}
		},
		methods: {}
	}
</script>
