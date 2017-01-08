<template>
	<div id="app" >

		<div id="wrapper">
			<nav class="aside">
				<main style="flex: 1;">
					<div class="item brand"><h1 @click="handleNavClick"><router-link to="/">Omar JBARA</router-link></h1></div>
					<ul>
						<li @click="handleNavClick"><router-link :to="{name: 'about'}">A propos de moi</router-link></li>
						<li @click="handleNavClick"><router-link :to="{name: 'portfolio'}">Mon portfolio</router-link></li>
						<li @click="handleNavClick"><router-link :to="{name: 'hobbies'}">Mes hobbies</router-link></li>
						<li @click="handleNavClick"><router-link :to="{name: 'examples'}">Exemples</router-link></li>
					</ul>
					<div class="theme-chooser">
						<p>Choississez un thème</p>
						<div class="theme-selector">
							<div @click="theme = 'dark'" class="dark-theme" :class="{'active': theme == 'dark'}"></div>
							<div @click="theme = 'light'" class="light-theme" :class="{'active': theme == 'light'}"></div>
						</div>
					</div>
				</main>
				<footer>
					<a href="https://github.com/Liinkiing" target="_blank"><i style="font-size: 1.5rem; margin: 0;" class="github icon"></i></a>
					<div class="copyright">&copy; JBARA Omar - 2016</div>
				</footer>
			</nav>



			<div class="view-wrapper">
				<header class="current-page" :class="{'is-project': projectState.project != null}" :style="headerStyle">
					<i style="font-size: 1.75rem; opacity: 0.7; margin-right: 10px;" class="sidebar icon mobile-only" @click.prevent="openMenu"></i>
					<h2 style="display: inline-block; width: 80%;">
						<transition name="slide-heading" mode="out-in">
							<code style="display: inline-block;" :key="$route.path">
								<span>{{pageName}}</span>
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
				projectState: projectStore.state,
				theme: 'dark',
			}
		},

		mounted() {
			store.initStore();
			store.body.classList = "";
			store.body.classList.add('dark-theme');
			this.theme = this.$localStorage.get('theme') == 'undefined' ? 'dark' : this.$localStorage.get('theme');
			this.setTheme(this.theme);


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
			getProject(name) {
				return projectStore.getProject(name);
			},
			isMobile() {
				return store.isMobile();
			},
			handleNavClick() {
				if (this.isMobile()) this.closeMenu();
			}
		},


		computed: {
			headerStyle() {
				if (this.projectState.project != null) {
					return {
						background: 'url(' + this.projectState.project.thumbnail + ')',
						backgroundPosition: 'center center',
						backgroundSize: 'cover',
						backgroundAttachment: 'fixed',
						transition: 'none'
					}
				}
				return null;
			},
			pathName() {
				if (this.$route.path == "/") return "home";
				return this.$route.path.split("/")[1];
			},
			currentProject() {
				return this.projectState.project;
			},
			pageName() {
				if (this.$route.name == "error") {
					return (this.isMobile()) ? 'throw new Exception()' : 'throw new HttpNotFoundException()'
				}
				if (Object.keys(this.$route.params).length > 0 && 'slug' in this.$route.params) {
					if (this.getProject(this.$route.params.slug) !== undefined) {
						return 'App::get' + this.pathName.capitalize() + "('" + this.$route.params.slug + "')"
					} else {
						return (this.isMobile()) ? 'throw new Exception()' : 'throw new ProjectNotFoundException()'
					}
				}
				else {
					return 'App::get' + this.pathName.capitalize() + '()';
				}
			}
		}

	}

</script>

