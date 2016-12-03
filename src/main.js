import Vue from 'vue'
import App from './App'
import VueLocalStorage from 'vue-localstorage'
import router from './router/router';


Vue.use(VueLocalStorage);



Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max);
};

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.slugify = function ()
{
	return this.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '');            // Trim - from end of text
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
