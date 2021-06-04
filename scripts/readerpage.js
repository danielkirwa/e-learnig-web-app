
let btnbackhome = document.getElementById('backhome');
let progressscore = document.getElementById('progresbar');
let progressholder = document.getElementById('progres');
let unitname = document.getElementById('unitname');
let expectedhours = document.getElementById('expectedhours');
let enddate = document.getElementById('enddate');
let hours = document.getElementById('hours');
let progres = document.getElementById('score')

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