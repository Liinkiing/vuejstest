<template>
	<div id="app">

		<div class="wrapper">
			<div class="ui fixed inverted menu">
				<div class="ui container">
					<a href="#" class="header item">
						VueJS 2 Test
					</a>
					<a href="#" class="item">Home</a>
					<div class="ui simple dropdown item">
						Dropdown <i class="dropdown icon"></i>
						<div class="menu">
							<a class="item" href="#">Link Item</a>
							<a class="item" href="#">Link Item</a>
							<div class="divider"></div>
							<div class="header">Header Item</div>
							<div class="item">
								<i class="dropdown icon"></i>
								Sub Menu
								<div class="menu">
									<a class="item" href="#">Link Item</a>
									<a class="item" href="#">Link Item</a>
								</div>
							</div>
							<a class="item" href="#">Link Item</a>
						</div>
					</div>
				</div>
			</div>

			<div class="ui container" style="margin-top: 50px;">
				<todos></todos>
			</div>

			<div class="ui container" style="margin-top: 50px;">
				<h1>Carousel component</h1>
				<h2>Carousel avec autoplay à 'false'</h2>
				<carousel style="width: 48%; display: inline-block; vertical-align: top;" :autoplay="false"
						  slide-duration="500">
					<carousel-slide v-for="n in 9" :index="n - 1">
						<img :src="'http://lorempicsum.com/futurama/600/450/' + n">
					</carousel-slide>
				</carousel>
				<pre><code class="language-markup" style="text-align: left;">
&lt;carousel style="width: 48%; display: inline-block; vertical-align: top;" :autoplay="false" slide-duration="500">
		&lt;carousel-slide v-for="n in 9" :index="n - 1">
				&lt;img :src="'http://lorempicsum.com/futurama/600/450/' + n">
		&lt;/carousel-slide>
&lt;/carousel>
			</code></pre>
				<h2>Carousel avec autoplay à 'true' et slide-duration: 2500</h2>
				<carousel style="width: 48%; display: inline-block;" :autoplay="rioAutoplay"
						  :slide-duration="rioDuration">
					<carousel-slide v-for="n in rioSlides" :index="n - 1">
						<img :src="'http://lorempicsum.com/rio/200/200/' + n">
					</carousel-slide>
				</carousel>
				<pre><code class="language-markup" id="rio" style="text-align: left;">
&lt;carousel style="width: 48%; display: inline-block; vertical-align: top;" :autoplay="true" slide-duration="2500">
		&lt;carousel-slide v-for="n in {{rioSlides}}" :index="n - 1">
				&lt;img :src="'http://lorempicsum.com/rio/200/200/' + n">
		&lt;/carousel-slide>
