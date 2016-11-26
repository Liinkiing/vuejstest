<template>
	<div style="display: flex; justify-content: center; align-content: center">
		<transition name="fade" tag="span">
			<div class="loading" style="color: white;" v-if="loading" @click.stop>
				<img src="./ripple.svg"  width="64" height="64" alt="">
			</div>
		</transition>
		<transition name="fade">
			<div class="lightbox-image" v-if="src" :style="style" :key="src" @click.stop.prevent>

				<div class="title"><h2>{{ title }}</h2></div>
				<div class="description">
					{{ desc }}
				</div>



			</div>

		</transition>
	</div>

</template>
<style lang="scss">

	.lightbox-image {
		box-shadow: 0 1em 3em 0.5em rgba(0, 0, 0, 0.25);
		position: fixed;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.lightbox-image .title, .lightbox-image .description {
		flex: 1;
		background: rgba(0, 0, 0, 0.63);
		color: white;
		max-height: 10%;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;

	}

	.lightbox-image .title {
		text-align: center;
	}

	.lightbox-image .description {
		text-align: left;
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

	import store from './LightboxStore'

	export default {
		data() {
			return {
				loading: true,
				src: null,
				style: {}
			}
		},
		props: {
			image: String,
			title: String,
			desc: String
		},

		methods: {
			resize(image) {
				let w = image.width;
				let h = image.height;
				if(w > window.innerWidth || h > window.innerHeight) {
					let ratio = w / h;
					let winRatio = window.innerWidth / window.innerHeight;
					if(ratio > winRatio) {
						w = window.innerWidth;
						h = w / ratio;
					} else {
						h = window.innerHeight;
						w = h * ratio
					}
				}
				this.style = {
					width: w + "px",
					height: h + "px",
					top: ((window.innerHeight - h) * 0.5) + 'px',
					left: ((window.innerWidth - w) * 0.5) + 'px',
					background: "url(" + this.src + ")",
					backgroundSize: 'cover',
					backgroundPosition: 'center center'
				}


			}
		},
		mounted() {
			let image = new window.Image();
			image.onload = () => {
				this.loading = false;
				this.src = this.image
				this.resize(image);
			}
			image.src = this.image;
			this.resizeEvent = () => {
				this.resize(image);
			}
			document.querySelector('body').classList.add('lightbox-opened');
			document.querySelector('.wrapper').classList.add('lightbox-opened');
			window.addEventListener('resize', this.resizeEvent);
		},
		destroyed() {
			document.querySelector('body').classList.remove('lightbox-opened');
			document.querySelector('.wrapper').classList.remove('lightbox-opened');
			window.removeEventListener('resize', this.resizeEvent);
		}
	}

</script>
