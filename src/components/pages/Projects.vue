<template>
		<div>
			<h3>Je suis les projets</h3>
			<a href="http://cdn.wallpapersafari.com/33/5/9TPZ3I.jpg" v-lightbox="{group: 'nature', title: 'Je suis un titre et la première image'}">
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
		</div>
</template>
<style lang="scss">

	@import "../../assets/style/components/variables";





</style>
<script>

	import LightboxDirective from '../lightbox/LightboxDirective'

	export default {

	}
</script>
