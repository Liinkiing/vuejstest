class ProjectStore {

	loadJSON(path, callback) {

		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', path, true);
		xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
				console.log(xobj);
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	}


	constructor() {
		this.state = {
			project: null,
			projects: [],
			filteredProjects: [],
			filter: 'all',
			platformsFilter: 'all',
			order: 'desc'
		};
		this.state.filteredProjects = this.state.projects;
	}


	setCurrentProject(project){
		this.state.project = project;
	}

	addProject(thumbnail, title, shortDescription, category, language, date) {
		this.state.projects.push({
			thumbnail,
			title,
			shortDescription,
			category,
			language,
			date
		})
	}

	loadProjects(callback) {
		console.log('chargement données');
		loadJSON("/static/data/projects.json", (response) => {
			this.state.projects = JSON.parse(response);
			this.state.projects = this.state.projects.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			this.state.filteredProjects = this.state.projects;
			console.log('chargement réussi');
			callback && callback();
		});
	}

	resetFilter() {
		this.state.filteredProjects = this.state.projects;
	}

	getProjectsByCategory() {
		return _.groupBy(this.state.projects, 'category');
	}



	getProject(name) {
		return this.state.projects.filter((project) => project.title.slugify() == name)[0];
	}

	filter(category, platforms = "all") {
		if(category == "all") this.state.filteredProjects = this.state.projects;
		else {
			this.state.filteredProjects = _.filter(this.state.projects, (project) => {
				let catTester = true;
				let platTester = true;

				if(category !== "all") {
					catTester = project.category.toLowerCase() == category.toLowerCase();
				}

				if(platforms !== "all") {
					if(Object.keys(project.platforms).length === 0) platTester = true;
					else if(category == 'site web' || category == 'plugin') platTester = true;
					else platTester = project.platforms.indexOf(platforms) > - 1;
				}
				return (catTester && platTester)
			})
		}

	}

	changeOrder(order, catFilter, platFilter) {
		switch (order) {
			case 'desc':
				this.state.projects = this.state.projects.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
				break;
			case 'asc':
				this.state.projects = this.state.projects.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
				break;
		}
		this.filter(catFilter, platFilter);
	}
}

export default new ProjectStore();

function loadJSON(path, callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', path, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
