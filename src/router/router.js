import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomePage from '../components/pages/Home';
import TodoPage from '../components/pages/Todo';
import AboutPage from '../components/pages/About';
import PortfolioPage from '../components/pages/Portfolio';
import HobbiesPage from '../components/pages/Hobbies';
import ExamplesPage from '../components/pages/Examples';
import ProjectDetailPage from '../components/pages/ProjectDetail';
import ErrorPage from '../components/pages/Error';

const routes = [
	{path: '/', component: HomePage},
	{path: '/about', component: AboutPage},
	{path: '/portfolio', name: 'project_list', component: PortfolioPage},
	{path: '/hobbies', component: HobbiesPage},
	{path: '/examples', component: ExamplesPage},
	{path: '/todo', component: TodoPage},
	{path: '/project/:slug', name: 'project_show', component: ProjectDetailPage},
	{path: '*', name: 'error', component: ErrorPage}
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});
