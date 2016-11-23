<template>
	<div class="carousel" @keyup.left="prev()" @keyup.right="next()">
		<div class="carousel-inner">
			<slot></slot>
		</div>
		<button class="carousel-navigation prev" @click="prev()">❰</button>
		<button class="carousel-navigation next" @click="next()">❱</button>
		<div class="carousel pagination">
			<div class="slide-pagination" v-for="slide in slides" @click.prevent="goto(slide.index)"
				 :class="{active: activeSlide == slide.index}"></div>
		</div>
	</div>

</template>
<style lang="scss">
	.carousel {
		position: relative;
		overflow: hidden;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
		&-inner {
			transition: all 0.3s;
		}
		&.pagination {
			padding: 10px 10px 15px 10px;
			display: flex;
			justify-content: center;
			align-content: center;
			& .slide-pagination {
				width: 10px;
				height: 10px;
				background: black;
				margin-right: 10px;
				transition: all 0.3s;
				&:last-of-type {
					margin-right: 0;
				}
				&:hover {
					cursor: pointer;
					opacity: 0.5;
				}
				&.active {
					background: transparent;
					border: 1px solid black;
				}
			}
		}
	}

	.carousel-navigation {
		position: absolute;
		width: 80px;
		height: 80px;
		font-size: 80px;
		background: black;
		top: calc(50% - 40px);
		z-index: 100;
		color: white;
		transition: all 0.3s;
		opacity: 0.5;

		&.prev {
			left: 0;
		}
		&.next {
			right: 0;
		}

		&:hover {
			cursor: pointer;
			opacity: 0.9;
			width: 100px;
		}
	}
</style>
<script>


	import CarouselSlide from './CarouselSlide.vue';

	export default{
		data(){
			return {
				activeSlide: 0,
				slides: this.$children || [],
				direction: 'next',
				autoplayIntervalID: undefined,
				auto: this.autoplay
			}
		},
		props: {
			autoplay: {default: false},
			slideDuration: {default: 3000}
		},
		mounted() {
			if (this.auto) {
				this.unsetSetAutoplay();
			}
		},
		destroyed() {
			window.clearInterval(this.autoplayIntervalID);
		},
		computed: {
			slidesCount() {
				return this.slides.length;
			}
		},
		watch: {
			auto() {
				this.unsetSetAutoplay();
			}
		},
		methods: {
			prev() {
				this.unsetSetAutoplay();
				this.activeSlide--;
				this.direction = 'prev';
				if (this.activeSlide < 0) this.activeSlide = this.slidesCount - 1;
			},
			next() {
				this.unsetSetAutoplay();
				this.activeSlide++;
				this.direction = 'next';
				if (this.activeSlide > this.slidesCount - 1) this.activeSlide = 0
			},
			goto(i) {
				this.unsetSetAutoplay();
				if (i > this.activeSlide) {
					this.direction = 'next';
				} else {
					this.direction = 'prev';
				}
				this.activeSlide = i;
			},
			unsetSetAutoplay() {
				if(this.autoplayIntervalID) window.clearInterval(this.autoplayIntervalID);
				if(this.auto){
					this.autoplayIntervalID = setInterval(() => {
						console.log('call');
						this.next();
					}, this.slideDuration);
				}
			}
		},
		components: {
			CarouselSlide
		}
	}
</script>
