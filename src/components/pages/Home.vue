<template>
	<div class="container">
		<h3>Développeur fullstack / Webdesigner</h3>
		<p>Passionné par le développement depuis le plus jeune, j'ai depuis maintenant plusieurs années appris les
			différentes technologies web qui nous entourent.
			Étant de nature <strong>curieux</strong> et <strong>autodidacte</strong>, j'ai beaucoup appris lors de mon
			temps libre.</p>
		<p style="line-height: 3rem;"><transition name="fade" tag="span" mode="out-in">
			<span :key="language" class="language">{{ language }}</span>
		</transition> est un langage que je maîtrise / je suis à l'aise

		</p>

		<hr>
		<div class="center">
			<img src="../../assets/vuejs-seeklogo.com.svg" alt="VueJS Logo">
		</div>
	</div>
</template>
<style lang="scss">


	span.language {
		font-size: 1.1rem;
		position: relative;
		font-family: 'Hack', monospace;
		margin-left: 5px;
		margin-bottom: 20px;
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

	export default {
		components: {
			Todos
		},
		data() {
			return {
				languages: ['C#', 'PHP', 'HTML / CSS', 'JavaScript', 'Java', 'ASP.Net', 'VB.Net'],
				language: ''
			}
		},

		mounted() {
			this.language = this.languages[0];
			window.setInterval(() => {
				let i = this.languages.indexOf(this.language) + 1;
				if (i > this.languages.length - 1) i = 0;
				this.language = this.languages[i];
			}, 3000);
		}
	}
</script>
