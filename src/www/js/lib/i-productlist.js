Util.Objects["productlist"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene.ready = function() {
			u.bug("scene ready:" + u.qsa("li.product", this).length)


			if(u.qsa("li.product", this).length == u.qsa("li.product.ready", this).length) {

				// set drag on scene
				u.e.drag(this.cN, this.cN)

				this.cN.picked = function(event) {
					alert("picked")
				}
				this.cN.dropped = function(event) {
					alert("dropped")
				}

				u.ac(this.cN, "ready");
				this.cN.ready();


				
			}

		}

		scene.resized = function() {
//			u.bug("scene resized");
		}

		scene._cleanup = function() {
			u.bug("scene cleanup");
		}

		scene.navigate = function() {
			u.bug("scene navigate");
		}


		var i, product;
		var products = u.qsa("li.product", scene);
		for(i = 0; product = products[i]; i++) {
			u.bug("product:" + u.qs("h2", product).innerHTML)
			product.scene = scene;


			u.ce(product);
			product.clicked = function(event) {
				alert("click")
			}
			product.moved = function(event) {
				this.resetEvents(this);
			}

			product.loaded = function(queue) {
				u.as(this, "backgroundImage", "url("+queue[0]._image.src+")");
				u.ac(this, "ready");
				
				this.scene.ready();
			}
			u.preloader(product, ["/images/"+u.cv(product, "id")+"/300x.jpg"]);

		}


		var scene_images = new Array();
		scene_images.push("/img/gx_loader.gif");

	}
}




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


