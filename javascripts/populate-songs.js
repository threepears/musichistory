define(["jquery"],
 function($) {


	return {
		songData: function(songList) {
			require(["hbs!../templates/songs"], function(songTemplate) {
	  			$("#yellowbox").html(songTemplate(songList));
	  		});
	  		require(["hbs!../templates/artistList"], function(songTemplate) {
	  			$("#artistOptions").append(songTemplate(songList));
	  		});
	  		require(["hbs!../templates/albumList"], function(songTemplate) {
	  			$("#albumOptions").append(songTemplate(songList));
	  		});
  		},
  		justSongs: function(songList) {
			require(["hbs!../templates/songs"], function(songTemplate) {
	  			$("#yellowbox").html(songTemplate(songList));
	  		});
	  	}
	};


});