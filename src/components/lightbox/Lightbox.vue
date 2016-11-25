<template>
    <div class="lightbox" v-if="imageUrl">
		<img :src="imageUrl" alt="">
    </div>
</template>
<style src="./lightbox.scss" lang="scss">
</style>
<script>

	import store from './LightboxStore'

	function shortcutsEventListener(e) {
		store.setActiveImage(null);
	}

	export default {
		data() {
			return {
				state: store.state,
				shortcutsEventListenerID: null
			}
		},
		components: {},
		computed: {
			imageUrl() {
				return this.state.activeUrl;
			}
		},
		methods: {
			close() {
				console.log('test');
				store.setActiveImage(null);
			}
		},
		watch: {
			imageUrl(val, oldVal) {
				if(!oldVal) {
					console.log('ouvert');
					window.addEventListener('keyup', shortcutsEventListener);
					document.querySelector('body').classList.add('lightbox-opened');
					document.querySelector('.wrapper').classList.add('lightbox-opened');
				} else if(!val && oldVal) {
					console.log('fermé');
					window.removeEventListener('keyup', shortcutsEventListener);
					document.querySelector('body').classList.remove('lightbox-opened');
					document.querySelector('.wrapper').classList.remove('lightbox-opened');
				}
			}
		}
	}
</script>
