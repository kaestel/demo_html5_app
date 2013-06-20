
// Enable ajax based navigation

// flow

// click internal link
// updates hash
// hash envokes navigate
// if 1st level is changed tells #content navigation has been invoked 
// if 2nd level is changed tells .scene navigation has been invoked 

u.navigation = function(page, options) {

	// this._nav_navigate_callback = null;
	// 
	// // additional info passed to function as JSON object
	// if(typeof(options) == "object") {
	// 	var argument;
	// 	for(argument in options) {
	// 
	// 		switch(argument) {
	// 			case "navigate_callback"	: this._nav_navigate_callback		= options[argument]; break;
	// 		}
	// 
	// 	}
	// }

	// default starting path
	page._nav_path = "/";

	page._navigate = function() {

		var url = u.h.getCleanHash(location.hash);

//		u.bug("navigate:" + url + "("+ (this._nav_path) + ")")

		// stats
		u.stats.pageView(url);


		// direct navigation callback to correct level
		// first request or new base-level
		if(!this._nav_path || this._nav_path != u.h.getCleanHash(location.hash, 1)) {

			// forward navigation event to #content
			if(this.cN && typeof(this.cN.navigate) == "function") {
				this.cN.navigate(url);
			}

		}
		else {

			// forward navigation event to .scene
			if(this.cN.scene && this.cN.scene.parentNode && typeof(this.cN.scene.navigate) == "function") {
				this.cN.scene.navigate(url);
			}

		}

		// remember base-level
		this._nav_path = u.h.getCleanHash(location.hash, 1);
	}


	page.navigate = function(url, node) {
//		u.bug("url:" + url + ", " + u.nodeId(node))

		this.hash_node = node ? node : false;
		location.hash = u.h.getCleanUrl(url);

	}


	// set default hash if no hash value is present
	// no further navigation - initialize content
	if(location.hash.length < 2) {
//		u.bug("set hash + init content")
		
		page.navigate(location.href, page);
//		location.hash = u.h.getCleanUrl(location.href);
		u.init(page.cN);
	}
	// if different hash and url, load content based on hash
	else if(u.h.getCleanHash(location.hash) != u.h.getCleanUrl(location.href)) {
//		u.bug("init navigate:" + u.h.getCleanHash(location.hash) + "!=" + u.h.getCleanUrl(location.href) + "; " + u.h.getCleanHash(location.href))
		page._navigate();
	}
	// hash and url is aligned - init existing content
	else {
//		u.bug("init content")
		u.init(page.cN);
	}


	page._initHash = function() {
//		u.bug("enable HASH navigation")

		u.h.catchEvent(page._navigate, page);
	}

	// set hash event handler with small delay to avoid redirecting when actually just trying to update HASH
	u.t.setTimer(page, page._initHash, 100);


}

