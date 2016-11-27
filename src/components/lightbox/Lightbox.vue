<template>
	<transition name="fade">
		<div class="lightbox" v-if="imageUrl" @click="close">
			<transition :name="transition">
				<lightbox-image :image="imageUrl" :key="imageUrl" :title="title" :desc="desc"></lightbox-image>
			</transition>
			<nav class="lightbox navigation" @click.stop>
				<a v-for="image in state.images.filter((image, i) => i != 0)" :href="image.url" :alt="image.title" @click.prevent.stop="open(image.url)" :class="{active: image.index == state.index}">
					<img :src="image.thumbnail" width="80" height="80">
				</a>
			</nav>
		</div>
	</transition>

</template>
<style src="./lightbox.scss" lang="scss">
</style>
<script>

	import store from './LightboxStore'
	import LightboxImage from './LightboxImage'


	function shortcutsEventListener(e) {
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
	}

	export default {
		components: {
			LightboxImage
		},
		data() {
			return {
				state: store.state,
			}
		},
		computed: {
			imageUrl() {
				if (this.state.index != null) {

					return this.state.images[this.state.index].url;
				}
			},
			title() {
				if (this.state.index != null) return this.state.images[this.state.index].title;
			},
			desc() {
				if (this.state.index != null) return this.state.images[this.state.index].desc;
			},
			index() {
				return this.state.index;
			},
			transition() {
				return 'slide-' + store.state.direction;
			}
		},
		methods: {
			open(url) {
				store.open(url);
			},
			close() {
				store.close();
			}
		},
		watch: {
			index(val, oldVal) {
				console.warn('changement sur index');
				if (oldVal == null) {
					window.addEventListener('keyup', (e) => {
						shortcutsEventListener(e)
					})
				} else if (val == null && oldVal != null) {
					window.removeEventListener('keyup', shortcutsEventListener);

				}
			}
		}
	}
</script>
