<template>
	<div class="project image" :style="style">
		<router-link class="project-title" :to="'/project/' + slug">
			{{title}}
		</router-link>
	</div>

</template>
<style lang="scss">

	@import "../../assets/style/components/variables";
	@import "../../assets/style/components/mixins";


	.projects-list .project {

		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 350px;
		height: 220px;
		margin: 20px;
		transition: all $transition-duration;
		padding: 20px;

		.project-title {
			transition: all $transition-duration;
			opacity: 0;
			visibility: hidden;
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
			& > .project-title {
				opacity: 1;
				visibility: visible;
				transform: scale(1);
			}
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
