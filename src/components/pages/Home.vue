<template>
		<div class="container">
			<h3>Développeur fullstack / Webdesigner</h3>
			<p>Passionné par le développement depuis le plus jeune, j'ai depuis maintenant plusieurs années appris les différentes technologies web qui nous entourent.
				Étant de nature <strong>curieux</strong> et <strong>autodidacte</strong>, j'ai beaucoup appris lors de mon temps libre.</p>
			<p>Je maîtrise / je suis à l'aise avec le langage
				<transition name="fade" tag="span" mode="out-in">
					<span :key="language" class="language">{{ language }}</span>
				</transition>
				</p>
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
				if(i > this.languages.length - 1) i = 0;
				console.log(i);
				this.language = this.languages[i];
			}, 3000);
		}
	}
</script>