&lt;/carousel>
			</code></pre>
				Nombre de slides : <input type="number" v-model="rioSlides"> Autoplay : <input type="checkbox"
																							   v-model="rioAutoplay">
				Duration :
				<input type="number" min="400" max="3000" v-model="rioDuration">
				<br><br>
				<h2>Tab component</h2>
				<tabs-container>
					<tab header="Et moi un autre" :index="0">wesh morray</tab>
					<tab header="Et moi encore un pp" :index="1">wesh morray c'est encore moi <br>
						<tabs-container>
							<tab header="sous tab" :index="0">XD</tab>
							<tab header="sous tab 2" :index="1">XD 2
								<tabs-container>
									<tab header="sous tab" :index="0">XD</tab>
									<tab header="sous tab 2" :index="1">Des onglets dans des onglets dans des onglets
										<tabs-container>
											<tab header="sous tab" :index="0">XD</tab>
											<tab header="sous tab 2" :index="1">Des onglets dans des onglets dans des
												onglets dans des onglets
												<tabs-container>
													<tab header="sous tab" :index="0">XD</tab>
													<tab header="sous tab 2" :index="1">Des onglets dans des onglets
														dans
														des onglets dans des onglets dans des onglets
														<tabs-container>
															<tab header="sous tab" :index="0">XD</tab>
															<tab header="sous tab 2" :index="1">Des onglets dans des
																onglets
																dans des onglets dans des onglets dans des onglets dans
																des
																onglets
																<tabs-container>
																	<tab header="sous tab" :index="0">XD</tab>
																	<tab header="sous tab 2" :index="1">Des onglets dans
																		des
																		onglets dans des onglets dans des onglets dans
																		des
																		onglets dans des onglets dans des onglets
																		<tabs-container>
																			<tab header="sous tab" :index="0">XD</tab>
																			<tab header="sous tab 2" :index="1">Des
																				onglets
																				dans des
																				onglets dans des onglets dans des
																				onglets
																				dans des
																				onglets dans des onglets dans des
																				onglets
																				<tabs-container>
																					<tab header="sous tab" :index="0">XD
																					</tab>
																					<tab header="sous tab 2" :index="1">
																						Des
																						onglets dans des
																						onglets dans des onglets dans
																						des
																						onglets dans des
																						onglets dans des onglets dans
																						des
																						onglets
																						<tabs-container>
																							<tab header="sous tab"
																								 :index="0">XD
																							</tab>
																							<tab header="sous tab 2"
																								 :index="1">Des onglets
																								dans
																								des
																								onglets dans des onglets
																								dans des onglets dans
																								des
																								onglets dans des onglets
																								dans des onglets
																								<tabs-container>
																									<tab
																										header="sous tab"
																										:index="0">XD
																									</tab>
																									<tab
																										header="sous tab 2"
																										:index="1">Des
																										onglets dans des
																										onglets dans des
																										onglets dans des
																										onglets dans des
																										onglets dans des
																										onglets dans des
																										onglets
																										<tabs-container>
																											<tab
																												header="sous tab"
																												:index="0">
																												XD
																											</tab>
																											<tab
																												header="sous tab 2"
																												:index="1">
																												Des
																												onglets
																												dans des
																												onglets
																												dans
																												des
																												onglets
																												dans des
																												onglets
																												dans
																												des
																												onglets
																												dans
																												des
																												onglets
																												dans des
																												onglets
																												<tabs-container>
																													<tab
																														header="sous tab"
																														:index="0">
																														XD
																													</tab>
																													<tab
																														header="sous tab 2"
																														:index="1">
																														Des
																														onglets
																														dans
																														des
																														onglets
																														dans
																														des
																														onglets
																														dans
																														des
																														onglets
																														dans
																														des
																														onglets
																														dans
																														des
																														onglets
																														dans
																														des
																														onglets
																														<tabs-container>
																															<tab
																																header="sous tab"
																																:index="0">
																																XD
																															</tab>
																															<tab
																																header="sous tab 2"
																																:index="1">
																																Des
																																onglets
																																dans
																																des
																																onglets
																																dans
																																des
																																onglets
																																dans
																																des
																																onglets
																																dans
																																des
																																onglets
																																dans
																																des
																																onglets
																																dans
																																des
																																onglets
																																<tabs-container>
																																	<tab
																																		header="sous tab"
																																		:index="0">
																																		XD
																																	</tab>
																																	<tab
																																		header="sous tab 2"
																																		:index="1">
																																		Des
																																		onglets
																																		dans
																																		des
																																		onglets
																																		dans
																																		des
																																		onglets
																																		dans
																																		des
																																		onglets
																																		dans
																																		des
																																		onglets
																																		dans
																																		des
																																		onglets
																																		dans
																																		des
																																		onglets
																																		<tabs-container>
																																			<tab
																																				header="sous tab"
																																				:index="0">
																																				XD
																																			</tab>
																																			<tab
																																				header="sous tab 2"
																																				:index="1">
																																				Des
																																				onglets
																																				dans
																																				des
																																				onglets
																																				dans
																																				des
																																				onglets
																																				dans
																																				des
																																				onglets
																																				dans
																																				des
																																				onglets
																																				dans
																																				des
																																				onglets
																																				dans
																																				des
																																				onglets
																																				<tabs-container>
																																					<tab
																																						header="sous tab"
																																						:index="0">
																																						XD
																																					</tab>
																																					<tab
																																						header="sous tab 2"
																																						:index="1">
																																						Tu
																																						te
																																						fais
																																						du
																																						mal
																																						à
																																						aller
																																						jusque
																																						là
																																					</tab>
																																				</tabs-container>
																																			</tab>
																																		</tabs-container>
																																	</tab>
																																</tabs-container>
																															</tab>
																														</tabs-container>
																													</tab>
																												</tabs-container>
																											</tab>
																										</tabs-container>
																									</tab>
																								</tabs-container>
																							</tab>
																						</tabs-container>
																					</tab>
																				</tabs-container>
																			</tab>
																		</tabs-container>
																	</tab>
																</tabs-container>
															</tab>
														</tabs-container>
													</tab>
												</tabs-container>
											</tab>
										</tabs-container>
									</tab>
								</tabs-container>
							</tab>
						</tabs-container>
					</tab>
					<tab header="Et moi encore un pp" :index="2">Test 2</tab>
					<tab header="Et moi un autre" :index="3">Test 3</tab>
				</tabs-container>
				<br><br><br>
				<pre><code class="language-markup" style="text-align: left">
&lt;tabs-container>
		&lt;tab header="Test 1" :index="0">Contenu onglet 1&lt;/tab>
		&lt;tab header="Test 2" :index="1">Contenu onglet 2&lt;/tab>
		&lt;tab header="Test 3" :index="2">Contenu onglet 3&lt;/tab>
		&lt;tab header="Test 4" :index="3">Contenu onglet 4&lt;/tab>
