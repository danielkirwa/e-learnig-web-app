let quizsection = document.querySelector('.addquizsection');
let resultssection = document.querySelector('.resultssection');
let schedulesection = document.querySelector('.schedulesection');
let callquiz = document.getElementById('calladdquiz');
let callresults = document.getElementById('callresults');
let callschedule = document.getElementById('callschedule');
let calladdschedule = document.getElementById('calladdschedule');
let callviewchedule = document.getElementById('callviewschedule');
let addeventsubsection = document.querySelector('.add-schedule');
let vieweventsubsection = document.querySelector('.view-schedule');



let btnpreviewquiz = document.getElementById('quizpreview');
let btnuploadquiz = document.getElementById('uploadquiz');
let btnsavequiz = document.getElementById('savequiz');
btnsavequiz.addEventListener('click', () =>{
	let quizcode = document.getElementById('txtquizcode').value;
	let quiztitle = document.getElementById('txtquiztitle').value;
	let question = document.getElementById('ttaquestion').value;
	let answer1 = document.getElementById('ttaanswer1').value;
	let answer2 = document.getElementById('ttaanswer2').value;
	let answer3 = document.getElementById('ttaanswer3').value;
	let answercode = document.getElementById('answercode').selectedIndex - 1;
	 localStorage.setItem('quizcode', quizcode);
	 localStorage.setItem('quiztitle', quiztitle);
	 localStorage.setItem('qustion', question);
	 localStorage.setItem('answer1', answer1);
	 localStorage.setItem('answer2', answer2);
	 localStorage.setItem('answer3', answer3);
	 localStorage.setItem('correctanswer', answercode);

	 // display questions
	 btnuploadquiz.style.display = "none";
  	btnpreviewquiz.style.display = "block";
  	localStorage.setItem('btncontrol' , 1);

})

// check and retain sections
function activatequizsection() {
		callquiz.className += "active";
		callresults.classList.remove('active');
		callschedule.classList.remove('active');
		quizsection.style.display = "block";
		resultssection.style.display = "none";
		schedulesection.style.display = "none";
		localStorage.setItem('activesection', "quizsection");
}
callquiz.addEventListener('click' ,  () =>{
	activatequizsection()
});

function activateresultssection() {
		callresults.className += "active";
		callschedule.classList.remove('active');
		callquiz.classList.remove('active');
		resultssection.style.display = "block";
		schedulesection.style.display = "none";
		quizsection.style.display = "none";
		localStorage.setItem('activesection', "resultssection");
}
callresults.addEventListener('click' ,  () =>{
	activateresultssection()
});
function activateschedulessection() {
		callschedule.className += "active";
		callresults.classList.remove('active');
		callquiz.classList.remove('active');
		schedulesection.style.display = "block";
		resultssection.style.display = "none";
		quizsection.style.display = "none";
		localStorage.setItem('activesection', "schedulesection");
}
callschedule.addEventListener('click' ,  () =>{
	activateschedulessection()
});

// call sub-section
function calladdeventsubcetion() {
	// body...
	vieweventsubsection.style.display = "none";
	addeventsubsection.style.display = "block";
	localStorage.setItem('activesubsection', "addevent");

}
 calladdschedule.addEventListener('click' , () =>{
 	calladdeventsubcetion();
 })
function callvieweventsubcetion() {
	// body...
	vieweventsubsection.style.display = "block";
	addeventsubsection.style.display = "none";
	localStorage.setItem('activesubsection', "viewevent");

}
callviewchedule.addEventListener('click' , () =>{
 	callvieweventsubcetion();
 })

function retainsubsection(){
	let activesubsection = localStorage.getItem('activesubsection');
	console.log(activesubsection);
	if(activesubsection == "viewevent"){
			
			callvieweventsubcetion();
	}else{

	}
	if(activesubsection == "addevent"){
     calladdeventsubcetion();
	}else{
		
	}
}

retainsubsection();

function retainsection(){
let 	activesection = localStorage.getItem('activesection');
	if (activesection == "quizsection") {
		activatequizsection();
	}else{
		
	}
	if (activesection == "resultssection") {
		activateresultssection();
	}else{
		
	}
	if (activesection == "schedulesection") {
		activateschedulessection();
	}else{

	}
}
retainsection();

// end of retain sections


