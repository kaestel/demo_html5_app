Util.Objects["cart"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene.ready = function() {
			u.bug("scene ready:" + u.nodeId(this))


			// set drag on scene
			u.e.drag(this, [0, this.cN.offsetHeight - this.offsetHeight, this.offsetWidth, this.offsetHeight], {"show_bounds":false, "strict":false});

			this.picked = function(event) {}
			this.moved = function(event) {}
			this.dropped = function(event) {}


			u.ac(this.cN, "ready");
			this.cN.ready();

		}

		scene.resized = function() {
//			u.bug("scene resized:" + u.nodeId(this));
		}

		scene.cleanup = function() {
			u.bug("scene cleanup:" + u.nodeId(this));
		}

		scene.navigate = function() {
			u.bug("scene navigate:" + u.nodeId(this));
		}

		scene.cN.page.hN.changeToNav();


		scene.bn_shop = u.qs(".shop", scene);
		scene.bn_shop.page = scene.cN.page;
		scene.bn_shop.transition_method = scene.cN.transitions.pullUp;
		scene.bn_shop.moved = function(event) {
			u.e.resetEvents(this);
		}
		scene.bn_shop.clicked = function() {
			this.page.navigate(this.page.historyBack(), this);
		}
		u.ce(scene.bn_shop);

		scene.bn_checkout = u.qs(".checkout", scene);
		scene.bn_checkout.page = scene.cN.page;
		scene.bn_checkout.transition_method = scene.cN.transitions.pullUp;
		scene.bn_checkout.moved = function(event) {
			u.e.resetEvents(this);
		}
		scene.bn_checkout.clicked = function() {
			alert("Thank you for viewing our demo.")
			u.deleteCookie("cart");
			this.page.hN.updateCart();
		}
		u.ce(scene.bn_checkout);

		scene.cart_items = u.qsa(".items li", scene);
		var in_cart = u.getCookie("cart");
		in_cart = !isNaN(parseInt(in_cart)) ? parseInt(in_cart) : 0;
		var item, i;

		for(i = 0; item = scene.cart_items[i]; i++) {
			if(i < in_cart) {
				u.as(item, "display", "block");
			}
			else {
				u.as(item, "display", "none");
			}
		}

		scene.ready();
	}
}
