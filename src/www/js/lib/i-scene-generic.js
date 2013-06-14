Util.Objects["scene"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene._ready = function() {
			u.bug("scene ready")


			u.ac(this.cN, "ready");
			this.cN._ready();

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


				
		scene._ready();

	}
}
