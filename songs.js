function equalBoxes() {
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
};

var songs = [];

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
}

equalBoxes();

console.log(songs);