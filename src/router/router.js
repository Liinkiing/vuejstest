import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomePage from '../components/pages/Home';
import TodoPage from '../components/pages/Todo';

const routes = [
	{path: '/', component: HomePage},
	{path: '/todo', component: TodoPage}
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});
