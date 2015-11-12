define(["jquery", "hbs", "lodash", "entry", "querysongs", "populate-songs", "hbs/handlebars"], function($, handlebars, _, entry, querysongs, populate, hbsFull) {

	return {
		filterMySongs: function(songDataList) {

			$("#filter").click(function() {
				populate.songData(songDataList);
			});

			$("#artistOptions, #albumOptions").change(function() {
				
				event.preventDefault();

				var artistMatch = $("#artistOptions option:selected").val();
				var albumMatch = $("#albumOptions option:selected").val();
				/*var songDataList = entry.getSongs();*/
				var uniqueAlbum = [];
				var uniqueArtist = [];


				hbsFull.registerHelper('albumUnique', function(options) {
				if (uniqueAlbum.indexOf(this.album) === -1) {
					uniqueAlbum.push(this.album);
					return options.fn(this);
				}
				});

				hbsFull.registerHelper('artistUnique', function(options) {
				if (uniqueArtist.indexOf(this.artist) === -1) {
					uniqueArtist.push(this.artist);
					return options.fn(this);
				}
				});

				console.log(artistMatch);
				console.log(albumMatch);
				console.log(songDataList);

				var newSongs = {};
				var finalSongs = {};
				var key;
				
				if (artistMatch !== "----" && albumMatch !== "----") {
					console.log("both options");
					for (key in songDataList.songs) {
						if (artistMatch === songDataList.songs[key].artist) {
							if (albumMatch === songDataList.songs[key].album) {
							newSongs[key] = songDataList.songs[key];
							console.log(newSongs);
							}
						}
					}

					finalSongs.songs = newSongs;
					console.log(finalSongs);
					populate.justAlbum2(finalSongs);
					populate.justArtist(finalSongs);
					populate.justSongs(finalSongs);	

				} else if (artistMatch !== "----") {
					console.log("artist");
					for (key in songDataList.songs) {
						if (artistMatch === songDataList.songs[key].artist) {
							newSongs[key] = songDataList.songs[key];
							console.log(newSongs);
						}
					}

					finalSongs.songs = newSongs;
					console.log(finalSongs);
					populate.justAlbum(finalSongs);
					populate.justSongs(finalSongs);	

				} else if (albumMatch !== "----") {
					console.log("album");
					for (key in songDataList.songs) {
						if (albumMatch === songDataList.songs[key].album) {
							newSongs[key] = songDataList.songs[key];
							console.log(newSongs);
						}
					}

					finalSongs.songs = newSongs;
					console.log(finalSongs);
					populate.justArtist(finalSongs);
					populate.justSongs(finalSongs);	

				} else if ((albumMatch !== "----") && (artistMatch !== "----")) {
					return false;
				}

			});

		}
	};

});