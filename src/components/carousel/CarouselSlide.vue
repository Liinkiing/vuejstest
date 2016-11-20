<template>
	<transition :name="transition">
		<div class="carousel-slide" v-show="visible">
			<slot></slot>
		</div>
	</transition>

</template>
<style lang="scss">

	.carousel-slide {
		position: relative;
		& h2 {

		}


	}


	.slide-next-enter-active {
		animation: slideNextIn 0.5s;
		z-index: 1;
	}

	.slide-next-leave-active {
		animation: slideNextOut 0.5s;
		position: absolute;
		top:0;
		left: 0;
		z-index: -1;

	}

	@keyframes slideNextIn {

		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}

	}
	@keyframes slideNextOut {

		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}

	}

	.slide-prev-enter-active {
		animation: slidePrevIn 0.5s;
		z-index: 1;
	}

	.slide-prev-leave-active {
		animation: slidePrevOut 0.5s;
		position: absolute;
		z-index: -1;
		top:0;
		left: 0;

	}

	@keyframes slidePrevIn {

		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}

	}
	@keyframes slidePrevOut {

		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100%);
		}

	}

</style>
<script>
	export default{
		props: {
			index: {type: Number, default: 0}
		},
		computed: {
			visible () {
				return this.index === this.$parent.activeSlide;
			},
			transition () {
				return 'slide-' + this.$parent.direction;
			}
		},
		components: {}
	}
</script>
