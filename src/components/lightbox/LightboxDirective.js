import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
	bind(el, binding) {

		let title, desc, group;
		if(binding.value != undefined) {
			title = binding.value.title == undefined ? null : binding.value.title;
			desc = binding.value.desc == undefined ? null : binding.value.desc;
			group = (binding.value.group == undefined) ? 'default' : binding.value.group;
		} else {
			title = null;
			desc = null;
			group = 'default';
		}

		store.addImage(el.getAttribute('href'), title , desc, el.querySelector('img').getAttribute('src'), group);

		el.addEventListener('click', function(e) {
			e.preventDefault();
			store.open(el.getAttribute('href'), group);

		})
	},
	unbind(el) {
		store.removeImage(el.getAttribute('href'));
	}
});
