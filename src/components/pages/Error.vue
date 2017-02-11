<template>
    <div>
        <h1>Erreur 404 - Page non trouvée</h1>
		<p>La page que vous recherchez n'existe pas :( Je vous invite à retourner à  <router-link :to="{name: 'homepage'}">l'accueil</router-link></p>

    </div>
</template>
<style>

</style>
<script>
	import lbstore from '../lightbox/LightboxStore'

	export default {
		mounted() {
			lbstore.close()
		}
	}
</script>
