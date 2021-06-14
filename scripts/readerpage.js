
let btnbackhome = document.getElementById('backhome');
let progressscore = document.getElementById('progresbar');
let progressholder = document.getElementById('progres');
let unitname = document.getElementById('unitname');
let expectedhours = document.getElementById('expectedhours');
let enddate = document.getElementById('enddate');
let hours = document.getElementById('hours');
let progres = document.getElementById('score')
// get course score 
	let webscore =  localStorage.getItem('webscore');
	let javascore =  localStorage.getItem('javascore');
	let pythonscore =  localStorage.getItem('pythonscore');
	let androidscore =  localStorage.getItem('androidscore');
	let readerunit = localStorage.getItem('Readerunit');


 btnbackhome.addEventListener('click' , () => {
    window.location.href='accesedacc.html';
  })


 function retaincoursedisplay() {
	// body...
	let webcode =  localStorage.getItem('webcode');
	let javacode =  localStorage.getItem('javacode');
	let pythoncode =  localStorage.getItem('pythoncode');
	let androidcode =  localStorage.getItem('androidcode');
	

	// get course name
	let web =  "Web Development";
	let java =  "Java Programming";
	let python =  "Python Programming";
	let android =  "Android Development";

	
	// populated unit data
	if (readerunit == 100) {
		document.getElementById('unitname').innerHTML = web;
		document.getElementById('score').innerHTML = webscore;
		var studentTotalScore = webscore;
	      var progresvalue = studentTotalScore + "%";
	      progressscore.style.width = progresvalue;	
	}
	if (readerunit == 200) {
		document.getElementById('unitname').innerHTML = java;	
		document.getElementById('score').innerHTML = javascore;	
			var studentTotalScore = javascore;
	      var progresvalue = studentTotalScore + "%";
	      progressscore.style.width = progresvalue;
	}
	if (readerunit == 300) {
		document.getElementById('unitname').innerHTML = python;
		document.getElementById('score').innerHTML = pythonscore;
		var studentTotalScore = pythonscore;
	      var progresvalue = studentTotalScore + "%";
	      progressscore.style.width = progresvalue;	
	}
	if (readerunit == 400) {
		document.getElementById('unitname').innerHTML = android;
		document.getElementById('score').innerHTML = androidscore;	
		var studentTotalScore = androidscore;
	      var progresvalue = studentTotalScore + "%";
	      progressscore.style.width = progresvalue;
	}
    

}
retaincoursedisplay();

  function openquizpage() {
  	// body...

  		let courseid = readerunit;
  		let quizno = 1;
 			localStorage.setItem('quizcoursecode', courseid);
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
