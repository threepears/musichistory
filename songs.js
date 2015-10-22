/*function equalBoxes() {
	var yellow = document.getElementById("yellowbox");
	var blue = document.getElementById("bluebox");
	console.log(blue.offsetHeight);

	if (yellow.offsetHeight > blue.offsetHeight) {
		console.log(yellow.offsetHeight);
		console.log(blue.offsetHeight);
		blue.style.height = (yellow.offsetHeight - 30) + "px";
	} else if (blue.offsetHeight > yellow.offsetHeight) {
		yellow.style.height = blue.offsetHeight + "px";
	}
};*/

/*var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moriss*ette on the album Jagged Little Pill";

//Add one song to the beginning of the array and one to the end
songs.unshift("Brian Wilson > by Barenaked Ladies on the album Gordon");
songs.push("Boy Named Sue > by Johnny Cash on the album Live From Folsom Prison");

//Print new result to console
console.log(songs);

output = document.getElementById("test");

console.log(output);

for (var i = 0; i < songs.length; i++) {
	song = songs[i];
	console.log(song);

	var newsong = song.replace(/[*@!()]/g, "").replace(">", "-");
	songs[i] = newsong;

	var newentry = "<div>" + songs[i] + "</div>";
	console.log(newentry);
	output.innerHTML = output.innerHTML + newentry;
	console.log(output.innerHTML);
}*/

/*equalBoxes();*/


$(document).ready(function() {
  // All the JavaScript that depends on jQuery will be written here

  	// Declare all variables
	var infobox = $("#infosubmit");
	var main = $("#secondrow");
	var yellowBox = $("#yellowbox");
	var artist = $("#artist");
	var song = $("#song");
	var album = $("#album");
	var songList = [];

	// Function to print song list
	function printSongs() {
		yellowBox.html("");

		for (var i = 0; i < songList.length; i++) {
			var songEntry = "<div class='entry'>";
			songEntry += "<h1>" + songList[i][1] + "</h1>";
			songEntry += "<ul>";
			songEntry += "<li>" + songList[i][0] + "</li>&nbsp; | &nbsp;";
			songEntry += "<li>" + songList[i][2] + "</li>";
			songEntry += "</ul>";      
			songEntry += "</div>";	

			console.log(songEntry);
	
			yellowBox.append(songEntry);
		}
	}

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
	$("#addtolist").click(function() {
		infobox.removeClass("appear");
		main.removeClass("disappear");

		songList.push([artist.val(),song.val(),album.val()]);
		artist.val("");
		song.val("");
		album.val("");

		console.log(songList);

		printSongs();
	});

	$(document).keyup(function (e) {
    var key = e.which || e.keyCode;
    	if (key === 13) {
        $("#addtolist").click();
      }
});

});





