<template>
	<transition name="fade">
		<div class="lightbox" v-if="imageUrl" @click="close">
			<transition :name="transition">
				<lightbox-image :image="imageUrl" :key="imageUrl" :title="title" :desc="desc"></lightbox-image>
			</transition>
			<nav class="lightbox navigation" @click.stop>
				<a v-for="image in state.images[state.group]" :href="image.url" :alt="image.title" :title="image.title" @click.prevent.stop="open(image.url, image.group)" :class="{active: image.index == state.index}">
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
			group() {
				return this.state.group
			},
			imageUrl() {
				if (this.state.index != null) {

					return this.state.images[this.group][this.state.index].url;
				}
			},
			title() {
				if (this.state.index != null) return this.state.images[this.group][this.state.index].title;
			},
			desc() {
				if (this.state.index != null) return this.state.images[this.group][this.state.index].desc;
			},
			index() {
				return this.state.index;
			},
			transition() {
				return 'slide-' + store.state.direction;
			}
		},
		methods: {
			open(url, group) {
				store.open(url, group);
			},
			close() {
				store.close();
			}
		}
	}
</script>
