<template>
	<div class="tabs-container">
		<ul>
			<li v-for="tab in tabs" @click="setTab(tab.index)" :class="{active: tab.index == activeTab}">{{ tab.header }}</li>
		</ul>
		<slot></slot>
	</div>

</template>
<style lang="scss">
	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	.slide-fade-enter {
		opacity: 0;
		transform: scale(1.2)
	}

	.tabs-container ul {
		margin-bottom: 0;
		text-align: left;
		padding-left: 0;
	}
	.tabs-container ul li {
		transition: all 0.3s;
		display: inline-block;
		padding: 20px 20px 10px 20px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		&.active {
		background: rgba(0, 0, 0, 0.16);
		 }
		&:hover {
			cursor: pointer;
			 background: rgba(0, 0, 0, 0.06);
		 }
		&:last-of-type {
			 margin-right: 0;
		 }
	}
</style>
<script>

	export default {
		data() {
			return {
				activeTab: 0,
				tabs: this.$children || []
			}
		},
		computed: {
		},
		mounted() {
		},
		methods: {
			setTab(i) {
				this.activeTab = i;
			}
		}
	}
</script>
