Util.Objects["page"] = new function() {
	this.init = function(page) {


		u.e.swipe(page, page);
		page.current_page = 0;

		page.picked = function() {
			
		}
		page.moved = function() {
			u.a.translate(this.cN, this.current_x -(768*this.current_page), 0);
		}
		page.dropped = function() {

			// show/hide navigation
			if(this.current_page) {
				u.a.transition(this.nN, "all 0.3s ease-in");
				u.a.translate(this.nN, 0, 0);
			}
			else {
				u.a.transition(this.nN, "all 0.3s ease-in");
				u.a.translate(this.nN, 0, -40);
			}
			
		}
		page.swipedLeft = function() {
			if(this.current_page < 3) {
				this.current_page++;
			}
			u.a.transition(this.cN, "all 0.3s ease-out");
			u.a.translate(this.cN, -(768*this.current_page), 0);
		}
		page.swipedRight = function() {
			if(this.current_page > 0) {
				this.current_page--;
			}

			u.a.transition(this.cN, "all 0.3s ease-out");
			u.a.translate(this.cN, -(768*this.current_page), 0);

//				u.a.translate(this, this.current_x, 0);
		}



		// show content
		page.loaded = function() {

			u.ac(document.body, "loaded");
			u.a.transition(this.cN, "all 1.3s ease-out")
			u.a.setOpacity(this.cN, 1);

		}
//		u.preloader(page, ["/img/VM-forside-image.jpg", "/img/VM-forside-typo.png", "/img/VMC_Content.jpg", "/img/VMC_page3.jpg", "/img/VMC_page4.jpg", "/img/VMC_Overlay.jpg"]);

		page.cN = u.qs("#content");
		page.cN.page = page;

		// Navigation - initially hidden
		page.nN = u.qs("#navigation");
		u.a.translate(page.nN, 0, -40);
		u.as(page.nN, "display", "block");

		u.e.click(page.nN);
		page.nN.clicked = function() {

			if(u.hc(this, "open")) {
				u.rc(this, "open");

				u.a.setHeight(this, 40);
				u.a.setWidth(this, 93);
			}
			else {
				u.ac(this, "open");

				u.a.setHeight(this, 722);
				u.a.setWidth(this, 768);
			}
		}
		

		// continue to animate frontpage
		page.cN.transitioned = function() {
			this.transitioned = null;
			u.a.transition(this, "none");

		}

		page.loaded();

		// 
		// page.scene_front = u.qs(".scene.front");
		// 
		// 
		// page.scene_page1 = u.qs(".scene.page1");
		// // u.e.drag(page.scene_page1, [0, page.offsetHeight-page.scene_page1.offsetHeight,page.scene_page1.offsetWidth, page.scene_page1.offsetHeight], {"strict":false});
		// // page.scene_page1.picked = function() {}
		// // page.scene_page1.moved = function() {}
		// // page.scene_page1.dropped = function() {}
		// 
		// 
		// page.scene_page2 = u.qs(".scene.page2");
		// u.e.drag(page.scene_page2, [0, page.offsetHeight-page.scene_page2.offsetHeight,page.scene_page2.offsetWidth, page.scene_page2.offsetHeight], {"strict":false});
		// page.scene_page2.picked = function() {}
		// page.scene_page2.moved = function() {}
		// page.scene_page2.dropped = function() {}
		// 
		// page.scene_page2_video = u.qs(".video", page.scene_page2);
		// u.e.click(page.scene_page2_video);
		// page.scene_page2_video.clicked = function(event) {
		// 	this.clicked = null;
		// 
		// 	var video = u.qs("video", this);
		// 	u.as(video, "display", "block");
		// 	// start playback
		// 	video.play();
		// }
		// 
		// 
		// page.scene_page3 = u.qs(".scene.page3");
		// u.e.drag(page.scene_page3, [0, page.offsetHeight-page.scene_page3.offsetHeight,page.scene_page3.offsetWidth, page.scene_page3.offsetHeight], {"strict":false});
		// page.scene_page3.picked = function() {}
		// page.scene_page3.moved = function() {}
		// page.scene_page3.dropped = function() {}
		// 
		// page.scene_page3_zoom = u.qs(".zoom", page.scene_page3);
		// u.e.click(page.scene_page3_zoom);
		// page.scene_page3_zoom.clicked = function() {
		// 
		// 	var full = u.ae(document.body, "div", {"class":"full"});
		// 	u.a.setOpacity(full, 0);
		// 	u.a.transition(full, "all .3s ease-out");
		// 	u.a.setOpacity(full, 1);
		// 
		// 
		// 	u.e.click(full);
		// 	full.clicked = function() {
		// 		this.transitioned = function() {
		// 			this.transitioned = null;
		// 			this.parentNode.removeChild(this);					
		// 		}
		// 		u.a.transition(full, "all 0.3s ease-out");
		// 		u.a.setOpacity(full, 0);
		// 
		// 	}
		// }
		// page.scene_page3_zoom.moved = function(event) {
		// 	u.e.resetEvents(this);
		// }

	}
}

u.e.addDOMReadyEvent(u.init);
