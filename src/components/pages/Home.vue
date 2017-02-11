<template>
	<div class="container">
		<h3>Développeur fullstack / Webdesigner</h3>
		<p>Passionné par le développement depuis le plus jeune, j'ai depuis maintenant plusieurs années appris les
			différentes technologies web qui nous entourent.
			Étant de nature <strong>curieux</strong> et <strong>autodidacte</strong>, j'ai beaucoup appris lors de mon
			temps libre.</p>
		<p>Tous les composants utilisés sur mon site web (Lightbox, Carousel, système de tri de projets etc...) ont été créé et designé par moi même dans le cadre de mon apprentissage de <strong>VueJS</strong>.</p>
		<p>De plus, je suis actuellement étudiant à l'<strong>Université Paris-Est Marne-la-Vallée</strong>, en DUT Métiers du Multimédia et de l'Internet. J'ai donc aussi
		la chance de pouvoir pratiquer aussi tout ce qui est développement web dans le cadre de ma formation.</p>
		<p>N'hésitez pas à jeter un oeil à mon <a href="https://github.com/Liinkiing">GitHub</a></p>
		<p style="line-height: 3rem;"><transition name="fade" tag="span" mode="out-in">
			<span :key="language" class="language">{{ language }}</span>
		</transition> est un
			<transition name="fade" tag="span" mode="out-in">
				<span :key="type" class="language">{{ type }}</span>
			</transition>
			que je maîtrise / je suis à l'aise

		</p>

	</div>
</template>
<style lang="scss">


	span.language {
		font-size: 1.1rem;
		position: relative;
		font-family: 'Hack', monospace;
		margin-left: 5px;
		margin-bottom: 20px;
		margin-right: 5px;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			height: 3px;
			width: 100%;
			background: whitesmoke;
		}
	}



</style>
<script>

	import Todos from '../Todos'
	import lbstore from '../lightbox/LightboxStore'


	export default {
		components: {
			Todos
		},
		data() {
			return {
				langs: [
					{'C#' : 'langage'},
					{'PHP' : 'langage'},
					{'HTML / CSS' : 'langage'},
					{'JavaScript' : 'langage'},
					{'Java' : 'langage'},
					{'VB.net' : 'langage'},
					{'ASP.net' : 'framework'},
					{'Symfony' : 'framework PHP'},
					{'Laravel' : 'framework PHP'},
					{'Bootstrap' : 'framework CSS'},
					{'Semantic-ui' : 'framework CSS'}
				],
				language: '',
				type: ''
			}
		},

		mounted() {
			lbstore.close();
			this.language = Object.keys(this.langs[0])[0];
			this.type = this.langs[0][Object.keys(this.langs[0])[0]];
			let i = 0;
			window.setInterval(() => {
				i++;
				if (i > this.langs.length - 1) i = 0;
				this.language = Object.keys(this.langs[i])[0];
				this.type = this.langs[i][Object.keys(this.langs[i])[0]];
			}, 3000);
		}
	}
</script>
