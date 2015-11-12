define(["jquery", "querysongs", "entry"], function($, querysongs, entry) {

	$("#addtolist").click(function() {
		
		var artist = $("#artist");
		var song = $("#song");
		var album = $("#album");

		var artistList = $("#artistOptions");
		var albumList = $("#albumOptions");

		artistList.append("<option>" + artist.val() + "</option>");
		albumList.append("<option>" + album.val() + "</option>");

		var newSong = {
			title: song.val(),
			artist: artist.val(),
			album: album.val()
		};	

		artist.val("");
		song.val("");
		album.val("");

		$.ajax({ 
			url: "https://flickering-heat-1493.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function(addedSong) {
			console.log("Your new song is ", addedSong);
		});

		
	});

});