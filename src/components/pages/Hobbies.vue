<template>
		<div class="container">
			<h3>Mes hobbies</h3>
			<div class="grid has-gutter-xl">
				<div class="feature">
					<div class="icon-container"><i class="icon music"></i></div>
					<h4>Musique</h4>
					<p>J'aime beaucoup composer de la musique. En effet, durant mon temps libre, je passe beaucoup de temps à crééer de la musique.
					J'utilise pour cela le logiciel <strong>FL Studio</strong>, et je possède un <a href="https://soundcloud.com/haplegrand">soundcloud</a>.</p>
				</div>
				<div class="feature">
					<div class="icon-container"><i class="icon write"></i></div>
					<h4>Écriture</h4>
					<p>Lors de mon temps libre, j'aime parfois écrire des petites histoires ou encore des scénarios de jeuvidéo. En effet, étant plus jeune, je m'amusais
					beaucoup à écrire le scénario d'un jeu fictif que je crééais avec un ami à moi.</p>
				</div>
				<div class="feature">
					<div class="icon-container"><i class="icon code"></i></div>
					<h4>Développement</h4>
					<p>Le développement est une passion et en même temps un hobbie qui me prends beaucoup de temps. J'adore m'informer constamment des nouveautés dans ce
					domaine, me former aux nouvelles technologies, lire des articles etc...</p><p>De plus, j'aime concevoir, en partant de rien, mes sites web et mes diverses créations.</p>
				</div>
			</div>
		</div>
</template>
<style lang="scss">

	@import "../../assets/style/components/variables";

	.feature {
		margin-top: 20px;
		text-align: center;
		margin-bottom: 30px;
		& .icon-container {
			position: relative;
			display: inline-block;
			padding: 20px;
			&:before {
				transition: all 0.3s ease-in;
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.08);
				border-radius: 50%;
				z-index: 1;
			}
			&:after {
				transition: all 0.3s ease-in;
				content: '';
				position: absolute;
				left: -10%;
				top: -10%;
				width: 120%;
				height: 120%;
				background: rgba(0, 0, 0, 0.05);
				border-radius: 50%;
			}
			z-index: 1;
			& i.icon {
				font-size: 2.5rem;
				line-height: 2.5rem;
				opacity: 0.8;
			}
			&:hover {
				cursor: pointer;
				&:after {
					transform: scale(0);
				}
				&:before {
					transform: scale(1.1);
				}
			}

		}
		& p {
			text-align: left;
		}
		& h4 {
			margin-top: 1rem;
			padding-bottom: 1rem;
			border-bottom: 3px solid $dark-teal-color;
			@media screen and (max-width: 720px){
				width: 60%;
				margin: 1.2rem auto;
			}
		}
	}



</style>
<script>

	import lbstore from '../lightbox/LightboxStore'

	export default {
		mounted() {
			lbstore.close();
		}

	}
</script>
