import Vue from 'vue'
import App from './App'
import VueLocalStorage from 'vue-localstorage'
import VueAnimatedList from 'vue-animated-list'

Vue.use(VueLocalStorage);
Vue.use(VueAnimatedList);


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
