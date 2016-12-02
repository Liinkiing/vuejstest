<template>
	<div style="display: flex; justify-content: center; align-content: center">
		<transition name="fade" tag="span">
			<div class="loading" style="color: white;" v-if="loading" @click.stop>
				<img src="./ripple.svg"  width="64" height="64" alt="">
			</div>
		</transition>
		<transition name="fade-image">
			<div class="lightbox-image" v-if="src" :style="style" :key="src" @click.stop.prevent>
				<div class="close" @click.prevent="close">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 371.23 371.23" style="enable-background:new 0 0 371.23 371.23;" xml:space="preserve" width="512px" height="512px">
<polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23   185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 " fill="#FFFFFF"/></svg></div>
				<div class="title" v-if="title"><h2>{{ title }}</h2></div>
				<div class="pagination" v-if="state.count > 1">
					<div class="left" @click.prevent="prev">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">
		<g>
			<polygon style="fill:white;" points="43.854,59.414 14.146,29.707 43.854,0 45.268,1.414 16.975,29.707 45.268,58 	"/>
		</g>
</svg>
					</div>
					<div class="right" @click.prevent="next">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">
<g>
	<polygon style="fill:white;" points="15.561,59.414 14.146,58 42.439,29.707 14.146,1.414 15.561,0 45.268,29.707 	"/>
</g>
</svg></div>

				</div>
				<div class="description" v-if="desc">
					{{ desc }}
				</div>
			</div>

		</transition>
	</div>

</template>
<style lang="scss">

	.lightbox-image {
		box-shadow: 0 1em 3em 0.5em rgba(0, 0, 0, 0.27);
		position: fixed;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		& svg {
			width: 100%;
			height: 100%;
		}

		& .close {
			transition: all 0.3s;
			position: absolute;
			right: 0;
			top: 0;
			padding: 13px;
			background: transparent;
			color: white;
			opacity: 0.5;
			width: 10%;
			height: 10%;
		  max-width: 40px;
		  max-height: 40px;
		  z-index: 1;
		  min-height: 46px;
			&:hover {
				opacity: 1;
				cursor: pointer;
				transform: scale(1.1);
			}
		}
	}

	.lightbox-image .title, .lightbox-image .description {
		flex: 1;
		background: rgba(0, 0, 0, 0.63);
		color: white;
		max-height: 10%;
		min-height: 52px;
		padding: 2%;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		width: 100%;

	}

	.lightbox-image .title {
		position: absolute;
		top: 0;
	}

	.lightbox-image .description {
		position: absolute;
		bottom: 0;
	}

	.lightbox-image .pagination {
		height: 82px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: calc(50vh - 79px);
		left: 0;
		width: 100vw;
	}

	.lightbox-image .pagination .left, .lightbox-image .pagination .right {
		width: 64px;
		height: 64px;
		display: inline-block;
		transition: all 0.3s;
		opacity: 0.4;
		padding: 10px 0;
		&:hover {
			opacity: 1;
			cursor: pointer;

		}
	}

	.lightbox-image .title {
		text-align: center;
		align-self: flex-start;
	}

	.lightbox-image .description {
		text-align: left;
		align-self: flex-end;
	}

	.loading {
		position: fixed;
		left: calc(50% - 32px);
		top: calc(50% - 32px);
	}

	.fade-image-enter-active, .fade-image-leave-active {
		transition: opacity .5s, transform 0.4s;
	}
	.fade-image-enter, .fade-image-leave-active {
		opacity: 0;
		transform: scale(0.8);
	}
</style>
<script>

	import store from './LightboxStore'


	export default {
		data() {
			return {
				loading: true,
				src: null,
				style: {},
				state: store.state
			}
		},
		props: {
			image: String,
			title: String,
			desc: String
		},

		methods: {
			close() {
				store.close();
			},
			next() {
				store.next();
			},
			prev() {
				store.prev();

			},
			shortcutsHandler(e) {
				switch (e.keyCode) {
					case 27: // Escape
						store.close();
						break;
					case 37: // Left Arrow
						store.prev();
						break;
					case 39: // Right Arrow
						store.next();
						break;
				}
			},
 			resize(image) {
				let w = image.width;
				let h = image.height;
				if (w > window.innerWidth || h > window.innerHeight) {
					let ratio = w / h;
					let winRatio = window.innerWidth / window.innerHeight;
					if (ratio > winRatio) {
						w = window.innerWidth;
						h = (w / ratio);
					} else {
						h = window.innerHeight;
						w = h * ratio
					}
				}
				this.style = {
					width: w + "px",
					height: (h - 120) + "px",
					top: ((window.innerHeight - h) * 0.5) + 'px',
					left: ((window.innerWidth - w) * 0.5) + 'px',
					background: "url(" + this.src + ")",
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					// maxHeight: 'calc(100vh - 120px)'
				}


			}
		},
		mounted() {
			let image = new window.Image();
			image.onload = () => {
				this.loading = false;
				this.src = this.image;
				this.resize(image);
			};
			image.src = this.image;
			this.resizeEvent = () => {
				this.resize(image);
			};
			this.shortcutEvent = (e) => { this.shortcutsHandler(e) };
			document.querySelector('body').classList.add('lightbox-opened');
			document.querySelector('#wrapper').classList.add('lightbox-opened');
			window.addEventListener('resize', this.resizeEvent);
			window.addEventListener('keyup', this.shortcutEvent);
		},
		destroyed() {
			document.querySelector('body').classList.remove('lightbox-opened');
			document.querySelector('#wrapper').classList.remove('lightbox-opened');
			window.removeEventListener('resize', this.resizeEvent);
			window.removeEventListener('keyup', this.shortcutEvent);
		}
	}

</script>
