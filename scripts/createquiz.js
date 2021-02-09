
let btnsavequiz = document.getElementById('savequiz');
btnsavequiz.addEventListener('click', () =>{
	let question = document.getElementById('ttaquestion').value;
	let answer1 = document.getElementById('ttaanswer1').value;
	let answer2 = document.getElementById('ttaanswer2').value;
	let answer3 = document.getElementById('ttaanswer3').value;
	let answercode = document.getElementById('answercode').selectedIndex - 1;
	 localStorage.setItem('qustion', question);
	 localStorage.setItem('answer1', answer1);
	 localStorage.setItem('answer2', answer2);
	 localStorage.setItem('answer3', answer3);
	 localStorage.setItem('correctanswer', answercode);

	 // display questions

	



})

let btnpreviewquiz = document.getElementById('quizpreview');
btnpreviewquiz.addEventListener('click', () =>{

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
	  localStorage.setItem('previewed' , 0);
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
	}else{
		var numbers = /^[0-9]+$/;
		if (checkexamcode.value.match(numbers)) {
			document.getElementById('txtquizcode').style.border = "2px solid green";
		}else{
			document.getElementById('txtquizcode').style.border = "2px solid red";
		}
		
	}

})
  let btnuploadquiz = document.getElementById('uploadquiz');
  btnuploadquiz.addEventListener('click', () =>{
  	let examcode = document.getElementById('txtquizcode').value;
  	if (examcode == "") {
  		alert('No code');
  		document.getElementById('txtquizcode').style.border = "2px solid red";
  	}
  	else{
  		alert(examcode);
  	}
  })


