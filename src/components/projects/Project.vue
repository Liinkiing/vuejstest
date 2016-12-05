<template>
	<router-link class="project image" :style="style" :to="{name: 'project_show', params: {slug}}">
		<div class="project-title">
			{{title}}
		</div>
		<div class="project-description">
			{{shortDescription}}
		</div>
		<div class="project-categories" v-if="platforms.length > 0">
			<span v-for="platform in platforms"><i :class="platform.toLowerCase() + ' icon'"></i></span>
		</div>
	</router-link>


	</div>

</template>
<style lang="scss">

	@import "../../assets/style/components/variables";
	@import "../../assets/style/components/mixins";


	.projects-list .project {

		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 350px;
		height: 220px;
		margin: 10px;
		transition: all $transition-duration;
		padding: 20px;
		color: whitesmoke;

		& .project-description {
			transition: all $transition-duration;
			filter: blur(5px);
			opacity: 0;
			visibility: hidden;
			transform: scale(0.5);
		}
		& .project-categories {
			transition: all $transition-duration;
			filter: blur(5px);
			opacity: 0;
			visibility: hidden;
			transform: scale(0.5);
			& span {
				display: inline-block;
				margin-right: 15px;
				&:last-of-type {
					margin-right: 0;
				}
			}
		}

		& .project-title {
			transition: all $transition-duration;
			opacity: 0;
			visibility: hidden;
			filter: blur(5px);
			color: whitesmoke;
			font-size: 1.5rem;
			font-family: 'Geomanist', 'Lato', 'Roboto', sans-serif;
			text-transform: uppercase;
			transform: scale(0.5);
			text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
			@include link-hover($dark-teal-color);
		}


		&:hover {
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1),
			0 25px 50px 0 rgba(0, 0, 0, 0.1),
			inset 0 0 200px 80px rgba(0,0,0,.8);;
			cursor: pointer;
			& > .project-title, > .project-description, > .project-categories {
				opacity: 1;
				visibility: visible;
				transform: scale(1);
				filter: blur(0);
			}
			/*& > .project-description {*/
				/*opacity: 1;*/
				/*visibility: visible;*/
				/*transform: scale(1);*/
				/*filter: blur(0);*/
			/*}*/
			/*& > .project-categories {*/
				/*opacity: 1;*/
				/*visibility: visible;*/
				/*transform: scale(1);*/
				/*filter: blur(0);*/
			/*}*/
		}
	}



</style>
<script>

	import store from './ProjectStore';



    export default{
		data() {
			return {
				style: {
					backgroundImage: 'url(' + this.thumbnail + ')',
					backgroundSize: 'cover'
				}
			}
		},
		props: {
			thumbnail: {required: true},
			title: {required: true},
			shortDescription: {required: true},
			category: {required: true},
			platforms: {type: Array, default: () => [], required: true},
			language: {required: true},
			date: {required: true},
			images: {type: Array, default: () => []}
		},
		mounted() {

		},
		computed: {
			slug() {
				return this.title.slugify();
			}
		},
        components:{

        }
    }
</script>
