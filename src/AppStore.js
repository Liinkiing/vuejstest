class AppStore {

	constructor() {
		this.state = {
			
		}
	}
	
	initStore() {
		this.nav = document.querySelector('nav.aside');
		this.pageView = document.querySelector('.view-wrapper');
		this.body = document.querySelector('body');
	}
	
	
	
	
	closeMenu() {
		console.log(this.nav, this.pageView);
		this.nav.classList.remove('opened');
		this.pageView.classList.remove('menu-opened');
		this.pageView.classList.add('menu-closed');
		this.nav.classList.add('closed');
	}
	openMenu() {
		this.nav.classList.remove('closed');
		this.pageView.classList.remove('menu-closed');
		this.pageView.classList.add('menu-opened');
		this.nav.classList.add('opened')
	}
	toggleMenu() {
		this.isMenuOpened() ? this.closeMenu() : this.openMenu();
	}
	
	isMenuOpened() {
		return this.nav.classList.contains('opened');
	}
}

export default new AppStore()
