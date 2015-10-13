var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Add one song to the beginning of the array and one to the end
songs.unshift("Brian Wilson > by Barenaked Ladies on the album Gordon");
songs.push("Boy Named Sue > by Johnny Cash on the album Live From Folsom Prison");

//Print new result to console
console.log(songs);

for (var i = 0; i < songs.length; i++) {
	song = songs[i];
	console.log(song);

	var newsong = song.replace(/[*@!()]/g, "").replace(">", "-");
	songs[i] = newsong;
}

console.log(songs);