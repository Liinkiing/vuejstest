import Vue from 'vue'
import App from './App'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage);

/* eslint-disable no-new */
new Vue({

	localStorage: {
		todos: {
			type: Array,
			default: []
		}
	},
	el: '#app',
	template: '<App/>',
	components: {App}
});
