Util.Objects["productview"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene._ready = function() {
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
				this.cN._ready();


				
			}

		}

		scene._resized = function() {
//			u.bug("scene resized");
		}

		scene._cleanup = function() {
			u.bug("scene cleanup");
		}

		scene._navigate = function() {
			u.bug("scene navigate");
		}


		var product = u.qs(".product", scene);
		product.scene = scene;

		scene._ready();

		// product.loaded = function(queue) {
		// 	u.as(this, "backgroundImage", "url("+queue[0]._image.src+")");
		// 	u.ac(this, "ready");
		// 	
		// 	this.scene._ready();
		// }
		// u.preloader(product, ["/images/"+u.cv(product, "id")+"/300x.jpg"]);

	}
}