define(["jquery"],
 function($) {

 	return {
		getSongs2: function(callbackFunctionReference) {
			$.ajax({ url: "./data/songs2.json" }).done(function(songs) {
				callbackFunctionReference(songs);
			});
		}
 	};
 	
 });