btnpreviewquiz.addEventListener('click', () =>{
	 // get quiznumber 
	  let displaynumber = document.getElementById('txtquiznumber');
	 let currentquestionnumber =  localStorage.getItem('questionnumber');

	 let quizdisplay = document.getElementById('quizholder');
	 let ansdisplay1 = document.getElementById('ans1');
	 let ansdisplay2 = document.getElementById('ans2');
	 let ansdisplay3 = document.getElementById('ans3');

	  if (currentquestionnumber == undefined) {
	  	localStorage.setItem('questionnumber' , 1);
	  	displaynumber.value = 1;
	  	 let q = localStorage.getItem('qustion');
        let a1 = localStorage.getItem('answer1');
        let a2 = localStorage.getItem('answer2');
        let a3 = localStorage.getItem('answer3');
	  quizdisplay.innerHTML = q;
	  ansdisplay1.innerHTML = a1;
	  ansdisplay2.innerHTML = a2;
	  ansdisplay3.innerHTML = a3;
	  localStorage.setItem('previewed' , 0);
	  btnuploadquiz.style.display = "block";
  	btnpreviewquiz.style.display = "none";
  	localStorage.setItem('btncontrol' , 2);
	  }else{
	  	 currentquestionnumber = parseInt(currentquestionnumber);
	  	 let nextcurrentquestionnumber = currentquestionnumber + 1 ;
	  	 localStorage.setItem('questionnumber', nextcurrentquestionnumber);
	  	 let q = localStorage.getItem('qustion');
        let a1 = localStorage.getItem('answer1');
        let a2 = localStorage.getItem('answer2');
        let a3 = localStorage.getItem('answer3');
        displaynumber.value = nextcurrentquestionnumber;
	  quizdisplay.innerHTML = q;
	  ansdisplay1.innerHTML = a1;
	  ansdisplay2.innerHTML = a2;
	  ansdisplay3.innerHTML = a3;
	  localStorage.setItem('previewed' , 0);
	  btnuploadquiz.style.display = "block";
  	btnpreviewquiz.style.display = "none";
  	localStorage.setItem('btncontrol' , 2);
	  }
   
})

let btnsubmit =document.getElementById('submit');
btnsubmit.addEventListener('click', () =>{
	var corectanswercode = localStorage.getItem('correctanswer');
	   var correctanswer = document.forms[0];
	   var score = "";
  var i;
  for (i = 0; i < correctanswer.length; i++) {
    if (correctanswer[corectanswercode].checked) {
      // corect answer selected
      score = 1;
    }else{
    	// wrong answer selected
    	score = 0;
    }
  }

   alert("Your score : " + score);

})

 function keeppreview() {
 	// body...
 	let quizdisplay = document.getElementById('quizholder');
	 let ansdisplay1 = document.getElementById('ans1');
	 let ansdisplay2 = document.getElementById('ans2');
	 let ansdisplay3 = document.getElementById('ans3');
       
        let q = localStorage.getItem('qustion');
        let a1 = localStorage.getItem('answer1');
        let a2 = localStorage.getItem('answer2');
        let a3 = localStorage.getItem('answer3');
	  quizdisplay.innerHTML = q;
	  ansdisplay1.innerHTML = a1;
	  ansdisplay2.innerHTML = a2;
	  ansdisplay3.innerHTML = a3;
 }
 keeppreview();

