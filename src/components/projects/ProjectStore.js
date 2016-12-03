class ProjectStore {
	
	constructor() {
		this.state = {
			index: null,
			projects: [
				{thumbnail: "http://lorempicsum.com/futurama/350/220/1", title: "Slender", shortDescription: "TestDesc", category: "Photo", language: "C#", date: "mtn", images: [
					"http://lorempicsum.com/rio/350/220/1", "http://lorempicsum.com/rio/350/220/2", "http://lorempicsum.com/rio/350/220/3", "http://lorempicsum.com/rio/350/220/4", "http://lorempicsum.com/rio/350/220/5"
				]},
				{thumbnail: "http://lorempicsum.com/futurama/350/220/2", title: "Vitae", shortDescription: "TestDesc", category: "Science", language: "C#", date: "mtn", images: []},
				{thumbnail: "http://lorempicsum.com/futurama/350/220/3", title: "Marking", shortDescription: "TestDesc", category: "Photo", language: "C#", date: "mtn", images: []},
				{thumbnail: "http://lorempicsum.com/futurama/350/220/4", title: "DB Manager", shortDescription: "TestDesc", category: "Informatique", language: "C#", date: "mtn", images: []},
				{thumbnail: "http://lorempicsum.com/futurama/350/220/5", title: "Flyng Duck", shortDescription: "TestDesc", category: "Informatique", language: "C#", date: "mtn", images: []},
				{thumbnail: "http://lorempicsum.com/futurama/350/220/6", title: "My Tomatoes", shortDescription: "TestDesc", category: "Photo", language: "C#", date: "mtn", images: []},
				{thumbnail: "http://lorempicsum.com/futurama/350/220/7", title: "My Informatique", shortDescription: "TestDesc", category: "Informatique", language: "C#", date: "mtn", images: []},
			],
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
