
let btnbackhome = document.getElementById('backhome');
let progressscore = document.getElementById('progresbar');
let progressholder = document.getElementById('progres');

function showprogress() {
	// body...
	var studentTotalScore = 56;
	var progresvalue = studentTotalScore + "%";
	progressscore.style.width = progresvalue;
}

showprogress();

 btnbackhome.addEventListener('click' , () => {
    window.location.href='accesedacc.html';
  })