<template>
	<div id="app" >

		<div id="wrapper">
			<nav class="aside">
				<main style="flex: 1;">
					<div class="item brand"><h1 @click="handleNavClick"><router-link to="/">JBARA Omar</router-link></h1></div>
					<ul>
						<li @click="handleNavClick"><router-link to="/about">A propos de moi</router-link></li>
						<li @click="handleNavClick"><router-link to="/portfolio">Mon portfolio</router-link></li>
						<li @click="handleNavClick"><router-link to="/hobbies">Mes hobbies</router-link></li>
						<li @click="handleNavClick"><router-link to="/examples">Exemples</router-link></li>
					</ul>
					<div class="theme-chooser">
						<p>Choississez un thème</p>
						<div class="theme-selector">
							<div @click="theme = 'dark'" class="dark-theme" :class="{'active': theme == 'dark'}"></div>
							<div @click="theme = 'light'" class="light-theme" :class="{'active': theme == 'light'}"></div>
						</div>
					</div>
				</main>
				<footer><a href="https://github.com/Liinkiing" target="_blank"><i style="font-size: 1.5rem; margin: 0;" class="github icon"></i></a></footer>
			</nav>



			<div class="view-wrapper">
				<header class="current-page">
					<i style="font-size: 1.75rem; opacity: 0.7; margin-right: 10px;" class="sidebar icon mobile-only" @click.prevent="openMenu"></i>
					<h2 style="display: inline-block; width: 75%;">
						<!--<transition name="slide-heading" mode="out-in">-->
							<!--<code style="display: inline-block;" key="noParams" v-if="!('slug' in $route.params)">-->
								<!--<span>App</span>::<span>get{{ pathName.capitalize() }}</span>()-->
							<!--</code>-->
							<!--<code style="display: inline-block;" key="withParams" v-else>-->
								<!--<span>App</span>::<span>get{{ pathName.capitalize() }}</span>('{{ $route.params.slug }}')-->
							<!--</code>-->
						<!--</transition>-->
						<transition name="slide-heading" mode="out-in">
							<code style="display: inline-block;" :key="$route.path">
								<span>App</span>::<span>get{{ pathName.capitalize() }}</span>({{ ("slug" in $route.params) ? "'" + $route.params.slug + "'" : "" }})
							</code>
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


	</div>


</template>


<style src="./assets/style/app.scss" lang="scss">



</style>

<script>



	import Lightbox from './components/lightbox/Lightbox';
	import ProjectDetails from './components/pages/ProjectDetail';
	import store from './AppStore';
	import projectStore from './components/projects/ProjectStore';



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
					if (window.innerWidth >= 720) {
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
				if (this.isMobile()) this.closeMenu();
			}
		},


		computed: {
			pathName() {
				if (this.$route.path == "/") return "home";
				return this.$route.path.split("/")[1];
			}
		}

	}

</script>

