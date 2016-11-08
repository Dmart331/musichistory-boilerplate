
var artistName = document.getElementById('artist');
var albumName = document.getElementById('album');
var submit= document.getElementById('submit');
var wrap = document.getElementById('wrapper');
var add = document.getElementById('add');
var list = document.getElementById('list');
var output = document.getElementById('SongName')



let songs = `<h2>Swim to the Moon - Between the Buried and Me</h2>
			<h2>Icarus Lives! - Periphery</h2>`


add.addEventListener("click" , removeDiv);
list.addEventListener("click" , restoreDiv);
output.innerHTML = songs;



function removeDiv(){
	wrap.style.display = "none";
	weird.style.display="inherit";
}

function restoreDiv(){
	console.log("sone")
	wrap.style.display = 'inherit';
	weird.style.display='none';
	output.innerHTML += `<h2>${artistName.value} - ${albumName.value}</h2>`;
}
