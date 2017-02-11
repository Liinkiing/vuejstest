class AppStore {


	constructor() {
		this.state = {
			lightboxOpened: false
		};
	}

	initStore() {
		this.nav = document.querySelector('nav.aside');
		this.pageView = document.querySelector('.view-wrapper');
		this.body = document.querySelector('body');
		this.container = document.querySelector('.container.view');
		this.header = document.querySelector('header.current-page');
	}


	resetSelectors() {
		this.nav = document.querySelector('nav.aside');
		this.pageView = document.querySelector('.view-wrapper');
		this.body = document.querySelector('body');
		this.container = document.querySelector('.container.view');
		this.header = document.querySelector('header.current-page');
	}

	closeMenu() {
		this.nav.classList.remove('opened');
		this.pageView.classList.remove('menu-opened');
		// this.pageView.classList.add('menu-closed');
		// this.nav.classList.add('closed');
	}
	openMenu() {
		// this.nav.classList.remove('closed');
		// this.pageView.classList.remove('menu-closed');
		this.pageView.classList.add('menu-opened');
		this.nav.classList.add('opened')
	}
	toggleMenu() {
		this.isMenuOpened() ? this.closeMenu() : this.openMenu();
	}

	//noinspection JSMethodCanBeStatic
	isMobile() {
		let md = new MobileDetect(window.navigator.userAgent);
		return window.innerWidth <= 720 ||  md.phone() != null;
	}

	isMenuOpened() {
		return this.nav.classList.contains('opened');
	}
}

export default new AppStore()
