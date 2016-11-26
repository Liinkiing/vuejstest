<template>
	<transition name="fade">
		<div class="lightbox" v-if="imageUrl" @click="close">
			<lightbox-image :image="imageUrl"></lightbox-image>
		</div>
	</transition>

</template>
<style src="./lightbox.scss" lang="scss">
</style>
<script>

	import store from './LightboxStore'
	import LightboxImage from './LightboxImage'

	function shortcutsEventListener(e) {
		store.setActiveImage(null);
	}

	export default {
		components: {
			LightboxImage
		},
		data() {
			return {
				state: store.state,
				shortcutsEventListenerID: null,
			}
		},
		computed: {
			imageUrl() {
				return this.state.activeUrl;
			}
		},
		methods: {
			open() {
				if (this.$children.length > 0) this.$children[0].loading = true;
				let img = new window.Image();
				img.onload = () => {
					console.log('image chargé wsh');
					if (this.$children.length > 0) this.$children[0].src = this.imageUrl;
					if (this.$children.length > 0) this.$children[0].loading = false;
				};
				img.src = this.imageUrl;
				console.log('ouvert');
				window.addEventListener('keyup', shortcutsEventListener);
				document.querySelector('body').classList.add('lightbox-opened');
				document.querySelector('.wrapper').classList.add('lightbox-opened');
			},
			close() {
				console.log('fermé');
				store.state.activeUrl = null;
				if (this.$children.length > 0) this.$children[0].src = null;
				if (this.$children.length > 0) this.$children[0].loading = false;
				store.state.imageUrl = null;
				window.removeEventListener('keyup', shortcutsEventListener);
				document.querySelector('body').classList.remove('lightbox-opened');
				document.querySelector('.wrapper').classList.remove('lightbox-opened');
			}
		},
		watch: {
			imageUrl(val, oldVal) {
				if(!oldVal) {
					this.open();
				} else if(!val && oldVal) {
					this.close();
				}
			}
		}
	}
</script>
