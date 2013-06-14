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


			page._ready = function() {

				u.bug("page ready")

				if(!this.intro || !this.intro.parentNode) {
					u.bug("intro is done")


					this.initHeader();
					this.initNavigation();


					// in case content loads faster than page, call content ready controller (content ready does not execute until both content and page is ready)
					this.cN._ready();

				}


				// page is ready to be shown - only show if not already shown
				if(!u.hc(this, "ready")) {

					// maximize height
					if(!u.qs(".desktop_wrapper")) {
						this.resetHeight();
					}

					// page is ready
					u.addClass(this, "ready");

					this.transitioned = function() {
						this.transitioned = null;
						u.a.transition(this, "none");

						// recalculate content height
						this._resized();

						// show navigation AFTER page is shown
						u.as(this.nN, "display", "block");
					}

					u.as(this, "display", "block");
					u.a.transition(this, "all 0.2s ease-out");
					u.a.setOpacity(this, 1);
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


			page.cN._ready = function() {
				u.bug("page.cN ready")

				if(u.hc(this.page, "ready") && u.hc(this, "ready")) {
					u.bug("page is actually ready");


					this.transitioned = function() {
						this.transitioned = null;
						u.a.transition(this, "none");
					}

					u.a.transition(this, "all 0.3s ease-out");
					u.a.setOpacity(this, 1);
				}
			}

			// Init header 
			page.initHeader = function() {
//				u.bug("init header")

				this.hN.bn_nav = u.qs("li.navigation", this.hN);
				this.hN.bn_nav.page = this;

				this.hN.bn_nav.clicked = function(event) {
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
				u.ce(this.hN.bn_nav);


				// show header
				this.hN.transitioned = function() {
					this.transitioned = null;
					u.a.transition(this, "none");
				}
				u.a.transition(this.hN, "all 0.2s ease-out");
				u.a.setOpacity(this.hN, 1);
			}



			page.initNavigation = function() {

				var i, node;
				var nodes = u.qsa("ul.store li", this.nN);
				for(i = 0; node = nodes[i]; i++) {
					node.clicked = function() {
						location.hash = u.h.cleanHash(this.url);
					}
					u.ce(node);
				}



				// this.hN.bn_cam = u.qs("li.camera", this.hN);
				// this.hN.bn_cam.page = this;
				// this.hN.bn_cam.clicked = function(event) {
				// 	
				// }
				// u.ce(this.hN.bn_cam);
				// 
				// this.hN.bn_cam.response = function(response) {
				// 	this.innerHTML = u.qs(".scene", response).innerHTML;
				// }
				// u.request(this.hN.bn_cam, this.hN.bn_cam.url);
				// 

			}


			// global resize handler 
			page._resized = function() {
				u.bug("page resized")

				var page = u.qs("#page");

				if(typeof(page.cN.scene) && typeof(page.cN.scene._resized) == "function") {
					page.cN.scene._resized();
				}
				if(typeof(page.intro) == "object" && typeof(page.intro._resized) == "function" && page.intro.parentNode) {
					page.intro._resized();
				}

				if(typeof(page.hN) && typeof(page.hN._resized) == "function") {
					page.hN._resized();
				}
				if(typeof(page.cN) && typeof(page.cN._resized) == "function") {
					page.cN._resized();
				}
				if(typeof(page.fN) && typeof(page.fN._resized) == "function") {
					page.fN._resized();
				}
			}
			// set resize handler
			u.e.addEvent(window, "resize", page._resized);

			// resize content height
			page.cN._resized = function() {
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



			




			// disable drag on page level
//			u.e.drag(page, page);

			// set timer with escape route, if user accidentially reached wrong segment
	//		page.t_escape = u.t.setTimer(this, this.escape, 10000);


			// enable
	// 		u.e.swipe(page, page);
	// 
	// 		page.current_page = 0;
	// 
	// 
	//		page.picked = function() {}
	// 
	// 		page.moved = function() {
	// 			u.a.translate(this.cN, this.current_x -(768*this.current_page), 0);
	// 		}
	// 		page.dropped = function() {
	// 
	// 			// show/hide navigation
	// 			if(this.current_page) {
	// 				u.a.transition(this.nN, "all 0.3s ease-in");
	// 				u.a.translate(this.nN, 0, 0);
	// 			}
	// 			else {
	// 				u.a.transition(this.nN, "all 0.3s ease-in");
	// 				u.a.translate(this.nN, 0, -40);
	// 			}
	// 		
	// 		}
	// 		page.swipedLeft = function() {
	// 			if(this.current_page < 3) {
	// 				this.current_page++;
	// 			}
	// 			u.a.transition(this.cN, "all 0.3s ease-out");
	// 			u.a.translate(this.cN, -(768*this.current_page), 0);
	// 		}
	// 		page.swipedRight = function() {
	// 			if(this.current_page > 0) {
	// 				this.current_page--;
	// 			}
	// 
	// 			u.a.transition(this.cN, "all 0.3s ease-out");
	// 			u.a.translate(this.cN, -(768*this.current_page), 0);
	// 
	// //				u.a.translate(this, this.current_x, 0);
	// 		}



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

					this.page._ready();
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
			this.page._ready();
		}
		// load and play intro
		page.intro.sequence_player.loadAndPlay(page.intro._images, {"framerate":24});



		// enable ajax navigation
		u.navigation(page);


	}
}


// Controlled initialization
function static_init() {

	if(typeof(u.o.validdevice) == "object") {
		u.o.validdevice.init(document.body)
	}

	u.o.page.init(u.qs("#page"));
}

u.e.addDOMReadyEvent(static_init);
