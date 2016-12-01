<template>
	<div id="app">

		<ul>
			<li><router-link to="/">Accueil</router-link></li>
			<li><router-link to="/todo">Démonstration Lightbox</router-link></li>
		</ul>

		<transition name="fade-image">
			<router-view class="view"></router-view>
		</transition>

	</div>


</template>

<script></script>

<style src="./app.scss" lang="scss">

</style>
