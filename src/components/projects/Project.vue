<template>
    <div class="project">
		{{ thumbnail }} - {{ category }}
    </div>
</template>
<style lang="scss">

</style>
<script>

	import store from './ProjectStore';

    export default{
		data(){
			return{

			}
		},
		props: {
			thumbnail: {required: true},
			title: {required: true},
			shortDescription: {required: true},
			category: {required: true},
			language: {required: true},
			date: {required: true}
		},
        components:{

        }
    }
</script>
