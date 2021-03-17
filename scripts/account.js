

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
	
	indexedEmail = firebase.auth().currentUser.email;
	indexedEmail = indexedEmail.replace(".", "@");
	console.log(indexedEmail);
	
})

btnsubmitenroll.addEventListener('click' , ()  => {

	let enrollcourse = document.getElementById('coursetoenroll');
	var selectedcourse = enrollcourse.options[enrollcourse.selectedIndex].text;
	var selectedcoursecode = enrollcourse.options[enrollcourse.selectedIndex].value;
	let skilllevel = document.getElementById('skilllevel');
	var selectedlevel = skilllevel.options[skilllevel.selectedIndex].text;

	console.log(selectedcourse);
	console.log(selectedcoursecode);
	console.log(selectedlevel);

	if (selectedcoursecode == 100) {
		displayweb.style.display = "block";
		localStorage.setItem('webcode', 100);
	}else if (selectedcoursecode == 200) {
		displayjava.style.display = "block";
		localStorage.setItem('javacode', 200);
	}else if (selectedcoursecode == 300) {
		displaypython.style.display = "block";
		localStorage.setItem('pythoncode', 300);
	}else if (selectedcoursecode == 400) {
		displayandroid.style.display = "block";
		localStorage.setItem('androidcode', 400);
	}else  {
		alert('course not available');
	}


	 	 blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";

	 	
})

// retain course display 

function retaincoursedisplay() {
	// body...
	let webcode =  localStorage.getItem('webcode');
	let javacode =  localStorage.getItem('javacode');
	let pythoncode =  localStorage.getItem('pythoncode');
	let androidcode =  localStorage.getItem('androidcode');
	 console.log(webcode  + javacode + pythoncode + androidcode);
// first check
		if (webcode == undefined) {
	}else{
		displayweb.style.display = "block";		
	}
// second check
		if (javacode == undefined) {
	}else{
		displayjava.style.display = "block";		
	}
// third check
	if (pythoncode == undefined) {
	}else{
		displaypython.style.display = "block";		
	}
// forth check 
	if (androidcode == undefined) {
	}else{
		displayandroid.style.display = "block";		
	}
}
retaincoursedisplay() ;

  function openquizpage1() {
  	// body...

  		let courseid = document.getElementById('courseid1').innerHTML;
  		let quizno = document.getElementById('quizno1').innerHTML;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
    function openquizpage2() {
  	// body...

  		let courseid = document.getElementById('courseid2').innerHTML;
  		let quizno = document.getElementById('quizno2').innerHTML;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
  function openquizpage3() {
  	// body...

  		let courseid = document.getElementById('courseid3').innerHTML;
  		let quizno = document.getElementById('quizno3').innerHTML;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
  function openquizpage4() {
  	// body...

  		let courseid = document.getElementById('courseid4').innerHTML;
  		let quizno = document.getElementById('quizno4').innerHTML;
 
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


auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.innerHTML = email + " ";
         
        /* indexedEmail = email.replace(".", "@")
          // get user details for profile

          firebase.database().ref('studentusers/' + indexedEmail).on('value', function (snapshort) {
          	// body...
          	try{
          		fetchedphone = snapshort.val().PhoneNumber;
          		console.log(fetchedphone)
          	}catch(err){
          		alert(err.message);
          	}
          })*/
      }else{
        //alert("No Active user");
        window.location.href='registration.html';
      }
    })
