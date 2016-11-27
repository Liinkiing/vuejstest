import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
	bind(el, binding) {

		store.addImage(el.getAttribute('href'), binding.value.title, binding.value.desc, el.querySelector('img').getAttribute('src'), (binding.value.group == undefined) ? 'default' : binding.value.group);

		el.addEventListener('click', function(e) {
			e.preventDefault();
			let group = (binding.value.group == undefined) ? 'default' : binding.value.group;
			console.log(group);
			store.open(el.getAttribute('href'), group);

		})
	},
	unbind(el) {
		store.removeImage(el.getAttribute('href'));
	}
});
