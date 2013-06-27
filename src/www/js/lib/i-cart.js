Util.Objects["cart"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene.ready = function() {
			u.bug("scene ready")


			// set drag on scene
			u.e.drag(this, [0, this.cN.offsetHeight - this.offsetHeight, this.offsetWidth, this.offsetHeight], {"show_bounds":false, "strict":false});

			this.picked = function(event) {}
			this.moved = function(event) {}
			this.dropped = function(event) {}


			u.ac(this.cN, "ready");
			this.cN.ready();

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

		scene.cN.page.hN.changeToNav();


		scene.bn_shop = u.qs(".shop", scene);
		scene.bn_shop.page = scene.cN.page;
		scene.bn_shop.transition_method = scene.cN.transitions.pullUp;
		scene.bn_shop.clicked = function() {

			this.transition_method = this.page.cN.transitions.pullUp;
			this.page.navigate(this.page.historyBack(), this);

		}
		
//		scene.cN.page.hN.bn_cart.clicked;

		// scene.bn_shop.clicked = function() {
		// 	this.page.navigate(this.url, this);
		// }
		u.ce(scene.bn_shop);

		scene.bn_checkout = u.qs(".checkout", scene);
		scene.bn_checkout.clicked = function() {
			alert("This is just a demo")
		}


		scene.ready();

	}
}
