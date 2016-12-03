class ProjectStore {
	
	constructor() {
		this.state = {
			index: null,
			projects: [
				{thumbnail: "TestThumb", title: "Photo 1l", shortDescription: "TestDesc", category: "Photo", language: "C#", date: "mtn"},
				{thumbnail: "TestThumb", title: "Science 1j", shortDescription: "TestDesc", category: "Science", language: "C#", date: "mtn"},
				{thumbnail: "TestThumb", title: "Photo 2b", shortDescription: "TestDesc", category: "Photo", language: "C#", date: "mtn"},
				{thumbnail: "TestThumb", title: "Informatique 1w", shortDescription: "TestDesc", category: "Informatique", language: "C#", date: "mtn"},
				{thumbnail: "TestThumb", title: "Informatique 2e", shortDescription: "TestDesc", category: "Informatique", language: "C#", date: "mtn"},
				{thumbnail: "TestThumb", title: "Photo 3a", shortDescription: "TestDesc", category: "Photo", language: "C#", date: "mtn"},
				{thumbnail: "TestThumb", title: "Informatique 3aze", shortDescription: "TestDesc", category: "Informatique", language: "C#", date: "mtn"},
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
	
	filter(category) {
		this.state.filteredProjects = _.filter(this.state.projects, (project) => project.category.toLowerCase() == category.toLowerCase());
	}
}

export default new ProjectStore();
