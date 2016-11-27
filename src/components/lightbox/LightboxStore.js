class LightboxStore {
	
	constructor() {
		this.state = {
			index: null,
			images: [{}],
			direction: 'in'
		}
	}
	
	
	addImage(_url, _title, _desc, _thumbnail) {
		return this.state.images.push({url: _url, title: _title, desc: _desc, thumbnail: _thumbnail, index: this.state.images.length}) - 1;
	}
	
	open(i) {
		if(this.state.index > i) this.state.direction = "out";
		else this.state.direction = "in";
		this.state.index = i;
	}
	
	close() {
		this.state.index = null ;
	}
	
	prev() {
		this.state.direction = 'out';
		this.state.index--;
		if(this.state.index < 1) this.state.index = this.state.images.length - 1;
		else if(this.state.index > this.state.images.length - 1) this.state.index = 1;
	}
	
	next() {
		this.state.direction = 'in';
		this.state.index++;
		if(this.state.index < 1) this.state.index = this.state.images.length - 1;
		else if(this.state.index > this.state.images.length - 1) this.state.index = 1;
		
	}
	
	
	
}

export default new LightboxStore()
