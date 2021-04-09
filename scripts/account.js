

// global variable 
let usernamedisplay = document.getElementById('logedinusername');
let btnaddactivity = document.getElementById('addactivity');
let btncloseenrollpopup = document.getElementById('btncancelenroll');
let callpopupmenu = document.querySelector('.profileicon');
let enrollform = document.querySelector('.popupaddenroll');
let btnsubmitenroll = document.getElementById('btnsubmitenroll');
let blurbody = document.getElementById('opacity');
let btnopenquiz = document.getElementById('openquiz');
let btnlogout = document.getElementById('btnlogout');
let quizcode ;
let indexedEmail;
let fetchedphone,fetchedfname,fetchedmname,fetchedlname,fetchedintrest;
let displayweb = document.querySelector('.div100');
let displayjava = document.querySelector('.div200');
let displaypython = document.querySelector('.div300');
let displayandroid = document.querySelector('.div400');




btncloseenrollpopup.addEventListener('click', () => {
	
	enrollform.style.display ="none";
	blurbody.style.opacity = "1";
})




callpopupmenu.addEventListener('click' , () =>{
	let menu = document.querySelector('.popupmenu');
	
	let popupmenucode = localStorage.getItem('popupmenu');
	if (popupmenucode == undefined) {
		localStorage.setItem('popupmenu', 1);
		menu.style.display = "block";
	}else{
	if (popupmenucode == 1) {
		menu.style.display = "none";
		localStorage.setItem('popupmenu', 0);
	}else{
		localStorage.setItem('popupmenu', 1);
		menu.style.display = "block";
	}
	}

})


btnaddactivity.addEventListener('click', () => {
	enrollform.style.display ="block";
	blurbody.style.opacity = "0.4";

	let wc = localStorage.getItem('webcode');
	let jc = localStorage.getItem('javacode');
	let pc = localStorage.getItem('pythoncode');
	let ac = localStorage.getItem('androidcode');
	 
	 // disable already enrolled course
document.getElementById("coursetoenroll").options[0].selected = true;
	 	if (wc == undefined) {
	}else{
		document.getElementById("coursetoenroll").options[1].disabled = true;		
	}
// second check
		if (jc == undefined) {
	}else{
		document.getElementById("coursetoenroll").options[2].disabled = true;		
	}
// third check
	if (pc == undefined) {
	}else{
		document.getElementById("coursetoenroll").options[3].disabled = true;		
	}
// forth check 
	if (ac == undefined) {
	}else{
		document.getElementById("coursetoenroll").options[4].disabled = true;		
	}

    


	indexedEmail = firebase.auth().currentUser.email;
	indexedEmail = indexedEmail.replace(".", "@");
	console.log(indexedEmail);
	
})


// select any enrolled courses
/*console.log(indexedEmail);
function getandroid() {
	// body...
	// select student course if any 
      firebase.database().ref('studentcoursesandroid/'+ indexedEmail ).on('value' ,function(snapshot){
        let coursecode = snapshot.val().CourseCode;
        let courselevel = snapshot.val().EntryLevel;
        let enrolldate = snapshot.val().EnrollDate;

        localStorage.setItem('androidcode', coursecode);
        localStorage.setItem('androidlevel', courselevel);
        localStorage.setItem('androidenrolldate' , enrolldate)
       })
}
getandroid();*/

btnsubmitenroll.addEventListener('click' , ()  => {
	indexedEmail = firebase.auth().currentUser.email;
	indexedEmail = indexedEmail.replace(".", "@");

	// get date of enrollment

	 var newdate = new Date();
  	var day = newdate.getDate();
   var month = newdate.getMonth();
    var year = newdate.getFullYear();
     var enrolldate = day + "-" + month + "-" + year;


	let enrollcourse = document.getElementById('coursetoenroll');
	var selectedcourse = enrollcourse.options[enrollcourse.selectedIndex].text;
	var selectedcoursecode = enrollcourse.options[enrollcourse.selectedIndex].value;
	let skilllevel = document.getElementById('skilllevel');
	var selectedlevel = skilllevel.options[skilllevel.selectedIndex].text;


	if (selectedcoursecode == 100) {

 // add selected course to database 
	 	firebase.database().ref('studentcoursesweb/' + indexedEmail).set({
  CourseName: selectedcourse,
  CourseCode: selectedcoursecode,
  EntryLevel : selectedlevel,
  EnrollDate : enrolldate
}, (error) => {
  if (error) {
    alert('Fail to added');
    blurbody.style.opacity = "1";
	enrollform.style.display ="none";
  } else {
    alert('Succefully added');
    blurbody.style.opacity = "1";
	enrollform.style.display ="none";

		displayweb.style.display = "block";
		localStorage.setItem('webcode', 100);
		document.getElementById('weblevel').innerHTML = selectedlevel;
		localStorage.setItem('weblevel' , selectedlevel);
  }
});

	}else if (selectedcoursecode == 200) {

		// add selected course to database 
	 	firebase.database().ref('studentcoursesjava/' + indexedEmail).set({
  CourseName: selectedcourse,
  CourseCode: selectedcoursecode,
  EntryLevel : selectedlevel,
  EnrollDate : enrolldate
}, (error) => {
  if (error) {
    alert('Fail to added');
    blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
  } else {
    alert('Succefully added');
    blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
	 	 
		displayjava.style.display = "block";
		localStorage.setItem('javacode', 200);
		document.getElementById('javalevel').innerHTML = selectedlevel;
		localStorage.setItem('javalevel' , selectedlevel);
  }
});
		
	}else if (selectedcoursecode == 300) {

		// add selected course to database 
	 	firebase.database().ref('studentcoursespython/' + indexedEmail).set({
  CourseName: selectedcourse,
  CourseCode: selectedcoursecode,
  EntryLevel : selectedlevel,
  EnrollDate : enrolldate
}, (error) => {
  if (error) {
    alert('Fail to added');
    blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
  } else {
    alert('Succefully added');
    blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
	 	 
		displaypython.style.display = "block";
		localStorage.setItem('pythoncode', 300);
		document.getElementById('pythonlevel').innerHTML = selectedlevel;
		localStorage.setItem('pythonlevel' , selectedlevel);
  }
});
		
	}else if (selectedcoursecode == 400) {

		// add selected course to database 
	 	firebase.database().ref('studentcoursesandroid/' + indexedEmail).set({
  CourseName: selectedcourse,
  CourseCode: selectedcoursecode,
  EntryLevel : selectedlevel,
  EnrollDate : enrolldate
}, (error) => {
  if (error) {
    alert('Fail to added');
    blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
  } else {
    alert('Succefully added');
    blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
	 	 
		displayandroid.style.display = "block";
		localStorage.setItem('androidcode', 400);
		document.getElementById('androidlevel').innerHTML = selectedlevel;
		localStorage.setItem('androidlevel' , selectedlevel);
  }
});
		
	}else  {
		alert('course not available');
	}

	 	
})

