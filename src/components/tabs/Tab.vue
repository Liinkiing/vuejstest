<template>
	<div class="tab" v-show="active">
		<transition name="slide-fade-unscale" mode="out-in">
			<div class="inner-tab" v-if="active" :key="active">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>
<style lang="scss">
	.tabs-container .tab {
		padding: 20px;
		border: 1px solid rgba(0, 0, 0, 0.16);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		border-top-right-radius: 5px;
	}

	.slide-fade-unscale-enter-active {
		transition: all .3s cubic-bezier(.28,.02,.56,.99);
	}

	.slide-fade-unscale-leave-active {
		transition: all 0s;
	}

	.slide-fade-unscale-enter, .slide-fade-unscale-leave-active {
		transform: scale(0.95);
		opacity: 0;
	}
</style>
<script>
	export default {

		data() {
			return {}
		},
		props: {
			index: {default: 0, type: Number},
			header: {type: String, default: 'Tab'}
		},
		computed: {
			active() {
				return this.$parent.activeTab == this.index
			}
		},
		mounted() {
			console.log(this.header);
		}

	}
</script>
