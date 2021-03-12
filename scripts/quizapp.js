
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
 let radioselected = document.getElementById('answerbutton');
 let snapshoterr ;
 let btnsubmit =document.getElementById('submit');
 let answerform = document.getElementById('answersform');


 btnstartquiz.addEventListener('click', () =>{
  // get questions  from database
  let questionnumber = localStorage.getItem('quizcode');
    
    questionnumber = parseInt(questionnumber);
    console.log(typeof questionnumber + " " + questionnumber);
    firebase.database().ref('QuizQuestions/' + questionnumber).on('value',function(snapshot){
    try{
        //radioselected.checked = false;
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
      txtquiznumber.innerHTML = newquestionnumber;

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


function fetchnextquiz() {
  // body...
  //radioselected.checked = false;
  let countconstant = 1;


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
      txtquiznumber.innerHTML = newquestionnumber;

     
      localStorage.setItem('newquestion',newquestion );
      localStorage.setItem('newquestionnumber',newquestionnumber );
      localStorage.setItem('newanswer1',newanswer1 );
      localStorage.setItem('newanswer2',newanswer2 );
      localStorage.setItem('newanswer3',newanswer3 );
      localStorage.setItem('quizcode', questionnumber)
    
      

      
  }catch(err){
    //alert(typeof err);
    console.log(err.message);
 
  } 
  if (snapshot.val() == null) {
       let score =  localStorage.getItem('studentscore');
        let totalmark =  localStorage.getItem('newquestionnumber');
        let passmark ,comment,color;
         score = parseInt(score);
         totalmark = parseInt(totalmark);
          passmark = (score / totalmark)* 100 ;
           passmark = passmark.toFixed(0);
           console.log(passmark);
          localStorage.setItem('studentTotalScore', passmark);
          if (passmark >= 80) {
            comment = "Congratulation ! ! ";
            color = "green";
          }else{
            comment = "Sorry you failed ! ! ";
            color = "red";
          }
    radioselected.checked = false;
    answerform.style.display = "none";
          txtquizholder.innerHTML =`
    <h3 style="color: ${color}"> ${comment}</h3><br>
    <p style="font-size: 20px ; color: ${color}">
    Your score is : ${passmark} %  <br>
    </p>
      <label>passmark is 80% </label>
    `;
    btnsubmit.style.display = "none";

     localStorage.setItem('complete', "Complete");

  }

  
  })

 
}

// on reload 
function fetchcurrentquizonreload() {
  // body...
 let questionnumber = localStorage.getItem('quizcode');
    
    questionnumber = parseInt(questionnumber);
    firebase.database().ref('QuizQuestions/' + questionnumber).on('value',function(snapshot){
    try{
 
      newcorrectanswer = snapshot.val().CorrectAnswer;
    
  }catch(err){
    alert(err);

  }
  })
}

fetchcurrentquizonreload();


btnsubmit.addEventListener('click', () =>{
   


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
      //radioselected.checked = false;
      fetchnextquiz();
    
    }else{
    	// wrong answer selected
    	score = 0;
     // radioselected.checked = false;
      fetchnextquiz();
   
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

//radioselected.checked = false;
       
        let q = localStorage.getItem('newquestion');
        let a1 = localStorage.getItem('newanswer1');
        let a2 = localStorage.getItem('newanswer2');
        let a3 = localStorage.getItem('newanswer3');
        let qn = localStorage.getItem('newquestionnumber');
        let btn =  localStorage.getItem('complete');
        let sts = localStorage.getItem('studentTotalScore');
        console.log(typeof btn + "btn");
         if (btn == undefined) {
      txtquizholder.innerHTML = q;
      txtquizanswer1.innerHTML = a1;
      txtquizanswer2.innerHTML = a2;
      txtquizanswer3.innerHTML = a3;
      txtquiznumber.innerHTML = qn;
  }else{
  let passmark = localStorage.getItem('studentTotalScore');
          if (passmark >= 80) {
            comment = "Congratulation ! ! ";
            color = "green";
          }else{
            comment = "Sorry you failed ! ! ";
            color = "red";
          }
    radioselected.checked = false;
    answerform.style.display = "none";
          txtquizholder.innerHTML =`
    <h3 style="color: ${color}"> ${comment}</h3><br>
    <p style="font-size: 20px ; color: ${color}">
    Your score is : ${passmark} %  <br>
    </p>
      <label>passmark is 80% </label>
    `;
    btnsubmit.style.display = "none";
  }
     

}
populatequiz()


  // back home button

  btnbackhome.addEventListener('click' , () => {
    window.location.href='accesedacc.html';
  })


auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        //alert("Active user" + email);
         console.log(email);
         usernamedisplay.innerHTML = email;
      }else{
        //alert("No Active user");
        window.location.href='registration.html';
      }
    })