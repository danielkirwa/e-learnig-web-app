
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

})

let btnpreviewquiz = document.getElementById('quizpreview');
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
	  }else{
	  	 currentquestionnumber = parseInt(currentquestionnumber);
	  	 nextcurrentquestionnumber = currentquestionnumber + 1 ;
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
	if (checkexamcode.value.length < 3){
		
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
 
 
  let btnuploadquiz = document.getElementById('uploadquiz');
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
	 

			// upload data to realtime database
		firebase.database().ref('QuizQuestions/' + qcode + qnumber).set({



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


