import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
	bind(el, binding) {
		
		store.addImage(el.getAttribute('href'));
		
		el.addEventListener('click', function(e) {
			e.preventDefault();
			store.setActiveImage(el.getAttribute('href'));
			
		})
	}
});
