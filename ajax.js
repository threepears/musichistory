$(document).ready(function() {
  // All the JavaScript that depends on jQuery will be written here

  // Function for putting data into DOM
	function songData(songList) {
  		for (var i = 0; i < songList.songs.length; i++) {
  			var currentSong = songList.songs[i];
  			$("#yellowbox").append("<div class='entry'><button type='button' class='delete'>DELETE</button><h1>" + currentSong.title + "</h1><ul><li>" + currentSong.artist + "</li>&nbsp; | &nbsp;<li>" + currentSong.album + "</li></ul></div>");
  		}
  	}

  	// Call first JSON document when page loads
  	$.ajax({ url: "songs.json" }).done(songData);

  	// Call second JSON document on "More" button click
  	$(document).on("click", "#morebutton", function() {
  		$.ajax({ url: "songs2.json" }).done(songData);
  		$("#more button").attr("disabled", true).html("NO MORE SONGS").css("background-color", "#696969").css("cursor", "auto");
  	});

});