<template>
	<div id="app" >

		<div id="wrapper">
			<nav class="aside">
				<div class="item brand"><h1 @click="handleNavClick"><router-link to="/">JBARA Omar</router-link></h1></div>
				<ul>
					<li @click="handleNavClick"><router-link to="/about">A propos de moi</router-link></li>
					<li @click="handleNavClick"><router-link to="/projects">Mes projets</router-link></li>
					<li @click="handleNavClick"><router-link to="/hobbies">Mes hobbies</router-link></li>
					<li @click="handleNavClick"><router-link to="/examples">Exemples</router-link></li>
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
					<i style="font-size: 1.75rem; opacity: 0.7; margin-right: 10px;" class="sidebar icon mobile-only" @click.prevent="openMenu"></i>
					<h2 style="display: inline-block; width: 75%;">
						<transition name="slide-heading" mode="out-in">
							<code style="display: inline-block;" :key="pathName"><span>App</span>::<span>get{{ pathName.capitalize() }}</span>()</code>
						</transition>
					</h2>
				</header>
				<div class="menu-overlay" @click="closeMenu"></div>
				<transition name="fade" mode="out-in">
					<router-view class="view"></router-view>
				</transition>
			</div>


		</div>


		<lightbox></lightbox>
		<project-details></project-details>


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
	import ProjectDetails from './components/projects/ProjectDetail';
	import store from './AppStore';




	export default {

		components: {
			Lightbox,
			ProjectDetails
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
			this.theme = this.$localStorage.get('theme') == 'undefined' ? 'dark' : this.$localStorage.get('theme');
			this.setTheme(this.theme);
//			this.shortcutsEventHandler = window.addEventListener('keyup', (e) => {
//				if(e.key == "Escape" && !this.state.lightboxOpened) {
//					store.toggleMenu();
//				}
//			});

		},
		updated () {
			this.$localStorage.set('theme', this.theme);
		},

		watch: {
			theme(val) {
				this.setTheme(val);
			}
		},

		methods: {
			openMenu() {
				store.openMenu();
				this.resizeEventHandler = window.addEventListener('resize', () => {
					if(window.innerWidth >= 720) {
						console.log('call');
						store.nav.classList.remove('opened');
						store.pageView.classList.remove('menu-opened');
					}
				});
			},
			setTheme(theme) {
				store.body.classList = "";
				store.body.classList.add(theme + '-theme');
			},
			closeMenu() {
				store.closeMenu();
				window.removeEventListener('resize', this.resizeEventHandler);
			},
			isMobile() {
				return store.isMobile();
			},
			handleNavClick() {
				if(this.isMobile()) this.closeMenu();
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

