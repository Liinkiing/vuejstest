import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
	bind(el, binding) {
		let i = store.addImage(el.getAttribute('href'), binding.value.title, binding.value.desc, el.querySelector('img').getAttribute('src'));
		el.addEventListener('click', function(e) {
			e.preventDefault();
			store.open(i);
			
		})
	}
});
