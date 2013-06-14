Util.Objects["productlist"] = new function() {
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
				
				this.scene._ready();
			}
			u.preloader(product, ["/images/"+u.cv(product, "id")+"/300x.jpg"]);

		}


		var scene_images = new Array();
		scene_images.push("/img/gx_loader.gif");

	}
}
