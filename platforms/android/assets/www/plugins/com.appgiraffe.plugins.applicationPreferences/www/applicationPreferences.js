cordova.define("com.appgiraffe.plugins.applicationPreferences.applicationPreferences", function(require, exports, module) { var applicationPreferences = {

	get : function(key, success, fail) {
		cordova.exec(success, fail, "applicationPreferences", "get", [ key ]);
	},

	set : function(key, value, success, fail) {
		cordova.exec(success, fail, "applicationPreferences", "set", [ key,
				value ]);
	},

	load : function(success, fail) {
		cordova.exec(success, fail, "applicationPreferences", "load", []);
	},

	show : function(activity, success, fail) {
		cordova.exec(success, fail, "applicationPreferences", "show",
				[ activity ]);
	},

	clear : function(success, fail) {
		cordova.exec(success, fail, "applicationPreferences", "clear", []);
	},

	remove : function(keyToRemove, success, fail) {
		cordova.exec(success, fail, "applicationPreferences", "remove",
				[ keyToRemove ]);
	}

}
// applicationPreferences

module.exports = applicationPreferences;

});
