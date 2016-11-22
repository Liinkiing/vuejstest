<template>
	<div class="tabs-container">
		<ul>
			<li v-for="tab in tabs" @click.prevent="setTab(tab.index)" :class="{active: tab.index == activeTab}">{{ tab.header }}</li>
		</ul>
		<slot></slot>
	</div>

</template>
<style lang="scss">
	.tabs-container ul {
		margin-bottom: 0;
		text-align: left;
		padding-left: 0;
	}
	.tabs-container ul li {
		transition: all 0.3s;
		display: inline-block;
		margin-right: 15px;
		padding: 20px 20px 10px 20px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		&.active {
		background: rgba(0, 0, 0, 0.16);
		 }
		&:hover {
			cursor: pointer;
		 }
		&:last-of-type {
			 margin-right: 0;
		 }
	}
</style>
<script>

	import Tab from "./Tab";

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
			console.log(this.tabs);
		},
		methods: {
			setTab(i) {
				this.activeTab = i;
			}
		}
	}
</script>
