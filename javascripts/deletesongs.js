define(["jquery"], function($) {

	$(document).on("click", ".delete", function(e)  {

  		var artist = $(this).parent().find("li")[0].innerHTML;
  		var album = $(this).parent().find("li")[1].innerHTML;
  		var song = $(this).parent().find("h1")[0].innerHTML;
  		var key = $(this).attr("id");

  		console.log(artist);
  		console.log(album);
  		console.log(song);
  		console.log(key);

		var removedSong = {
			title: song,
			artist: artist,
			album: album
		};	

		console.log(removedSong);

		e.target.parentNode.remove();

		$.ajax({ 
			url: "https://flickering-heat-1493.firebaseio.com/songs/" + key + "/.json",
			method: "DELETE"
		}).done(function(addedSong) {
			console.log("Delete call completed");
		});

		/*$(document).on("click", ".delete", function(e) {
			e.target.parentNode.remove();
		});*/

  	});

});