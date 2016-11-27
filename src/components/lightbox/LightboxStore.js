class LightboxStore {
	
	constructor() {
		this.state = {
			index: null,
			images: {},
			direction: 'in',
			group: null
		}
	}
	
	
	addImage(_url, _title, _desc, _thumbnail, _group) {
		if(this.state.images[_group] == undefined) {
			this.state.images[_group] = [];
		}
		return this.state.images[_group].push({url: _url, title: _title, desc: _desc, thumbnail: _thumbnail}) - 1;
	}
	
	removeImage(url, group) {
		this.state.images[group]= this.state.images[group].filter((image) => image.url != url)
	}
	open(url, group) {
		this.group = group;
		let newIndex = this.state.images[this.group].findIndex(image => image.url == url);
		if(this.state.index > newIndex) this.state.direction = "out";
		else this.state.direction = "in";
		this.state.index = newIndex;
	}
	
	close() {
		this.state.index = null ;
	}
	
	prev() {
		this.state.direction = 'out';
		this.state.index--;
		if(this.state.index < 0) this.state.index = this.state.images[this.group].length - 1;
		else if(this.state.index > this.state.images[this.group].length - 1) this.state.index = 0;
	}
	
	next() {
		this.state.direction = 'in';
		this.state.index++;
		if(this.state.index < 0) this.state.index = this.state.images[this.group].length - 1;
		else if(this.state.index > this.state.images[this.group].length - 1) this.state.index = 0;
		
	}
	
	
	
}

export default new LightboxStore()
