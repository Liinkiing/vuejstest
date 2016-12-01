<template>
	<div id="app">

		<!--<ul>-->
			<!--<li><router-link to="/">Accueil</router-link></li>-->
			<!--<li><router-link to="/todo">Démonstration Lightbox</router-link></li>-->
		<!--</ul>-->

		<nav class="aside">
			<div class="item brand"><h1><router-link to="/">Omar JBARA</router-link></h1></div>
			<ul>
				<li><router-link to="/about">A propos de moi</router-link></li>
				<li><router-link to="/projects">Mes projets</router-link></li>

			</ul>
		</nav>



		<div class="view-wrapper">
			<header class="current-page">
					<h2><span class="slash">/</span>
						<transition name="slide-heading" mode="out-in">
							<code style="display: inline-block;" :key="pathName">{{ pathName }}();</code>
						</transition>

				</h2>
			</header>
			<transition name="fade" mode="out-in">
				<router-view class="view"></router-view>
			</transition>
		</div>


	</div>


</template>


<style src="./assets/style/app.scss" lang="scss">

</style>

<script>

	export default {

		computed: {
			pathName() {
				if(this.$route.path == "/") return "home"
				return this.$route.path.split("/")[1];
			}
		}

	}

</script>

