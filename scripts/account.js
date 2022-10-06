
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
let enrollscore = 0;



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

 if (btnaddactivity == null) {

 }else{
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
}

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
  EnrollDate : enrolldate,
  CourseScore : enrollscore
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
  EnrollDate : enrolldate,
  CourseScore : enrollscore
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
  EnrollDate : enrolldate,
  CourseScore : enrollscore
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
  EnrollDate : enrolldate,
  CourseScore : enrollscore
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
	// get course score 
	let webscore =  localStorage.getItem('webscore');
	let javascore =  localStorage.getItem('javascore');
	let pythonscore =  localStorage.getItem('pythonscore');
	let androidscore =  localStorage.getItem('androidscore');

	 //console.log(webcode  + javacode + pythoncode + androidcode);
// first check
		if (webcode == undefined) {
	}else{
		displayweb.style.display = "block";	
		document.getElementById('weblevel').innerHTML = weblevel;
		document.getElementById('webscore').innerHTML = webscore;	
	}
// second check
		if (javacode == undefined) {
	}else{
		displayjava.style.display = "block";
		document.getElementById('javalevel').innerHTML = javalevel;	
		document.getElementById('javascore').innerHTML = javascore;	
	}
// third check
	if (pythoncode == undefined) {
	}else{
		displaypython.style.display = "block";
		document.getElementById('pythonlevel').innerHTML = pythonlevel;
		document.getElementById('pythonscore').innerHTML = pythonscore;	
	}
// forth check 
	if (androidcode == undefined) {
	}else{
		displayandroid.style.display = "block";	
		document.getElementById('androidlevel').innerHTML = androidlevel;
		document.getElementById('androidscore').innerHTML = androidscore;	
	}
}
retaincoursedisplay() ;
setTimeout(retaincoursedisplay, 3000);



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
			 	let coursescore = snapshot.val().CourseScore;
			 	localStorage.setItem('webcode', courseCode);
 				localStorage.setItem('weblevel', entryLevel);
 				localStorage.setItem('webscore', coursescore);
			 	}else{
			 		//alert('no web');
			 	}

			 	
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('webcode', courseCode);
 	localStorage.setItem('weblevel', entryLevel);
 	localStorage.setItem('webscore', coursescore);
  }
})

// check android course
	 firebase.database().ref('studentcoursesandroid/'+ indexedEmail ).on('value' ,function(snapshot){
			 	if (snapshot.exists()) {
			 	let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	let coursescore = snapshot.val().CourseScore;
			 	localStorage.setItem('androidcode', courseCode);
 				localStorage.setItem('androidlevel', entryLevel);
 				localStorage.setItem('androidscore', coursescore);
			 	}else{
			 		//alert('no android');
			 	}

			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('androidcode', courseCode);
 	localStorage.setItem('androidlevel', entryLevel);
 	localStorage.setItem('androidscore', coursescore);
  }
})

	 // check java course
	 firebase.database().ref('studentcoursesjava/'+ indexedEmail ).on('value' ,function(snapshot){
			 	
			 	if (snapshot.exists()) {
			 		let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	let coursescore = snapshot.val().CourseScore;
			 	localStorage.setItem('javacode', courseCode);
 				localStorage.setItem('javalevel', entryLevel);
 				localStorage.setItem('javascore', coursescore);
 				}else{
 					//alert('no java');
 				}
			 	
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('javacode', courseCode);
 	localStorage.setItem('javalevel', entryLevel);
 	localStorage.setItem('javascore', coursescore);
  }
})
	 // check python course
	 firebase.database().ref('studentcoursespython/'+ indexedEmail ).on('value' ,function(snapshot){
			 	
			 	
 				if (snapshot.exists()) {
 					let courseCode = snapshot.val().CourseCode;
			 	let entryLevel = snapshot.val().EntryLevel;
			 	let coursescore = snapshot.val().CourseScore;
			 	localStorage.setItem('pythoncode', courseCode);
 				localStorage.setItem('pythonlevel', entryLevel);
 				localStorage.setItem('pythonscore', coursescore);
 				}else{
 				//alert('no python');	
 				}
			 }, (error) => {
  if (error) {
    // The write failed...
  } else{
  	localStorage.setItem('pythoncode', courseCode);
 	localStorage.setItem('pythonlevel', entryLevel);
 	localStorage.setItem('pythonscore', coursescore);
  }
})


}
function buttonidfetch(e) {
	// body...
	//window.location.href= 'readerpage.html';
	  e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'BUTTON') {
        alert(e.value);
      localStorage.setItem('Readerunit', e.value);
      window.location.href='readerpage.html';
        
    }
}




auth.onAuthStateChanged(function(user){
      if(user){
         var email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.innerHTML = email + " ";
          getuserprofile(email);
         selectallenrolled(email);
      }else{
        //alert("No Active user");
        window.location.href='registration.html';
      }
    })



 //get user profile data
 function getuserprofile(email) {
 	// body...
 	indexedEmail = email
	indexedEmail = indexedEmail.replace(".", "@");
 		//console.log(indexedEmail + " working");
      firebase.database().ref('studentusers/' + indexedEmail).on('value',function(snapshot){
    try{
      let  fname = snapshot.val().FirstName;
      let  mname = snapshot.val().LastName;
      let  lname = snapshot.val().MiddleName;
      let  intrest = snapshot.val().IntrestedArea;
      let  phone = snapshot.val().PhoneNumber;
      let  email = snapshot.val().Email;
   
      localStorage.setItem('pfname',fname );
      localStorage.setItem('pmname',mname );
      localStorage.setItem('plname',lname );
      localStorage.setItem('pintrest',intrest );
      localStorage.setItem('pphone',phone );
      localStorage.setItem('pemail', email)
    
      //window.location.href='accesedacc.html';
    }catch(error){
      console.log(error.message);
    }
        })
 }



