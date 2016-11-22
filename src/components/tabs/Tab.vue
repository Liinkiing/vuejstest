<template>
	<div class="tab" v-show="active">
		Index du tab : {{ index }}
		<slot></slot>
	</div>
</template>
<style lang="scss">
	.tabs-container .tab {
		padding: 20px;
		border: 1px solid rgba(0, 0, 0, 0.16);
	}
</style>
<script>
	export default {

		data() {
			return {

			}
		},
		props: {
			index: {default: 0, type: Number},
			header: {type: String, default: 'Tab'}
		},
		computed: {
			active() {
				return this.$parent.activeTab == this.index;
			}
		},
		mounted() {
			console.log(this.header);
		}

	}
</script>
