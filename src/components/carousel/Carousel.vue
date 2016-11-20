<template>
	<div class="carousel" @keyup.left="prev()" @keyup.right="next()">
		<slot></slot>
		<button @click="prev()">Précedent</button>
		<button @click="next()">Suivant</button>
	</div>
</template>
<style lang="scss">
	.carousel {
		position: relative;
		overflow: hidden;
	}
</style>
<script>



	import CarouselSlide from './CarouselSlide.vue';

	export default{
		data(){
			return {
				activeSlide: 0,
				slides: this.$children || [],
				direction: 'next'
			}
		},
		mounted() {
			this.slides.forEach((slide, i) => {
				slide.index = i;
			})
		},
		computed: {
			slidesCount() {
				return this.slides.length;
			}
		},
		methods: {
			prev() {
				this.activeSlide--;
				this.direction = 'prev';
				if(this.activeSlide < 0) this.activeSlide = this.slidesCount - 1;
			},
			next() {
				this.activeSlide++;
				this.direction = 'next';
				if(this.activeSlide > this.slidesCount - 1) this.activeSlide = 0
			}
		},
		components: {
			CarouselSlide
		}
	}
</script>