&lt;/tabs-container>
			</code></pre>
				<br><br><br><br>
				<h2>Tags component</h2>
				<div style="margin: 0 auto; width: 50%;">
					<tags max="5"></tags>
				</div>
				<br><br><br><br>
				<pre><code class="language-markup" style="text-align: left">
				&lt;tags max="5">&lt;/tags>
			</code></pre>
				<br><br><br><br>

				<h2>Lightbox component</h2>
				<p>Premièrement, insérez une balise
				<pre class="language-markup" style="display: inline-block; padding: 5px; margin: 0; vertical-align: bottom;"><code>&lt;lightbox>&lt;/lightbox></code></pre>. Elle doit être soeur d'une div ayant comme id <pre>wrapper</pre> <br>exemple: </p>
				<pre style="text-align:left;" class="language-markup"><code>
&lt;div class="wrapper">
		&lt;!-- Contenu de votre site web -->
&lt;/div>
&lt;lightbox>&lt;/lightbox>
				</code></pre>
				<p>Ensuite, pour rajouter une image à la lightbox, il n y a rien de plus simple. A n'importe quel endroit sur votre page, il suffit d'indiquer la directive
					<code>v-lightbox</code> dans une balise <code>&lt;a>&lt;/a></code> avec dans cette balise une image qui sera celle affichée en taille réelle. </p>
				<pre style="text-align: left;" class="language-markup"><code>
&lt;a href="http://yoursupersite.com/awesome-fullscreen-image.png" v-lightbox>
		&lt;img src="http://yoursupersite.com/awesome-thumbnail-image.png">&lt;/img>
&lt;/a>
				</code></pre>
				<p>Vous pouvez de plus rajouter des paramètres supplémentaires à la directive <code>v-lightbox</code>.</p>
				<table class="ui celled stripped table">
					<thead>
					<tr>
						<th>Nom</th>
						<th>Type de valeur</th>
						<th>Valeur par défaut</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td><code>group</code></td>
						<td><code>String</code></td>
						<td><code>'default'</code></td>
						<td>Utilisé afin de créer divers ensembles d'images</td>
					</tr>
					<tr>
						<td><code>title</code></td>
						<td><code>String</code></td>
						<td><code>null</code></td>
						<td>Permet de donner un titre à votre image, qui sera affiché en haut de l'image</td>
					</tr>
					<tr>
						<td><code>desc</code></td>
						<td><code>String</code></td>
						<td><code>null</code></td>
						<td>Permet de donner une description à votre image, qui sera affiché en bas de l'image</td>
					</tr>
					</tbody>
				</table>
				<br><br>
				<h2>Groupe 'nature'</h2>
				<a href="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" v-lightbox="{group: 'nature', title: 'Je suis un titre'}">
					<img src="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" width="266" height="150" alt="">
				</a>
				<a href="http://wallpapercave.com/wp/eaFUfBE.jpg" v-lightbox="{group: 'nature', desc: 'Je suis une description'}">
					<img src="http://wallpapercave.com/wp/eaFUfBE.jpg" width="266" height="150" alt="">
				</a>
				<a href="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/11/Full-Screen-HD-Wallpapers-7.jpg" v-lightbox="{group: 'nature', title: 'Titre', desc: 'Je suis une description'}">
					<img src="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/11/Full-Screen-HD-Wallpapers-7.jpg" width="266" height="150" alt="">
				</a>
				<h2>Groupe 'ville'</h2>
				<a href="http://www.pixelstalk.net/wp-content/uploads/2016/05/Full-HD-Desktop-Wallpaper.jpg" v-lightbox="{group: 'ville' }">
					<img src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Full-HD-Desktop-Wallpaper.jpg" width="266" height="150" alt="">
				</a>
				<a href="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-21.png" v-lightbox="{group: 'ville'}">
					<img src="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-21.png" width="266" height="150" alt="">
				</a>
				<a href="http://wallpapercave.com/wp/NIAnj0Q.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
					<img src="http://wallpapercave.com/wp/NIAnj0Q.jpg" width="266" height="150" alt="">
				</a>
				<a href="http://wallpapercave.com/wp/bnZNbJG.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
					<img src="http://wallpapercave.com/wp/bnZNbJG.jpg" width="266" height="150" alt="">
				</a>
				<a href="http://livehdwallpaper.com/wp-content/uploads/2015/01/New-York-City-Skyline-Wallpapers.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
					<img src="http://livehdwallpaper.com/wp-content/uploads/2015/01/New-York-City-Skyline-Wallpapers.jpg" width="266" height="150" alt="">
				</a>
				<a href="http://cdn.pcwallart.com/images/city-skyline-wallpaper-wallpaper-4.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
					<img src="http://cdn.pcwallart.com/images/city-skyline-wallpaper-wallpaper-4.jpg" width="266" height="150" alt="">
				</a>
				<p>Exemple pour afficher la lightbox ci dessus</p>
				<pre style="text-align:left;" class="language-markup"><code>
		&lt;h2>Groupe 'nature'&lt;/h2>

		&lt;a href="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" v-lightbox="{group: 'nature', title: 'Je suis un titre'}">
				&lt;img src="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://wallpapercave.com/wp/eaFUfBE.jpg" v-lightbox="{group: 'nature', desc: 'Je suis une description'}">
				&lt;img src="http://wallpapercave.com/wp/eaFUfBE.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/11/Full-Screen-HD-Wallpapers-7.jpg" v-lightbox="{group: 'nature', title: 'Titre', desc: 'Je suis une description'}">
				&lt;img src="http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/11/Full-Screen-HD-Wallpapers-7.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;h2>Groupe 'ville'&lt;/h2>

		&lt;a href="http://www.pixelstalk.net/wp-content/uploads/2016/05/Full-HD-Desktop-Wallpaper.jpg" v-lightbox="{group: 'ville' }">
				&lt;img src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Full-HD-Desktop-Wallpaper.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-21.png" v-lightbox="{group: 'ville'}">
				&lt;img src="http://allfreedesigns.com/wp-content/uploads/2011/08/city-skyline-wallpapers-21.png" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://wallpapercave.com/wp/NIAnj0Q.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
				&lt;img src="http://wallpapercave.com/wp/NIAnj0Q.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://wallpapercave.com/wp/bnZNbJG.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
				&lt;img src="http://wallpapercave.com/wp/bnZNbJG.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://livehdwallpaper.com/wp-content/uploads/2015/01/New-York-City-Skyline-Wallpapers.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
				&lt;img src="http://livehdwallpaper.com/wp-content/uploads/2015/01/New-York-City-Skyline-Wallpapers.jpg" width="266" height="150" alt="">
		&lt;/a>

		&lt;a href="http://cdn.pcwallart.com/images/city-skyline-wallpaper-wallpaper-4.jpg" v-lightbox="{group: 'ville', title: 'City Skyline'}">
				&lt;img src="http://cdn.pcwallart.com/images/city-skyline-wallpaper-wallpaper-4.jpg" width="266" height="150" alt="">
		&lt;/a>
				</code></pre>
			</div>

			<footer style="margin-top: 40px;">
				&nbsp;
			</footer>
		</div>

		<lightbox></lightbox>

	</div>


