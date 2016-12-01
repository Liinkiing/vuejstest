import Vue from 'vue'
import App from './App'
import VueLocalStorage from 'vue-localstorage'
import router from './router/router';


Vue.use(VueLocalStorage);



Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max);
};

/* eslint-disable no-new */
new Vue({
	router: router,
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
