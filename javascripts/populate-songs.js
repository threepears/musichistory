define(function(require) {
	var $ = require("jquery");

	return {
		songData: function(songList) {
			require(["hbs!../templates/songs"], function(songTemplate) {
	  			$("#yellowbox").html(songTemplate(songList));
	  		});
	  		require(["hbs!../templates/artistList"], function(songTemplate) {
	  			$("#artistOptions").html("<option>----</option>" + songTemplate(songList));
	  		});
	  		require(["hbs!../templates/albumList"], function(songTemplate) {
	  			$("#albumOptions").html("<option>----</option>" + songTemplate(songList));
	  		});
  		},
  		justSongs: function(songList) {
			require(["hbs!../templates/songs"], function(songTemplate) {
	  			$("#yellowbox").html(songTemplate(songList));
	  		});
	  	},
	  	justArtist: function(songList) {
			require(["hbs!../templates/artistList"], function(songTemplate) {
	  			$("#artistOptions").html(songTemplate(songList));
	  		});
	  	},
	  	justAlbum: function(songList) {
			require(["hbs!../templates/albumList"], function(songTemplate) {
				console.log("songList",songList);
	  			$("#albumOptions").html(songTemplate(songList));
	  		});
	  	},
	  	justAlbum2: function(songList) {
			require(["hbs!../templates/albumList2"], function(songTemplate) {
				console.log("songList",songList);
	  			$("#albumOptions").html(songTemplate(songList));
	  		});
	  	}
	};

});