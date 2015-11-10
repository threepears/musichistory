define(["jquery", "hbs", "populate-songs", "addsongs", "filtersongs", "querysongs"], function($, handlebars, populate, addsongs, filtersongs, querysongs) {


	// Declare variables
	var infobox = $("#infosubmit");
	var main = $("#secondrow");
	var yellowBox = $("#yellowbox");
	var artist = $("#artist");
	var song = $("#song");
	var album = $("#album");
	var listOfSongs = [];
	var printHandlebars = populate.songData;


	// Call first JSON document when page loads
  	querysongs.getSongs1(printHandlebars);


	// Create functions
/*	function songData(songList) {
		require(["hbs!../templates/songs"], function(songTemplate) {
  			$("#yellowbox").append(songTemplate(songList));
  		});
  		require(["hbs!../templates/artistList"], function(songTemplate) {
  			$("#artistOptions").append(songTemplate(songList));
  		});
  		require(["hbs!../templates/albumList"], function(songTemplate) {
  			$("#albumOptions").append(songTemplate(songList));
  		});
  	}*/

/*  		for (var i = 0; i < songList.songs.length; i++) {
  			var currentSong = songList.songs[i];
  			$("#yellowbox").append("<div class='entry'><button type='button' class='delete btn'>X</button><h1>" + currentSong.title + "</h1><ul><li>" + currentSong.artist + "</li>&nbsp; | &nbsp;<li>" + currentSong.album + "</li></ul></div>");
  		}*/


/*  	function printSongs() {
		for (var i = 0; i < listOfSongs.length; i++) {
			var songEntry = "<div class='entry'><button type='button' class='delete btn'>X</button>";
			songEntry += "<h1>" + listOfSongs[i][1] + "</h1>";
			songEntry += "<ul>";
			songEntry += "<li>" + listOfSongs[i][0] + "</li>&nbsp; | &nbsp;";
			songEntry += "<li>" + listOfSongs[i][2] + "</li>";
			songEntry += "</ul>";      
			songEntry += "</div>";	

			console.log(songEntry);
	
			yellowBox.append(songEntry);
		}
	}*/


 
  	// Call second JSON document on "More" button click
/*  	$(document).on("click", "#morebutton", function() {
  		getmore.getSongs2(songData);
  		$("#more button").attr("disabled", true).html("NO MORE SONGS").css("background-color", "#696969").css("cursor", "auto");
  	});*/


  	// Delete album or artist from Filter Dropdown when List Entry clicked
  	$(document).on("click", ".delete", function() {
  		var artistEntry = ($(this).parent());
  		var artist = $(this).parent().find("li")[0];
  		var album = $(this).parent().find("li")[1].innerHTML;
  		var artistList = $("#artistOptions")[0];
  		var albumList = $("#albumOptions")[0];

  		

  		for (var i = 0; i < artistList.length; i++) {
  			console.log(artistList[i].innerHTML);
  			console.log(listOfSongs);
  			if (artistList[i].innerHTML === artist.innerHTML) {
  				artistList[i].remove();
  				albumList[i].remove();
  			}
	  	}

	/*  	for (var j = 0; j < listOfSongs.length; j++) {
			if (artistList[i].innerHTML === listOfSongs[j][0]) {
				listOfSongs[j].remove();
			}
  		}*/
  	});


  	// Remove and add classes to show and hide main content
	$("#listmusic").click(function() {
		infobox.removeClass("appear");
		main.removeClass("disappear");
	});

	$("#addmusic").click(function() {
		infobox.addClass("appear");
		main.addClass("disappear");
	});

	// Add songs to list
/*	$("#addtolist").click(function() {
		var artistList = $("#artistOptions");
		var albumList = $("#albumOptions");

		artistList.append("<option>" + artist.val() + "</option>");
		albumList.append("<option>" + album.val() + "</option>");

		listOfSongs.push([artist.val(),song.val(),album.val()]);
		artist.val("");
		song.val("");
		album.val("");

		console.log(listOfSongs);
	});*/




	// Close input box
	$("#closebox").click(function() {
		infobox.removeClass("appear");
		main.removeClass("disappear");

/*		printSongs();*/
	});

	$(document).keyup(function (e) {
    var key = e.which || e.keyCode;
    	if (key === 13) {
        $("#addtolist").click();
      }
	});

	$(document).on("click", ".delete", function(e) {
		e.target.parentNode.remove();
	});

});




