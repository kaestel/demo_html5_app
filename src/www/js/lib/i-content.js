Util.Objects["content"] = new function() {
	this.init = function(scene) {

		scene.cN = u.qs("#content");
		scene.cN.scene = scene;


		scene.ready = function() {

			u.ac(this.cN, "ready");

			this.cN.ready();
		}

		scene.resized = function() {}

		scene.cleanup = function() {}

		scene.navigate = function() {}
		
	}
}