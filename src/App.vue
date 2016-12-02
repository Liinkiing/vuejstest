<template>
	<div id="app" >

		<div id="wrapper">
			<nav class="aside">
				<div class="item brand"><h1><router-link to="/">JBARA Omar</router-link></h1></div>
				<ul>
					<li><router-link to="/about">A propos de moi</router-link></li>
					<li><router-link to="/projects">Mes projets</router-link></li>
					<li><router-link to="/hobbies">Mes hobbies</router-link></li>
					<li><router-link to="/examples">Exemples</router-link></li>
				</ul>
				<div class="theme-chooser">
					<p>Choississez un thème</p>
					<select name="theme" id="" v-model="theme">
						<option value="light">Clair</option>
						<option value="dark">Foncé</option>
					</select>
				</div>
			</nav>



			<div class="view-wrapper">
				<header class="current-page">
					<i style="font-size: 2rem;" class="list icon mobile-only" @click.prevent="openMenu"></i>
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

	.slide-maxime-heading-enter-active, .slide-maxime-heading-leave-active {
		transition: opacity .5s, transform 0.8s;
	}

	.slide-maxime-heading-enter, .slide-maxime-heading-leave-active {
		opacity: 0;
		transform: translateX(-200vw);

	}


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
//			this.shortcutsEventHandler = window.addEventListener('keyup', (e) => {
//				if(e.key == "Escape" && !this.state.lightboxOpened) {
//					store.toggleMenu();
//				}
//			});
		},

		watch: {
			theme(val, oldVal) {
				store.body.classList = "";
				store.body.classList.add(val + '-theme');
			}
		},

		methods: {
			openMenu() {
				store.openMenu();
			},
			closeMenu() {
				store.closeMenu();
			}
		},

		computed: {
			pathName() {
				if(this.$route.path == "/") return "home";
				return this.$route.path.split("/")[1];
			}
		}

	}

</script>

