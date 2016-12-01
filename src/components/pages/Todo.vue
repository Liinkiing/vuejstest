
<template>
	<transition name="fade-image">
		<div class="ui container" style="margin-top: 50px;">
			<todos></todos>
		</div>
	</transition>


</template>
<style lang="scss">

</style>
<script>
	import Todos from '../../components/Todos'

	export default {
		components: {
			Todos,
		}
	}
</script>
