
// global variable
var studentscore = document.getElementById('scoredmarks');
let usernamedisplay = document.getElementById('logedinusername');
let btnbackhome = document.getElementById('backhome');
let btnstartquiz = document.getElementById('startquiz');
let txtquizholder = document.getElementById('quizholder');
let txtquizanswer1 = document.getElementById('ans1');
let txtquizanswer2 = document.getElementById('ans2');
let txtquizanswer3 = document.getElementById('ans3');
let txtquiznumber = document.getElementById('quizno');
let newcorrectanswer,newanswer3,newanswer2,newanswer1,newquestionnumber,newquestion;


 btnstartquiz.addEventListener('click', () =>{
  // get questions  from database
  let questionnumber = localStorage.getItem('quizcode');
    
    questionnumber = parseInt(questionnumber);
    console.log(typeof questionnumber + " " + questionnumber);
    firebase.database().ref('QuizQuestions/' + questionnumber).on('value',function(snapshot){
    try{
 
      newquestion = snapshot.val().Quiz;
      newquestionnumber = snapshot.val().QuestionNumber;
      newanswer1 = snapshot.val().AnswerOne;
      newanswer2 = snapshot.val().AnswerTwo;
      newanswer3 = snapshot.val().AnswerThree;
      newcorrectanswer = snapshot.val().CorrectAnswer;
      
      txtquizholder.innerHTML = newquestion;
      txtquizanswer1.innerHTML = newanswer1;
      txtquizanswer2.innerHTML = newanswer2;
      txtquizanswer3.innerHTML = newanswer3;
      txtquiznumber.innerHTML = newcorrectanswer;

      localStorage.setItem('newquestion',newquestion );
      localStorage.setItem('newquestionnumber',newquestionnumber );
      localStorage.setItem('newanswer1',newanswer1 );
      localStorage.setItem('newanswer2',newanswer2 );
      localStorage.setItem('newanswer3',newanswer3 );
      

      
  }catch(err){
    alert(err);

  }
  })
   


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






let btnsubmit =document.getElementById('submit');
btnsubmit.addEventListener('click', () =>{
   
   // fetch next question
/*let countconstant = 1;


   let questionnumber = localStorage.getItem('quizcode');
    
    questionnumber = parseInt(questionnumber);
     questionnumber = questionnumber + countconstant;
    console.log(typeof questionnumber + " " + questionnumber);
    firebase.database().ref('QuizQuestions/' + questionnumber).on('value',function(snapshot){
    try{
 
      newquestion = snapshot.val().Quiz;
      newquestionnumber = snapshot.val().QuestionNumber;
      newanswer1 = snapshot.val().AnswerOne;
      newanswer2 = snapshot.val().AnswerTwo;
      newanswer3 = snapshot.val().AnswerThree;
      newcorrectanswer = snapshot.val().CorrectAnswer;
      
      txtquizholder.innerHTML = newquestion;
      txtquizanswer1.innerHTML = newanswer1;
      txtquizanswer2.innerHTML = newanswer2;
      txtquizanswer3.innerHTML = newanswer3;
      txtquiznumber.innerHTML = newcorrectanswer;

      localStorage.setItem('newquestion',newquestion );
      localStorage.setItem('newquestionnumber',newquestionnumber );
      localStorage.setItem('newanswer1',newanswer1 );
      localStorage.setItem('newanswer2',newanswer2 );
      localStorage.setItem('newanswer3',newanswer3 );
      

      
  }catch(err){
    alert(err);

  }
  })*/




	var corectanswercode = newcorrectanswer;
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

// retain quiz 
function populatequiz(){

       
        let q = localStorage.getItem('newquestion');
        let a1 = localStorage.getItem('newanswer1');
        let a2 = localStorage.getItem('newanswer2');
        let a3 = localStorage.getItem('newanswer3');
        let qn = localStorage.getItem('newquestionnumber');
    
      txtquizholder.innerHTML = q;
      txtquizanswer1.innerHTML = a1;
      txtquizanswer2.innerHTML = a2;
      txtquizanswer3.innerHTML = a3;
      txtquiznumber.innerHTML = qn;
       console.log(q)
}
populatequiz()


  // back home button

  btnbackhome.addEventListener('click' , () => {
    window.location.href='accesedacc.html';
  })


auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        alert("Active user" + email);
         console.log(email);
         usernamedisplay.innerHTML = email;
      }else{
        alert("No Active user");
        window.location.href='registration.html';
      }
    })