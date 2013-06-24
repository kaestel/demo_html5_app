u.bug_force = true;
u.bug_console_only = true;

Util.Objects["page"] = new function() {
	this.init = function(page) {
//		u.bug("init page")


		if(u.hc(page, "i:page")) {

			// manual base initialization, remove i:page
			u.rc(page, "i:page");



			// header reference
			page.hN = u.qs("#header");
			page.hN.page = page;

			// content reference
			page.cN = u.qs("#content");
			page.cN.page = page;

			// navigation reference
			page.nN = u.qs("#navigation");
			page.nN.page = page;
			page.nN = u.ae(page.parentNode, page.nN);


			// footer reference
			page.fN = u.qs("#footer");
			page.fN.page = page;


			page.ready = function() {

//				u.bug("page ready")

				if(!this.intro) {
//					u.bug("intro is done")


					this.initHeader();
					this.initNavigation();


					// in case content loads faster than page, call content ready controller (content ready does not execute until both content and page is ready)
					this.cN.ready();
				}


				// page is ready to be shown - only show if not already shown
				if(!u.hc(this, "ready")) {

					// maximize height
					if(!u.qs(".desktop_wrapper")) {
						this.resetHeight();
					}

					// page is ready
					u.addClass(this, "ready");

					u.as(this, "display", "block");
					u.a.transition(this, "none");
					u.a.setOpacity(this, 1);

					//
					u.as(this.nN, "display", "block");
					// recalculate content height
					this.resized();

					// enable ajax navigation
					u.navigation(page);

				}
			}


			// reset height to make adressbar disappear
			page.resetHeight = function() {
//				u.bug("reset height:" + u.gcs(this, "height"));

				window.scrollTo(0, 0);

				if(u.gcs(this, "height") != "4000px") {
					u.a.setHeight(this, 4000);

					window.scrollTo(0, 0);
					
					this.t_reset_height = u.t.setTimer(this, this.resetHeight, 200);
				}
				else {
					var h = window.innerHeight;
					u.a.setHeight(this, h);
				}
			}


			page.cN.ready = function() {
				u.bug("page.cN ready:" + this.page.intro + ", " + u.hc(this.page, "ready") + ", " + u.hc(this, "ready"));

				if(!this.page.intro && u.hc(this.page, "ready") && u.hc(this, "ready")) {
					u.bug("page is actually ready:" + this.page);

					u.as(this, "display", "block");
					u.a.transition(this, "none");
					u.a.setOpacity(this, 1);


					if(u.qsa(".scene", this).length > 1) {
//						u.bug("replace scenes")
						u.bug("transition:" + u.nodeId(this.page) + "," + this.page.hash_node);

						var transition_method = this.page.hash_node && this.page.hash_node.transition_method ? this.page.hash_node.transition_method : this.transitions.fadeIn;

//						u.bug("transition_method:" + transition_method);
						transition_method();
					}
					else {
						u.bug("show scene")
						this.transitions.hard()
					}

				}
			}

			page.cN.navigate = function(url) {

				u.bug("navigation on content level")

				// content received
				this.response = function(response) {
					u.bug("navigate response:" + this.request_url + ", " + response.body_class)

					// set body class
					u.setClass(document.body, response.body_class.replace("i:validdevice", "").trim());
					// set title
					document.title = response.head_title;

					// insert .scene in #content
					var new_scene = u.qs(".scene", response);
//					u.as(new_scene, "display", "none");
					u.a.translate(new_scene, this.offsetWidth, 0);
//					u.as(new_scene, "display", "block");

					u.ae(this, new_scene);

					// init content - will callback to ready when done
					u.init(this);

				}
				// request new content
				u.request(this, u.h.getCleanHash(url));
			}

			page.cN.cleanScenes = function() {
				while(u.qsa(".scene", this).length > 1) {
					var scene = u.qs(".scene", this);
					scene.parentNode.removeChild(scene);
				}
			}

			page.cN.transitions = new Object();
			page.cN.transitions.page = page;
			page.cN.transitions.animateLeft = function() {
				u.bug("animateLeft transition")

				var scenes = u.qsa(".scene", this.page.cN);

				scenes[0].transitioned = function() {
					// clean up
					this.cN.cleanScenes();
				}

				u.a.translate(scenes[scenes.length-1], (this.page.offsetWidth), 0);
				u.a.setOpacity(scenes[scenes.length-1], 1);
				u.as(scenes[scenes.length-1], "display", "block");

				u.a.transition(scenes[0], "all 0.3s ease-out");
				u.a.translate(scenes[0], -(this.page.offsetWidth), 0);

				u.a.transition(scenes[scenes.length-1], "all 0.3s ease-out");
				u.a.translate(scenes[scenes.length-1], 0, 0);

			}
			page.cN.transitions.animateRight = function() {
				u.bug("animateRight transition")
				
				var scenes = u.qsa(".scene", this.page.cN);

				scenes[0].transitioned = function() {
					// clean up
					this.cN.cleanScenes();
				}

				u.a.translate(scenes[scenes.length-1], -(this.page.offsetWidth), 0);
				u.a.setOpacity(scenes[scenes.length-1], 1);
				u.as(scenes[scenes.length-1], "display", "block");

				u.a.transition(scenes[0], "all 0.3s ease-out");
				u.a.translate(scenes[0], (this.page.offsetWidth), 0);

				u.a.transition(scenes[scenes.length-1], "all 0.3s ease-out");
				u.a.translate(scenes[scenes.length-1], 0, 0);
				
			}


			// drop in from top
			page.cN.transitions.pullUp = function() {
				u.bug("pullUp transition")

				var scenes = u.qsa(".scene", this.page.cN);

				scenes[0].transitioned = function() {
					// clean up
					this.cN.cleanScenes();
				}

				u.as(scenes[0], "zIndex", 10);
				u.as(scenes[scenes.length-1], "zIndex", 5);

				u.a.translate(scenes[scenes.length-1], 0, 0);
				u.a.setOpacity(scenes[scenes.length-1], 1);
				u.as(scenes[scenes.length-1], "display", "block");

				u.a.transition(scenes[0], "all 0.5s ease-out");
				u.a.translate(scenes[0], 0, -(this.page.offsetHeight));

			}


			// drop in from top
			page.cN.transitions.dropDown = function() {
				u.bug("dropDown transition")

				var scenes = u.qsa(".scene", this.page.cN);

				scenes[scenes.length-1].transitioned = function() {
					// clean up
					this.cN.cleanScenes();
				}

				u.as(scenes[0], "zIndex", 5);
				u.as(scenes[scenes.length-1], "zIndex", 10);

				u.a.translate(scenes[scenes.length-1], 0, -(this.page.offsetHeight));
				u.a.setOpacity(scenes[scenes.length-1], 1);
				u.as(scenes[scenes.length-1], "display", "block");

				u.a.transition(scenes[scenes.length-1], "all 0.5s ease-out");
				u.a.translate(scenes[scenes.length-1], 0, 0);
			}

			// fade in - static position
			page.cN.transitions.fadeIn = function() {
				u.bug("fade in transition")

				// cleanup + enter on transition
				var scene = u.qs(".scene", this.page.cN);
				scene.transitioned = function(event) {
					u.bug("remove scene:" + u.nodeId(this));
					this.parentNode.removeChild(this);


					this.cN.cleanScenes();

					// enter new scene
					var scene = u.qs(".scene", this.cN);
					scene.transitioned = function(event) {
						this.transitioned = null;
						u.a.transition(this, "none");
					}

					u.a.setOpacity(scene, 0);
					u.a.translate(scene, 0, 0);
					u.as(scene, "display", "block");

					u.a.transition(scene, "all 0.3s ease-out");
					u.a.setOpacity(scene, 1);
					
				}

				if(u.gcs(scene, "opacity") != 0) {
					u.a.transition(scene, "all 0.3s ease-out");
					u.a.setOpacity(scene, 0);
				}
				else {
					scene.transitioned();
				}
			}

			// no transition out - just show
			page.cN.transitions.hard = function() {
				u.bug("hard transition")

				// clean up
				if(u.qsa(".scene", this.page.cN).length > 1) {
					u.bug("two scenes - remove first")
					var scene = u.qs(".scene");
					scene.parentNode.removeChild(scene);
				}

				this.page.cN.cleanScenes();

				// enter new scene
				var scene = u.qs(".scene", this.page.cN);
				scene.transitioned = function(event) {
					this.transitioned = null;
					u.a.transition(this, "none");
				}
				u.a.setOpacity(scene, 0);
				u.a.translate(scene, 0, 0);
				u.as(scene, "display", "block");

				u.a.transition(scene, "all 0.3s ease-out");
				u.a.setOpacity(scene, 1);
			}


			// header elements
			page.hN.bn_nav = u.qs("li.navigation", this.hN);
			page.hN.bn_nav.page = page;

			page.hN.bn_nav.clicked = function(event) {
//					u.bug("bn_nav clicked")
				u.e.kill(event);

				this.page.transitioned = function() {
					this.transitioned = null;
					u.a.transition(this, "none");
				}

				if(!u.hc(this.page.nN, "open")) {
					u.a.transition(this.page, "all 0.3s ease-in-out");
					u.a.translate(this.page, this.page.offsetWidth - this.offsetWidth, 0)

					u.ac(this.page.nN, "open");
				}
				else {
					u.a.transition(this.page, "all 0.3s ease-in-out");
					u.a.translate(this.page, 0, 0)

					u.rc(this.page.nN, "open");
				}
			}
			u.ce(page.hN.bn_nav);

			page.hN.bn_back = u.ae(u.qs(".servicenavigation", this.hN), "li", {"class":"back"});
			page.hN.bn_back.page = page;
			u.a.setOpacity(page.hN.bn_back, 0);
			page.hN.bn_back.clicked = function(event) {
//					u.bug("bn_nav clicked")
				this.transition_method = this.page.cN.transitions.animateRight;

//				u.xInObject(this.page._nav_history);
				this.page.navigate(this.page.historyBack(), this);
				this.page.hN.changeToNav();

			}
			u.ce(page.hN.bn_back);

			page.hN.changeToBack = function() {

				u.as(this.bn_back, "zIndex", 10);
				u.as(this.bn_nav, "zIndex", 5);

				u.a.transition(this.bn_back, "all 1s ease-in");
				u.a.transition(this.bn_nav, "all 1s ease-out");

				u.a.setOpacity(this.bn_back, 1);
				u.a.setOpacity(this.bn_nav, 0);
			}

			page.hN.changeToNav = function() {

				u.as(this.bn_back, "zIndex", 5);
				u.as(this.bn_nav, "zIndex", 10);

				u.a.transition(this.bn_back, "all 1s ease-in");
				u.a.transition(this.bn_nav, "all 1s ease-out");

				u.a.setOpacity(this.bn_back, 0);
				u.a.setOpacity(this.bn_nav, 1);
			}

			// Init header 
			page.initHeader = function() {
//				u.bug("init header")


				// show header
				this.hN.transitioned = function() {
					this.transitioned = null;
					u.a.transition(this, "none");

					u.ac(this, "ready");
				}
				u.a.transition(this.hN, "all 1.2s ease-out");
				u.a.setOpacity(this.hN, 1);
			}



			// add cart to header
			page.hN.bn_cart = u.ae(u.qs(".servicenavigation", page.hN), u.qs(".cart", page.nN).cloneNode(true));
			page.hN.bn_cart.page = page;
			page.hN.bn_cart.clicked = function(event) {

				u.bug("cart click:" + u.nodeId(this) + ", " + this.url)

				if(u.h.getCleanHash(location.hash) != u.h.getCleanUrl(this.url)) {
					this.transition_method = this.page.cN.transitions.dropDown;
					this.page.navigate(this.url, this);
				}
				else {

					this.transition_method = this.page.cN.transitions.pullUp;
					this.page.navigate(this.page.historyBack(), this);
				}

			}
			u.ce(page.hN.bn_cart);

			page.hN.addToCart = function() {
				var items = u.getCookie("cart");
				if(!this.bn_cart.span) {
					u.ae(this.hN.bn_cart, "span", {"html":items ? items++ : 1})
				}
				u.saveCookie("cart", this.bn_cart.span.innerHTML);
			}


			page.initNavigation = function() {

				var items = u.getCookie("cart");
				if(items) {
					this.hN.bn_cart.span = u.ae(this.hN.bn_cart, "span", {"html":items});
				}

				var i, node;
				var nodes = u.qsa("ul.store li,ul.partners li", this.nN);
				for(i = 0; node = nodes[i]; i++) {
					node.page = page;
					node.clicked = function() {

						this.page.navigate(this.url, this.page.nN);

						this.page.hN.bn_nav.clicked();
					}
					u.ce(node);
				}

			}


			// global resize handler 
			page.resized = function() {
				u.bug("page resized")

				var page = u.qs("#page");

				if(page.intro && typeof(page.intro.resized) == "function" && page.intro.parentNode) {
					page.intro.resized();
				}

				if(page.hN && typeof(page.hN.resized) == "function") {
					page.hN.resized();
				}
				if(page.cN && typeof(page.cN.resized) == "function") {
					page.cN.resized();
				}
				if(page.cN && page.cN.scene && typeof(page.cN.scene.resized) == "function") {
					page.cN.scene.resized();
				}
				if(page.fN && typeof(page.fN.resized) == "function") {
					page.fN.resized();
				}
			}
			// set resize handler
			u.e.addEvent(window, "resize", page.resized);

			// resize content height
			page.cN.resized = function() {
				u.a.setHeight(this, this.page.offsetHeight - this.page.hN.offsetHeight);
			}



			page._orientationchanged = function(event) {

				u.bug("orientation change")

				u.rc(document.body, "landscape|portrait");
				u.ac(document.body, (this.orientation == 90 || this.orientation == 270) ? "landscape" : "portrait");

	//			u.xInObject(event);

	//			u.bug("this:" + this.orientation);
	//			alert((this.orientation == 90 || this.orientation == 270) ? "landscape" : "portrait");

	//			page.transitioned = function() {
	//				this.transitioned = null;
	// 				u.a.transition(this, "none");
	// 
	// 				u.a.setHeight(this, 2000);
	// 				window.scrollTo(0, 0);
	// 				var h = (this.orientation == 90 || this.orientation == 270) ? window.innerWidth : window.innerHeight;
	// 				if(u.hc(document.body, "front")) {
	// 					h = h < this.cN.offsetHeight ? this.cN.offsetHeight : h;
	// 				}
	// //				u.bug("set height:" + h)
	// 				u.a.setHeight(this, h);
	//			}

				// hide content to minimize flickering
				// u.a.transition(page.cN, "none");
				// u.a.setOpacity(page.cN, 0);
				// 
				// 
				// page.scrollToTop();
				// 
				// if(typeof(page.scene.resetScene) == "function") {
				// 	page.scene.resetScene();
				// }
				// 
				// page.cN.navigate();
				// if(u.hc(document.body, "front")) {
				// 	page.cN.navigate();
				// }

	//			page.transitioned();

				// // show content
				// if(u.gcs(this, "opacity") == 0) {
				// 	this.transitioned();
				// }
				// else {
				// 	u.a.transition(this, this.page._gentrans_);
				// 	u.a.setOpacity(this, 0);
				// }
			}
			// redraw page if orientation changes
			u.e.addEvent(page, "orientationchange", page._orientationchanged);

		}


		// INTRO

		// create intro node
		page.intro = u.ae(page, "div", {"class":"intro"});
		page.intro.page = page;
		page.intro.sequence_player = u.sequencePlayer(page.intro);
		page.intro.sequence_player.page = page;

		// intro images
		page.intro._images = new Array();
		for(i = 24; i <= 75; i++) {
			page.intro._images.push("/img/intro/Untitled-1_000" + (i < 10 ? "0" : "") + i + ".jpg");
		}

		page.intro.sequence_player.ended = function() {
//			u.bug("playback ended")

			this.ended = function() {
				this.page.intro.transitioned = function() {
					u.a.transition(this, "none");
					this.transitioned = null;
					this.parentNode.removeChild(this);
					this.page.intro = null;

					this.page.ready();
				}
				u.a.transition(this.page.intro, "all 0.2s ease-out");
				u.a.setOpacity(this.page.intro, 0);
			}

			this.play({"from":51,"to":0});
		}

		page.intro.sequence_player.loaded = function() {
//			u.bug("sequence loaded")

			// show intro
			u.as(this.page.intro, "display", "block");

			// show page
			this.page.ready();
		}
		// load and play intro
		page.intro.sequence_player.loadAndPlay(page.intro._images, {"framerate":240});


	}
}


// Controlled initialization
function static_init() {

	// wrap page if segment dictates
	if(typeof(u.o.validdevice) == "object") {
		u.o.validdevice.init(document.body)
	}

	u.o.page.init(u.qs("#page"));
}

u.e.addDOMReadyEvent(static_init);
