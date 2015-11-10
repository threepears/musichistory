define(["jquery"],
 function($) {

 	var songDataList;

	return {
		getSongs1: function(callbackFunctionReference) {
		  	$.ajax({ url: "https://flickering-heat-1493.firebaseio.com/.json" })
		  	.done(function(songs) {
		  		callbackFunctionReference(songs);
		  		songDataList = songs;
		  	});
		},
		getSongs: function() {
			return songDataList;
		}
	};


});