Util.Objects["scene"] = new function() {
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

				
		scene.ready();

	}
}
