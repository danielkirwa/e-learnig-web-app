
// global variable
var studentscore = document.getElementById('scoredmarks');

let btnstartquiz = document.getElementById('startquiz');
 btnstartquiz.addEventListener('click', () =>{
 	btnstartquiz.style.display = "none";
 	document.getElementById('submit').style.display = "block";
 	localStorage.setItem('quizstarted', 1);
 	localStorage.setItem('studentscore', 0);
 })
 function checkifquizstarted() {
 	// body...
 	var startedquizcode = localStorage.getItem('quizstarted');
 	if (startedquizcode == undefined) {
 		localStorage.setItem('quizstarted', 0);
 		document.getElementById('submit').style.display = "none";
 	}else{
 		if (startedquizcode == 1) {
 			document.getElementById('submit').style.display = "block";
 			btnstartquiz.style.display = "none";
 		}else{
 			document.getElementById('submit').style.display = "none";
 		}
 	}
 }
 checkifquizstarted();


 // now populate quiz

function populatequiz(){

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
populatequiz()

let btnsubmit =document.getElementById('submit');
btnsubmit.addEventListener('click', () =>{
   


	var corectanswercode = localStorage.getItem('correctanswer');
	   var correctanswer = document.forms[0];
	   var score = "";
	   var totalscore = "";
  var i;

  console.log(typeof score  + score);
  for (i = 0; i < correctanswer.length; i++) {
    if (correctanswer[corectanswercode].checked) {
      // corect answer selected
      score = 1;
    }else{
    	// wrong answer selected
    	score = 0;
    }
  }


  	// sum student score 
  	console.log(typeof score  + score);
 
  	 let currentscore = localStorage.getItem('studentscore');
  	 currentscore = parseInt(currentscore);
  	 totalscore = score + currentscore;
  	 localStorage.setItem('studentscore', totalscore);

   studentscore.innerHTML = totalscore;

})
function retainstudentmarks() {
	// body...
	let currentscore = localStorage.getItem('studentscore');
	studentscore.innerHTML = currentscore;
}
retainstudentmarks();

 function keeppopulatedquiz() {
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
 keeppopulatedquiz();


 auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        alert("Active user" + email);
      }else{
        alert("No Active user");
      }
    })