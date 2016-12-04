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
			index: null,
			projects: [],
			filteredProjects: []
		};
		this.state.filteredProjects = this.state.projects;
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
	
	filter(category) {
		this.state.filteredProjects = _.filter(this.state.projects, (project) => project.category.toLowerCase() == category.toLowerCase());
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
