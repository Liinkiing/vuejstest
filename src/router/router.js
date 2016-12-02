import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomePage from '../components/pages/Home';
import TodoPage from '../components/pages/Todo';
import AboutPage from '../components/pages/About';
import ProjectsPage from '../components/pages/Projects';
import HobbiesPage from '../components/pages/Hobbies';

const routes = [
	{path: '/', component: HomePage},
	{path: '/about', component: AboutPage},
	{path: '/projects', component: ProjectsPage},
	{path: '/hobbies', component: HobbiesPage},
	{path: '/todo', component: TodoPage}
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});
