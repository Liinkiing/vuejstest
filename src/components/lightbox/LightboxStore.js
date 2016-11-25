class LightboxStore {
	
	constructor() {
		this.state = {
			activeUrl: null,
			images: []
			
		}
	}
	
	setActiveImage(url) {
		this.state.activeUrl = url;
	}
	
	addImage(url) {
		this.state.images.push(url);
	}
	
}

export default new LightboxStore()
