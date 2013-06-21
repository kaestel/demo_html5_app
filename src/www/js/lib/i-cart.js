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


		scene.bn_continue = u.qs(".continue", scene);
		scene.bn_continue.page = scene.cN.page;
		scene.bn_continue.transition_method = scene.cN.transitions.pullUp;
		scene.bn_continue.clicked = function() {
			this.page.navigate(this.url, this);
		}
		u.ce(scene.bn_continue);

		scene.bn_checkout = u.qs(".checkout", scene);
		scene.bn_checkout.clicked = function() {
			alert("This is just a demo")
		}


		scene.ready();

	}
}
