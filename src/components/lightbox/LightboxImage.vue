<template>
	<div>
		<transition name="fade" tag="span">
			<div class="loading" style="color: white;" v-if="loading" @click.stop>
				<img src="./ripple.svg"  width="64" height="64" alt="">
			</div>
		</transition>
		<transition name="fade">
			<img class="lightbox-image" v-if="src" :src="src" alt="" @click.stop>
		</transition>
	</div>

</template>
<style lang="scss">

	img.lightbox-image {
		box-shadow: 0 1em 3em 0.5em rgba(0, 0, 0, 0.25);
	}

	.loading {
		position: fixed;
		left: calc(50% - 32px);
		top: calc(50% - 32px);
	}

	.zoom-fade-enter-active, .zoom-fade-leave-active {
		transition: opacity 0.3s, transform 0.6s;

	}

	.zoom-fade-enter, .zoom-fade-leave-active {
		opacity: 0;
		transform: scale(1.4) translateY(-60px);
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
</style>
<script>

	export default {
		data() {
			return {
				loading: true,
				src: null
			}
		},
		props: {
			image: String
		},
		updated() {

		}
	}

</script>
