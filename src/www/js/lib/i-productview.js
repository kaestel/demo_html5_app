Util.Objects["productview"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene.ready = function() {
//			u.bug("scene ready:" + u.qsa("li.product", this).length)

			if(u.qsa("li.product", this).length == u.qsa("li.product.ready", this).length) {

				// set drag on scene
				u.e.drag(this, [0, this.cN.offsetHeight - this.offsetHeight, this.offsetWidth, this.offsetHeight], {"show_bounds":false, "strict":false});

				this.picked = function(event) {}
				this.moved = function(event) {}
				this.dropped = function(event) {}


				u.ac(this.cN, "ready");
				this.cN.ready();


			}

		}

		scene.resized = function() {
//			u.bug("scene resized:" + u.nodeId(this));
		}

		scene.cleanup = function() {
//			u.bug("scene cleanup:" + u.nodeId(this));
		}

		scene.navigate = function() {
//			u.bug("scene navigate:" + u.nodeId(this));
		}


		var product = u.qs("div.product", scene);
		product.scene = scene;

		// correction order of elements
		var offer = u.qs(".offer", product);
		u.ie(product, offer);

		var h1 = u.qs("h1", product);
		u.ie(product, h1);

		var images = u.qs("div.images", product);
		u.ie(product, images);
		u.a.setHeight(images, scene.cN.offsetHeight);

		// adding gallery
		var gallery_index = u.qs("ul.thumbnails", images);
		if(gallery_index) {
			var i, node;

			scene.gallery = u.o.gallery.init(gallery_index)
			scene.gallery.ready = function() {
				// show selected node (selectNode calls back to ready)
				// no value in hash? start at beginning
				if(u.h.getCleanUrl(location.href, 2) == u.h.getCleanUrl(location.href, 3)) {
					this.selectNode(0);
				}
				// use hash value
				else {
					var index = u.h.getCleanUrl(location.href).split("/")[3];
					this.selectNode(index);
				}
			}
		}

		// set navigation to back link
		scene.cN.page.hN.changeToBack();

		var form = u.qs("form", product);
		form.onsubmit = function() {return false;};

		product.bn_buy = u.qs(".actions li.buy", product);
		product.bn_buy.page = scene.cN.page;
		product.bn_buy.clicked = function(event) {
			u.e.kill(event);
			this.page.hN.addToCart();
		}
		u.ce(product.bn_buy);

		// ready
		scene.ready();

		// scene.loaded = function(queue) {
		// 	this.ready();
		// }
		// u.preloader(product, ["/images/"+u.cv(product, "id")+"/300x.jpg"]);

	}
}