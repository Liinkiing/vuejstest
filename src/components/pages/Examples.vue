<template>
		<div class="container">
			<h2>Exemples de composants créés avec Vuejs</h2>
			<p>Durant mon temps libre, j'ai appris petit à petit, à utiliser VueJS. J'ai tout de suite accroché à la façon dont VueJS nous permettait de créer des composants très simplements et surtout ces derniers sont
				<strong>modulable</strong>, c'est-à-dire que je peux désormais très facilement inclure un composant VueJS dans une autre application. Vous trouverez donc sur cette page les différents composants que j'ai créée de A à Z (apparence comprise)
				avec le code source nécessaire au rendu de ce composant.
			</p>
			<h3>Carousel</h3>
			<carousel :autoplay="true" :slide-duration="2000">
				<carousel-slide v-for="n in 8" :index="n - 1">
					<h1>Je suis la slide n {{n}}</h1>
				</carousel-slide>
			</carousel>
			<h3>Tabs components</h3>
			<tabs-container>
				<tab header="Je suis un onglet" :index="0">Je suis le contenu</tab>
				<tab header="Et moi un autre" :index="1">Et moi l'autre</tab>
			</tabs-container>
			<pre class="language-markup"><code>
&lt;tabs-container>
	&lt;tab header="Je suis un onglet" :index="0">Je suis le contenu&lt;/tab>
	&lt;tab header="Et moi un autre" :index="1">Et moi l'autre&lt;/tab>
&lt;/tabs-container>
			</code></pre>
			<h3>Tags components</h3>
			<tags :max="5"></tags>
			<h3>Lightbox</h3>

			<a href="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" v-lightbox="{group: 'nature', title: 'Shaimes Mirenda', 'desc': 'Shaimes le bg'}">
				<img src="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" width="266" height="150" alt="">
			</a>

			<a href="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" v-lightbox="{group: 'nature', title: 'Je suis un titre et la première image'}">
				<img src="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" width="266" height="150" alt="">
			</a>
			<a href="http://wallpapercave.com/wp/eaFUfBE.jpg" v-lightbox="{group: 'nature', desc: 'Je suis une description'}">
				<img src="http://wallpapercave.com/wp/eaFUfBE.jpg" width="266" height="150" alt="">
			</a>
			<a href="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/11/Full-Screen-HD-Wallpapers-7.jpg" v-lightbox="{group: 'nature', title: 'Titre', desc: 'Je suis une description'}">
				<img src="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/11/Full-Screen-HD-Wallpapers-7.jpg" width="266" height="150" alt="">
			</a>
			<h4>Groupe 'ville'</h4>
			<a href="http://www.pixelstalk.net/wp-content/uploads/2016/05/Full-HD-Desktop-Wallpaper.jpg" v-lightbox="{group: 'ville' }">
				<img src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Full-HD-Desktop-Wallpaper.jpg" width="266" height="150" alt="">
			</a>
			<a href="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-21.png" v-lightbox="{group: 'ville'}">
				<img src="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-21.png" width="266" height="150" alt="">
			</a>
			<a href="http://wallpapercave.com/wp/NIAnj0Q.jpg" v-lightbox="{group: 'ville', title: 'City Skyline', desc: 'Je suis une description'}">
				<img src="http://wallpapercave.com/wp/NIAnj0Q.jpg" width="266" height="150" alt="">
			</a>
			<a href="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-28.png" v-lightbox="{group: 'ville'}">
				<img src="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-28.png" width="266" height="150" alt="">
			</a>
			<a href="http://www.howtogeek.com/wp-content/uploads/gg/up/sshot4ddf8753257e6.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
				<img src="http://www.howtogeek.com/wp-content/uploads/gg/up/sshot4ddf8753257e6.jpg" width="266" height="150" alt="">
			</a>
			<a href="http://www.siwallpaperhd.com/wp-content/uploads/2015/05/New-York-City-Skyline-Wallpaper-HD-16-Image-1024x576.jpg" v-lightbox="{group: 'ville'}">
				<img src="http://www.siwallpaperhd.com/wp-content/uploads/2015/05/New-York-City-Skyline-Wallpaper-HD-16-Image-1024x576.jpg" width="266" height="150" alt="">
			</a>
			<a href="http://www.intrawallpaper.com/static/images/eiffel-tower-wallpaper-18_TJ30uc8.jpg" v-lightbox="{title: 'Paris', desc:'Jsuis une desc', group: 'ville'}">
				<img src="http://www.intrawallpaper.com/static/images/eiffel-tower-wallpaper-18_TJ30uc8.jpg" width="266" height="150" alt="">
			</a>

			<h3>Todo</h3>
			<todos></todos>

		</div>
</template>
<style lang="scss">


	span.language {
		font-size: 1.25rem;
		position: relative;
		font-family: 'Hack', monospace;
		margin-left: 5px;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: -10px;
			 height: 3px;
			 width: 100%;
			background: whitesmoke;
		 }
	}

	.message.info {
		text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
		width: 50%;
		min-width: 400px;
	}


</style>
<script>

	import Todos from '../Todos'
	import Tags from '../tags/Tags.vue'
	import Carousel from '../carousel/Carousel.vue'
	import CarouselSlide from '../carousel/CarouselSlide.vue'
	import TabsContainer from '../tabs/TabsContainer.vue'
	import Tab from '../tabs/Tab.vue'
	import store from '../../AppStore';

	export default {
		components: {
			Todos,
			Carousel,
			CarouselSlide,
			Tags,
			TabsContainer,
			Tab
		},
		data() {
			return {
				languages: ['C#', 'PHP', 'HTML / CSS', 'JavaScript', 'Java', 'ASP.Net', 'VB.Net'],
				language: ''
			}
		},

		methods: {
			closeMenu() {
				store.closeMenu();
			}
		},

		mounted() {
			this.language = this.languages[0];
			window.setInterval(() => {
				let i = this.languages.indexOf(this.language) + 1;
				if(i > this.languages.length - 1) i = 0;
				this.language = this.languages[i];
			}, 3000);
		}
	}
</script>
