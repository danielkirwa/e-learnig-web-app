

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

	 console.log(selectedcourse + selectedlevel);
	let myctivityframe = document.querySelector('.enrolled');
	  let newactivityframe = `
	  		<div class="enrolled-activity">
		 	<div class="activitydisplay">
				<center>
				<span id="coursecode">${selectedcoursecode}</span>	${selectedcourse}
				</center>
			</div><br>
			 <label>Score : 0.0</label>
			<p>
				Just started <br>
				<span>Level :</span>
			<span> ${selectedlevel}</span> <br><br>
			<button id="openquiz" onclick="openquizpage()">Open Quiz </button>
			</p>
		 </div><br>
	  `
	 myctivityframe.innerHTML += newactivityframe;
	 	 alert("added");
	 	 blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";

	 	
})

  function openquizpage() {
  	// body...

  		let courseid = document.getElementById('courseid').innerHTML;
  		let quizno = document.getElementById('quizno').innerHTML;
 
  		 quizcode = courseid + quizno;
  		  console.log(quizcode);
  		   localStorage.setItem('quizcode' , quizcode);
  	 	alert('Open Quiz ' + quizcode);
  	 	window.location.href= 'quizapp.html';
  }
    function openquizpage2() {
  	// body...

  		let courseid = document.getElementById('courseid2').innerHTML;
  		let quizno = document.getElementById('quizno').innerHTML;
 
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
