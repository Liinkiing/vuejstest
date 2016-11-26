<template>
	<div id="app">

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
			<carousel style="width: 48%; display: inline-block;" :autoplay="rioAutoplay" :slide-duration="rioDuration">
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
												<tab header="sous tab 2" :index="1">Des onglets dans des onglets dans
													des onglets dans des onglets dans des onglets
													<tabs-container>
														<tab header="sous tab" :index="0">XD</tab>
														<tab header="sous tab 2" :index="1">Des onglets dans des onglets
															dans des onglets dans des onglets dans des onglets dans des
															onglets
															<tabs-container>
																<tab header="sous tab" :index="0">XD</tab>
																<tab header="sous tab 2" :index="1">Des onglets dans des
																	onglets dans des onglets dans des onglets dans des
																	onglets dans des onglets dans des onglets
																	<tabs-container>
																		<tab header="sous tab" :index="0">XD</tab>
																		<tab header="sous tab 2" :index="1">Des onglets
																			dans des
																			onglets dans des onglets dans des onglets
																			dans des
																			onglets dans des onglets dans des onglets
																			<tabs-container>
																				<tab header="sous tab" :index="0">XD
																				</tab>
																				<tab header="sous tab 2" :index="1">Des
																					onglets dans des
																					onglets dans des onglets dans des
																					onglets dans des
																					onglets dans des onglets dans des
																					onglets
																					<tabs-container>
																						<tab header="sous tab"
																							 :index="0">XD
																						</tab>
																						<tab header="sous tab 2"
																							 :index="1">Des onglets dans
																							des
																							onglets dans des onglets
																							dans des onglets dans des
																							onglets dans des onglets
																							dans des onglets
																							<tabs-container>
																								<tab header="sous tab"
																									 :index="0">XD
																								</tab>
																								<tab header="sous tab 2"
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
																											Des onglets
																											dans des
																											onglets dans
																											des onglets
																											dans des
																											onglets dans
																											des
																											onglets dans
																											des onglets
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

		</div>

		<footer style="margin-top: 40px;">
			&nbsp;
		</footer>
	</div>


</template>

<script>
	import Todos from './components/Todos'
	import Carousel from './components/carousel/Carousel'
	import CarouselSlide from './components/carousel/CarouselSlide'
	import Tab from './components/tabs/Tab';
	import TabsContainer from './components/tabs/TabsContainer';
	import Tags from './components/tags/Tags'

	export default {
		name: 'app',
		components: {
			Todos,
			Carousel,
			CarouselSlide,
			Tab,
			TabsContainer,
			Tags
		},
		data() {
			return {
				rioSlides: 5,
				rioAutoplay: true,
				rioDuration: 2500,
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
		}
	}

</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	body {
		font: 14px 'Avenir LT Std 35 Light', Helvetica, Arial, sans-serif;
		line-height: 1.4em;
		background: #f5f5f5;
		color: #4d4d4d;
		min-width: 230px;
		max-width: 1920px;
		margin: 0 auto;
		-webkit-font-smoothing: antialiased;
		-moz-font-smoothing: antialiased;
		font-smoothing: antialiased;
		font-weight: 300;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;

	}
</style>
