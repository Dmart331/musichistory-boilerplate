var songs = [];

songs[songs.length] = "Legs - by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c - by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Swim to the Moon - Between the Buried and Me on the album Colors");
songs.push("Icarus Lives! - Periphery on the album Periphery");

for(i=0; i<songs.length; i++){
	songs[i] = songs[i].replace('*', "");
	songs[i] = songs[i].replace('@' , "");
	songs[i] = songs[i].replace('(' , "");
	songs[i] = songs[i].replace('!' , "");
	
	
}

for(i=0; i<songs.length; i++){
	document.getElementById("song1").innerHTML = songs[0] + "<h2>"; 
	document.getElementById("song2").innerHTML = songs[1] + "<h2>";
	document.getElementById("song3").innerHTML = songs[2] + "<h2>";
	document.getElementById("song4").innerHTML = songs[3] + "<h2>";
	document.getElementById("song5").innerHTML = songs[4] + "<h2>";
	document.getElementById("song6").innerHTML = songs[5] + "<h2>";
	document.getElementById("song7").innerHTML = songs[6] + "<h2>";
	
}




console.log(songs);
