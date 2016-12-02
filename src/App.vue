<template>
	<div id="app" >

		<!--<ul>-->
			<!--<li><router-link to="/">Accueil</router-link></li>-->
			<!--<li><router-link to="/todo">Démonstration Lightbox</router-link></li>-->
		<!--</ul>-->

		<div id="wrapper">


			<nav class="aside opened">
				<div class="item brand"><h1><router-link to="/">Omar JBARA</router-link></h1></div>
				<ul>
					<li><router-link to="/about">A propos de moi</router-link></li>
					<li><router-link to="/projects">Mes projets</router-link></li>
				</ul>
				<div class="theme-chooser">
					<p>Choississez un thème</p>
					<select name="theme" id="" v-model="theme">
						<option value="light">Clair</option>
						<option value="dark">Foncé</option>
					</select>
				</div>
				<button @click.prevent="closeMenu()">Fermer</button>
				<button @click.prevent="openMenu()">Ouvrir</button>
			</nav>



			<div class="view-wrapper">
				<header class="current-page">
					<h2 style="display: inline-block; width: 75%;"><span class="slash">/</span>
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


		<lightbox></lightbox>


	</div>


</template>


<style src="./assets/style/app.scss" lang="scss">

</style>

<script>

	import Lightbox from './components/lightbox/Lightbox';
	import store from './AppStore';



	export default {

		components: {
			Lightbox
		},

		data() {
			return {
				state: store.state,
				theme: 'dark'
			}
		},

		mounted() {
			store.initStore();
			store.body.classList = "";
			store.body.classList.add('dark-theme');
			window.addEventListener('keyup', (e) => {
				if(e.key == "Escape") {
					store.toggleMenu();
				}
			});
		},

		watch: {
			theme(val, oldVal) {
				store.body.classList = "";
				store.body.classList.add(val + '-theme');
			}
		},

		computed: {
			pathName() {
				if(this.$route.path == "/") return "home"
				return this.$route.path.split("/")[1];
			}
		}

	}

</script>