// validate exam code
let checkexamcode = document.getElementById('txtquizcode');
checkexamcode.addEventListener('keyup', () =>{
	if (checkexamcode.value.length < 4){
		
		document.getElementById('txtquizcode').style.border = "2px solid red";
		document.getElementById('codeerror').style.color = "red";
		document.getElementById('codeerror').innerHTML = "* Short Code length";
	}else{
		var numbers = /^[0-9]+$/;
		if (checkexamcode.value.match(numbers)) {
			document.getElementById('txtquizcode').style.border = "2px solid green";
			document.getElementById('codeerror').style.color = "green";
			document.getElementById('codeerror').innerHTML = "Code accepted";
		}else{
			document.getElementById('txtquizcode').style.border = "2px solid red";
			document.getElementById('codeerror').style.color = "red";
			document.getElementById('codeerror').innerHTML = "* Wrong Code Format";
		}
		
	}

})


 // check quiz title

 let checkexamtitle =document.getElementById('txtquiztitle');
  checkexamtitle.addEventListener('keyup' , () =>{

  	 if (checkexamtitle.value.length <5) {
  	 	document.getElementById('txtquiztitle').style.border = "2px solid red";
		document.getElementById('titleerror').style.color = "red";
		document.getElementById('titleerror').innerHTML = "* Short Title length";

  	 }else{
  	 	var numbers = /^[0-9a-zA-Z]+$/;
		if (checkexamcode.value.match(numbers)) {
			document.getElementById('txtquiztitle').style.border = "2px solid green";
			document.getElementById('titleerror').style.color = "green";
			document.getElementById('titleerror').innerHTML = "Title accepted";
		}else{
			document.getElementById('txtquiztitle').style.border = "2px solid red";
			document.getElementById('titleerror').style.color = "red";
			document.getElementById('titleerror').innerHTML = "* Wrong Title Format";
		}
  	 }

  })
 

  btnuploadquiz.addEventListener('click', () =>{
  	//readyquestion();
  	let examcode = document.getElementById('txtquizcode').value;
  	if (examcode == "") {
  		alert('No code');
  		document.getElementById('txtquizcode').style.border = "2px solid red";
  		document.getElementById('codeerror').style.color = "red";
  		document.getElementById('codeerror').innerHTML = "* Enter Exam Code";
  	}
  	else{
  		var numbers = /^[0-9]+$/;
		if (checkexamcode.value.match(numbers)) {
			document.getElementById('txtquizcode').style.border = "2px solid green";
			document.getElementById('codeerror').style.color = "green";
			document.getElementById('codeerror').innerHTML = "Code accepted";
			//alert('ready to upload code present');

			let examtitle = document.getElementById('txtquiztitle').value;
			 if (examtitle == "") {
			 	alert('No title');
			 	document.getElementById('txtquiztitle').style.border = "2px solid red";
			document.getElementById('titleerror').style.color = "red";
			document.getElementById('titleerror').innerHTML = "* Enter Exam Title";
			 }else{
			 		var title = /^[0-9a-zA-Z]+$/;

			 		if (checkexamtitle.value.match(title)) {
			document.getElementById('txtquiztitle').style.border = "2px solid green";
			document.getElementById('titleerror').style.color = "green";
			document.getElementById('titleerror').innerHTML = "Title accepted";
			alert('ready to upload title/code present');
           // get data to upload
           let qcode = localStorage.getItem('quizcode');
	 let qtitle = localStorage.getItem('quiztitle');
	 let qnumber = localStorage.getItem('questionnumber');
	 let qustion = localStorage.getItem('qustion');
	 let answer1 = localStorage.getItem('answer1');
	 let answer2 = localStorage.getItem('answer2');
	 let answer3 = localStorage.getItem('answer3');
	 let correctanswer = localStorage.getItem('correctanswer');
	    qcode = parseInt(qcode)
	    qnumber = parseInt(qnumber)
	 	let combinedcode = qcode + qnumber;
			// upload data to realtime database
		firebase.database().ref('QuizQuestions/' + combinedcode).set({



      QuizCode: qcode,
      QuizTitle: qtitle,
      QuestionNumber: qnumber,
      Quiz: qustion,
      AnswerOne: answer1,
      AnswerTwo: answer2,
      AnswerThree: answer3,
      CorrectAnswer: correctanswer


    },  (error) => {
  if (error) {
    // The write failed...
     alert('Upload Faled');
     console.log(error.message);
    
  } else {
  	alert('Uploaded successfuly');
  	btnuploadquiz.style.display = "none";
  	btnpreviewquiz.style.display = "none";
  	localStorage.setItem('btncontrol' , 0);
  }
  } );



		}else{
			document.getElementById('txtquiztitle').style.border = "2px solid red";
			document.getElementById('titleerror').style.color = "red";
			document.getElementById('titleerror').innerHTML = "* Wrong Title Format";
		}


			 }

		}else{
			document.getElementById('txtquizcode').style.border = "2px solid red";
			document.getElementById('codeerror').style.color = "red";
			document.getElementById('codeerror').innerHTML = "* Wrong Code Format";
		}
  	}
  })

  // keep control buttons
  function keepcontrolbuttons() {
  	// body...
  	let  btncode = localStorage.getItem('btncontrol');
  		
  		 if (btncode == undefined) {
  		 	localStorage.setItem('btncontrol', 0);
  		 	 btnuploadquiz.style.display = "none";
  	         btnpreviewquiz.style.display = "none";
  		 }else{
  		 	if (btncode == 0) {
  		 		btnuploadquiz.style.display = "none";
  	         btnpreviewquiz.style.display = "none";
  	     }else if(btncode == 1){
  	     		btnuploadquiz.style.display = "none";
  	         btnpreviewquiz.style.display = "block";
  	     }else{
  	     		btnuploadquiz.style.display = "block";
  	         btnpreviewquiz.style.display = "none";
  	     }

  		 }
  }

  keepcontrolbuttons();
 

 // clear for complete quiz

 let btncompletequiz = document.getElementById('completequiz');
 btncompletequiz.addEventListener('click', () =>{
 	localStorage.clear();
 	window.location.href='adminquizcontrol.html';
 })


// admin fetch and retreve of data
let btnstudentscore = document.getElementById('btnviewresults');

btnstudentscore.addEventListener('click', () =>{
 let resultstable = document.getElementById('resultstablebody');

	 firebase.database().ref('studentcoursesjava/' ).on('value' ,function(snapshot){
			 	
			 	if (snapshot.exists()) {
			 	let users = snapshot.val();
			 resultstable.innerHTML += users;
			 	}else{
			 		//alert('no web');
			 	}

			 	
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	
  }
})
})

// analysis 
function createPieChart() {
	// body...
var chartLabels = ["Expert", "Intermediate", "Beginner"];
var chartValues = [55, 49, 44];
var chartColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
];

new Chart("pieChartEnrolls", {
  type: "pie",
  data: {
    labels: chartLabels,
    datasets: [{
      backgroundColor: chartColors,
      data: chartValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "TOTAL ENROLLS"
    }
  }
});
}

function createBarGraph() {
	// body...
var chartLabels = ["Expert", "Intermediate", "Beginner","null"];
var chartValues = [55, 49, 44,0];
var chartColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#fff"
];

new Chart("barGraphResults", {
  type: "bar",
  data: {
    labels: chartLabels,
    datasets: [{
      backgroundColor: chartColors,
      data: chartValues
    }]
  },
  options: {
  	legend: {display: false},
    title: {
      display: true,
      text: "AVARAGE SCORES"
    }
  }
});
}