</template>

<script>
	import LightboxDirective from './components/lightbox/LightboxDirective'


	import Todos from './components/Todos'
	import Carousel from './components/carousel/Carousel'
	import CarouselSlide from './components/carousel/CarouselSlide'
	import Tab from './components/tabs/Tab';
	import TabsContainer from './components/tabs/TabsContainer';
	import Tags from './components/tags/Tags'
	import Lightbox from './components/lightbox/Lightbox'

	export default {
		name: 'app',
		components: {
			Todos,
			Carousel,
			CarouselSlide,
			Tab,
			TabsContainer,
			Tags,
			Lightbox
		},
		data() {
			return {
				rioSlides: 5,
				rioAutoplay: true,
				rioDuration: 2500
			}
		},
		watch: {
			rioSlides(val, oldVal) {
				if (val > 9) this.rioSlides = 1;
				if (val < 1) this.rioSlides = 9;
				var rioCarousel = this.$children[2];
				if (this.rioSlides != 1 && rioCarousel.activeSlide >= (this.rioSlides - 1)) rioCarousel.activeSlide--;
				document.querySelector('#rio span.token.tag:nth-of-type(2) .token.attr-value').innerHTML = (`<span class="token punctuation">="</span>n in ${val}</span class="token punctuation">"</span>`);
			},
			rioAutoplay(val) {
				var rioCarousel = this.$children[2];
				rioCarousel.auto = val;
				document.querySelector('#rio span.token.tag:nth-of-type(1) > .token.attr-value').innerHTML = (`<span class="token punctuation">="</span>${val}</span class="token punctuation">"</span>`);
			},
			rioDuration(val, oldVal) {
				document.querySelector('#rio span.token.tag:nth-of-type(1) > .token.attr-value:nth-child(3n)').innerHTML = (`<span class="token punctuation">="</span>${val}</span class="token punctuation">"</span>`);
			}
		},
		mounted() {

		}
	}

</script>

<style src="./app.scss" lang="scss">

</style>
