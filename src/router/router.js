import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomePage from '../components/pages/Home';
import TodoPage from '../components/pages/Todo';
import PortfolioPage from '../components/pages/Portfolio';
import HobbiesPage from '../components/pages/Hobbies';
import ExamplesPage from '../components/pages/Examples';
import ProjectDetailPage from '../components/pages/ProjectDetail';
import ErrorPage from '../components/pages/Error';

const routes = [
	{path: '/', name: 'homepage', component: HomePage},
	{path: '/projects', name: 'portfolio', component: PortfolioPage},
	{path: '/hobbies', name: 'hobbies', component: HobbiesPage},
	{path: '/examples', name: 'examples', component: ExamplesPage},
	{path: '/project/:slug', name: 'project_show', component: ProjectDetailPage},
	{path: '*', name: 'error', component: ErrorPage}
];

export default new VueRouter({
	mode: 'history',
	routes: routes
});
