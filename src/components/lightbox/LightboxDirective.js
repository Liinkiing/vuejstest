import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
	bind(el, binding) {
		
		store.addImage(el.getAttribute('href'), binding.value.title, binding.value.desc, el.querySelector('img').getAttribute('src'), (binding.value.group == undefined) ? 'default' : binding.value.group);
		
		el.addEventListener('click', function(e) {
			e.preventDefault();
			store.open(el.getAttribute('href'), (binding.value.group == undefined) ? 'default' : binding.value.group);
			
		})
	},
	unbind(el) {
		store.removeImage(el.getAttribute('href'));
	}
});
