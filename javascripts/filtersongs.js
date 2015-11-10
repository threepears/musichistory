define(["jquery", "hbs", "querysongs", "populate-songs"], function($, handlebars, querysongs, populate) {

	$("#filter").click(function() {
		
		event.preventDefault();

		var artistMatch = $("#artistOptions option:selected").val();
		var albumMatch = $("#albumOptions option:selected").val();
		var songDataList = querysongs.getSongs();

		console.log(artistMatch);
		console.log(albumMatch);
		console.log(songDataList);

		var newSongs = {};
		var finalSongs = {};
		
		for (var key in songDataList.songs) {
			if (artistMatch === songDataList.songs[key].artist || albumMatch === songDataList.songs[key].album) {
				console.log(songDataList.songs[key].artist);
				console.log(songDataList.songs[key].album);
				console.log(songDataList.songs[key]);
				newSongs[key] = songDataList.songs[key];
				console.log(newSongs);
			}
			finalSongs.songs = newSongs;
		}

		console.log(newSongs);
		console.log(finalSongs);

		populate.justSongs(finalSongs);	


	});

});