// retain course display 

function retaincoursedisplay() {
	// body...
	let webcode =  localStorage.getItem('webcode');
	let javacode =  localStorage.getItem('javacode');
	let pythoncode =  localStorage.getItem('pythoncode');
	let androidcode =  localStorage.getItem('androidcode');

	// get course level
	let weblevel =  localStorage.getItem('weblevel');
	let javalevel =  localStorage.getItem('javalevel');
	let pythonlevel =  localStorage.getItem('pythonlevel');
	let androidlevel =  localStorage.getItem('androidlevel');
	 //console.log(webcode  + javacode + pythoncode + androidcode);
// first check
		if (webcode == undefined) {
	}else{
		displayweb.style.display = "block";	
		document.getElementById('weblevel').innerHTML = weblevel;	
	}
// second check
		if (javacode == undefined) {
	}else{
		displayjava.style.display = "block";
		document.getElementById('javalevel').innerHTML = javalevel;		
	}
// third check
	if (pythoncode == undefined) {
	}else{
		displaypython.style.display = "block";
		document.getElementById('pythonlevel').innerHTML = pythonlevel;		
	}
// forth check 
	if (androidcode == undefined) {
	}else{
		displayandroid.style.display = "block";	
		document.getElementById('androidlevel').innerHTML = androidlevel;	
	}
}
retaincoursedisplay() ;
setTimeout(retaincoursedisplay, 3000);

  function openquizpage1() {
  	// body...

  		let courseid = document.getElementById('courseid1').innerHTML;
  		let quizno = 1;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
    function openquizpage2() {
  	// body...

  		let courseid = document.getElementById('courseid2').innerHTML;
  		let quizno = 1;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
  function openquizpage3() {
  	// body...

  		let courseid = document.getElementById('courseid3').innerHTML;
  		let quizno = 1;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
  function openquizpage4() {
  	// body...

  		let courseid = document.getElementById('courseid4').innerHTML;
  		let quizno =1;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }

btnlogout.addEventListener('click' , () =>{
	 localStorage.clear();
	    	auth.signOut();
    	alert("signed out");
})

// select course enrolled

function selectallenrolled(email) {
	// body...
	indexedEmail = email
	indexedEmail = indexedEmail.replace(".", "@");
  
	// check web course
	 firebase.database().ref('studentcoursesweb/'+ indexedEmail ).on('value' ,function(snapshot){
			 	
			 	if (snapshot.exists()) {
			 	let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	localStorage.setItem('webcode', courseCode);
 				localStorage.setItem('weblevel', entryLevel);
			 	}else{
			 		//alert('no web');
			 	}

			 	
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('webcode', courseCode);
 	localStorage.setItem('weblevel', entryLevel);
  }
})

// check android course
	 firebase.database().ref('studentcoursesandroid/'+ indexedEmail ).on('value' ,function(snapshot){
			 	if (snapshot.exists()) {
			 	let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	localStorage.setItem('androidcode', courseCode);
 				localStorage.setItem('androidlevel', entryLevel);
			 	}else{
			 		//alert('no android');
			 	}

			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('androidcode', courseCode);
 	localStorage.setItem('androidlevel', entryLevel);
  }
})

	 // check java course
	 firebase.database().ref('studentcoursesjava/'+ indexedEmail ).on('value' ,function(snapshot){
			 	
			 	if (snapshot.exists()) {
			 		let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	localStorage.setItem('javacode', courseCode);
 				localStorage.setItem('javalevel', entryLevel);
 				}else{
 					//alert('no java');
 				}
			 	
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('javacode', courseCode);
 	localStorage.setItem('javalevel', entryLevel);
  }
})
	 // check python course
	 firebase.database().ref('studentcoursespython/'+ indexedEmail ).on('value' ,function(snapshot){
			 	
			 	
 				if (snapshot.exists()) {
 					let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	localStorage.setItem('pythoncode', courseCode);
 				localStorage.setItem('pythonlevel', entryLevel);
 				}else{
 				//alert('no python');	
 				}
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('pythoncode', courseCode);
 	localStorage.setItem('pythonlevel', entryLevel);
  }
})


}



auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.innerHTML = email + " ";
         selectallenrolled(email);
      }else{
        //alert("No Active user");
        window.location.href='registration.html';
      }
    })



