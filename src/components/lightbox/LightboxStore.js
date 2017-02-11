import appStore from '../../AppStore';


class LightboxStore {

	constructor() {
		this.state = {
			index: null,
			images: {},
			direction: 'in',
			group: 'default',
			count: 0
		}
	}


	addImage(_url, _title, _desc, _thumbnail, _group) {
		if(this.state.images[_group] == undefined) {
			this.state.images[_group] = [];
		}
		return this.state.images[_group].push({url: _url, title: _title, desc: _desc, thumbnail: _thumbnail, group: _group, index: this.state.images[_group].length}) - 1;
	}

	editImage(_url, _title, _desc, _thumbnail, _group, _index) {
		this.state.images[_group][_index] = {url: _url, title: _title, desc: _desc, thumbnail: _thumbnail, group: _group, index: _index}
	}

	removeImage(url, group) {
		this.state.images[group]= this.state.images[group].filter((image) => image.url != url)
	}
	removeAll() {
		this.state.images = {}
	}
	open(url, group) {
		appStore.state.lightboxOpened = true;
		this.state.group = group;
		this.state.count = this.state.images[group].length;
		let newIndex = this.state.images[this.state.group].findIndex(image => image.url == url);
		if(this.state.index > newIndex) this.state.direction = "out";
		else this.state.direction = "in";
		this.state.index = newIndex;
	}

	close() {
		appStore.state.lightboxOpened = false;
		this.state.index = null ;
	}

	getIndex(url, group) {
		if(group == undefined) group = 'default';
		return this.state.images[group].findIndex(image => image.url == url);
	}

	prev() {
		this.state.direction = 'out';
		this.state.index--;
		if(this.state.index < 0) this.state.index = this.state.images[this.state.group].length - 1;
		else if(this.state.index > this.state.images[this.state.group].length - 1) this.state.index = 0;
	}

	next() {
		this.state.direction = 'in';
		this.state.index++;
		if(this.state.index < 0) this.state.index = this.state.images[this.state.group].length - 1;
		else if(this.state.index > this.state.images[this.state.group].length - 1) this.state.index = 0;

	}



}

export default new LightboxStore()
