Util.Objects["productview"] = new function() {
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


		var product = u.qs("div.product", scene);
		product.scene = scene;


		var offer = u.qs(".offer", product);
		u.ie(product, offer);

		var h1 = u.qs("h1", product);
		u.ie(product, h1);

		var images = u.qs("div.images", product);
		u.ie(product, images);

		scene.ready();

		// product.loaded = function(queue) {
		// 	u.as(this, "backgroundImage", "url("+queue[0]._image.src+")");
		// 	u.ac(this, "ready");
		// 	
		// 	this.scene.ready();
		// }
		// u.preloader(product, ["/images/"+u.cv(product, "id")+"/300x.jpg"]);

	}
}