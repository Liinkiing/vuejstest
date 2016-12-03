<template>
	<router-link class="project image" :style="style" :to="'/project/' + slug">
		<div class="project-title"><h2>{{title}}</h2></div>
	</router-link>
</template>
<style lang="scss">

	@import "../../assets/style/components/variables";


	.projects-list .project {

		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 350px;
		height: 220px;
		margin: 20px;
		transition: all $transition-duration;

		.project-title {
			transition: all $transition-duration;
			opacity: 0;
			visibility: hidden;
			color: whitesmoke;
			transform: scale(0.5);
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
					backgroundImage: 'url(' + this.thumbnail + ')'
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
