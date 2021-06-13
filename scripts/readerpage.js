
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

function showprogress() {
	// body...
	var studentTotalScore = pythonscore;
	var progresvalue = studentTotalScore + "%";
	progressscore.style.width = progresvalue;
}

showprogress();

 btnbackhome.addEventListener('click' , () => {
    window.location.href='accesedacc.html';
  })


 function retaincoursedisplay() {
	// body...
	let webcode =  localStorage.getItem('webcode');
	let javacode =  localStorage.getItem('javacode');
	let pythoncode =  localStorage.getItem('pythoncode');
	let androidcode =  localStorage.getItem('androidcode');

	// get course level
	let web =  "Web Development";
	let java =  "Java Programming";
	let python =  "Python Programming";
	let android =  "Android Development";
	

	 //console.log(webcode  + javacode + pythoncode + androidcode);
// first check
		if (webcode == undefined) {
	}else{
	
		document.getElementById('unitname').innerHTML = web;
		document.getElementById('score').innerHTML = webscore;	
	}
// second check
		if (javacode == undefined) {
	}else{
		
		document.getElementById('unitname').innerHTML = java;	
		document.getElementById('score').innerHTML = javascore;	
	}
// third check
	if (pythoncode == undefined) {
	}else{
		
		document.getElementById('unitname').innerHTML = python;
		document.getElementById('score').innerHTML = pythonscore;	
	}
// forth check 
	if (androidcode == undefined) {
	}else{
		
		document.getElementById('unitname').innerHTML = android;
		document.getElementById('score').innerHTML = androidscore;	
	}
}
retaincoursedisplay();