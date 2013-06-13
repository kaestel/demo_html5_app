
// Enable ajax based navigation

u.navigation = function(page) {

	
	

	page._navigation_initiated = function() {
		u.bug("page _navigation_ready")


		u.h.catchEvent(page.cN.navigate, page.cN);


		
//		this.ready();
	}


	// content state controller
// 	page.cN.ready = function() {
// //		u.bug("page ready:" + u.hc(this.page, "ready") + "content ready:" + u.hc(this, "ready"));
// 		// if all is good and ready to go
// 		if(u.hc(this.page, "ready") && u.hc(this, "ready")) {
// //			u.bug("fade content up");
// 
// 			if(u.gcs(this, "opacity") != 1) {
// 				u.a.transition(this, "opacity 0.5s ease-in");
// 				u.a.setOpacity(this, 1);
// 			}
// 			else {
// 				u.a.transition(this, "none");
// 			}
// 
// 			// custom - show footer
// 			u.qs("#page").fN.show();
// 		}
// 	}



	window.scrollToTopHandler = function(event) {

		this._current_scroll_parent.t_scroll = u.t.setTimer(this._current_scroll_parent, this._current_scroll_parent.scrollToTop, 50);
		
	}

	page.cN.scrollToTop = function(start) {

		if(start) {

			window._current_scroll_parent = this;
			u.e.addEvent(window, "scroll", window.scrollToTopHandler);

			// custom - hide footer
			u.qs("#page").fN.hide();
		}
		if(u.scrollY() > 1) {
			// if scroll to top function is active and scrolling position is larger than last position, it 
			// must mean user is interacting with browser - so cancel auto-scroll
			if(!window._scroll_to_y || window._scroll_to_y >= u.scrollY()) {
				window._scroll_to_y = Math.floor(u.scrollY()-u.scrollY()/4);

				// TODO: timer is not set while iOS scrolling is in progress
				// could be fixed by adding scroll event, and setting timer on this event? But this might conflict with other scroll-handling

				window.scrollTo(0, window._scroll_to_y);
//				this.t_scroll = u.t.setTimer(this, this.scrollToTop, 50);
			}
			else {
				u.t.resetTimer(this.t_scroll);
				u.e.removeEvent(window, "scroll", window.scrollToTopHandler);
				window._scroll_to_y = false;
				this.changeContent();
			}
		}
		else {
			u.t.resetTimer(this.t_scroll);
			u.e.removeEvent(window, "scroll", window.scrollToTopHandler);
			window._scroll_to_y = false;
			window.scrollTo(0, 0);
			this.changeContent();
		}
	}

	page.cN.changeContent = function() {
//		u.bug("page.cN.changeContent")
		this.Response = function(response) {
//			u.bug("navigate response:" + this.url)

			// stats
			u.stats.pageView(this.url);

			// set body class
			u.setClass(document.body, response.body_class);

			// replace content
			this.innerHTML = u.qs("#content", response).innerHTML;

			// set title
			document.title = response.head_title;

			// init content - will callback to ready, when done
			u.init(this);
		}

		// capture transition event and load new content, when fadeout is done
		this.transitioned = function(event) {
//			u.bug("transitioned")
			this.paths = new Array();
			this.paths[0] = u.h.getCleanHash(location.hash, 1);


//			u.bug("navigate request:" + this.paths[0]);
			this.transitioned = null;

			// Firefox prefers if I reset transition - otherwise fadeup flickers
			u.a.transition(this, "none");

			// request new content
			u.Request(this, u.h.getCleanHash(location.hash));
		}

		u.a.transition(this, "opacity 0.5s ease-in");
		// if element is already faded out
		if(u.gcs(this, "opacity") == 0) {
//			u.bug("quick transition");
			this.transitioned();
		}
		// start fade out transition
		else {
//			u.bug("fade out")
			u.a.setOpacity(this, 0);
		}
	}



	page.cN.navigate = function() {
//		u.bug("navigate:" + u.h.getCleanHash(location.hash) + "("+ (this.paths ? this.paths[0] : "") + ")")

		// cancel scroll handler
//		window.onscroll = null;


		if(this.scene && typeof(this.scene._cleanup) == "function") {
			this.scene._cleanup();
		}

// 
// 		// execute navigation only if first level changes
// 		if(!this.paths || this.paths[0] != u.h.getCleanHash(location.hash, 1)) {
// 
// //			u.bug("base url:" + u.h.getCleanHash(location.hash));
// 			
// 			// content is no longer ready
// 			u.rc(this, "ready");
// 			
// 			this.scrollToTop(true);
// 
// 			// handle oad-response when returned after load and fade back in
// 
// 
// 		}
// 		else {
// //			u.bug("2. level url:" + u.h.getCleanHash(location.hash));
// 
// 			// forward navigation event to scene
// 			if(this.scene && this.scene.parentNode && typeof(this.scene.navigate) == "function") {
// 				this.scene.navigate();
// 			}
// 
// 		}

	}




	// set default hash if no hash value is present
	// no furter navigation - initialize content
	if(location.hash.length < 2) {
		u.bug("set hash + init content")
		location.hash = u.h.getCleanUrl(location.href);
		u.init(page.cN);
	}
	// if different hash and url, load content based on hash
	else if(u.h.getCleanHash(location.hash) != u.h.getCleanUrl(location.href)) {
		u.bug("init navigate")
		page.cN.navigate();
	}
	// hash and url is aligned - init existing content
	else {
		u.bug("init content")
		u.init(page.cN);
	}



	// set hash event handler with small delay to avoid redirecting when actually just trying to update HASH
	u.t.setTimer(page, page._navigation_initiated, 100);


}