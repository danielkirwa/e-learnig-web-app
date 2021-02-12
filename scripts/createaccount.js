 // global variables
 let logform = document.querySelector('.loginform');
let regform = document.querySelector('.regform');
  let btnshowpassword1 = document.getElementById('showpassword1');
 let btnshowpassword2 = document.getElementById('showpassword2');
  // Your web app's Firebase configuration

  // Initialize Firebase
 /* firebase.initializeApp(firebaseConfig);

   const auth = firebase.auth();
*/


    // toggle forms
 
 let btncallregistrationform = document.getElementById('btncallregfor');
  btncallregistrationform.addEventListener('click', () =>{
  	regform.style.display ="block";
  	logform.style.display ="none";
  	btnshowpassword1.checked = false;
  	localStorage.setItem('calledformcode' , 1);
  })
let btncallloinform = document.getElementById('btncalllogin');
	btncallloinform.addEventListener('click', () =>{
  	regform.style.display ="none";
  	logform.style.display ="block";
  	btnshowpassword2.checked = false;
  	localStorage.setItem('calledformcode' , 2);
  })
 function retainform() {
 	// body...
 	let formCode = localStorage.getItem('calledformcode');
 	
 	if (formCode == undefined) {
 		localStorage.setItem('calledformcode' , 2);
 		regform.style.display ="none";
  	        logform.style.display ="block";
  	        btnshowpassword2.checked = false;
 	}else{
 		formCode = parseInt(formCode);
 		if (formCode == 2) {
 			regform.style.display ="none";
  	        logform.style.display ="block";
  	        btnshowpassword2.checked = false;
 		}else if(formCode == 1){
 			  	regform.style.display ="block";
  	            logform.style.display ="none";
  	            btnshowpassword1.checked = false;
 		}else{
 			localStorage.setItem('calledformcode' , 2);
 		}
 	}
 }
 retainform();

  // show and hide password


   btnshowpassword1.addEventListener('click', () =>{
   		var passwordeye1  = document.getElementById('signuppassword');
   		var passwordeye2  = document.getElementById('siginppassword');
   		var passwordeye3  = document.getElementById('confirmsignuppassword');
		if (passwordeye1.type === "password") {
			passwordeye1.type= "text";
			passwordeye2.type= "text";
			passwordeye3.type= "text";
		}else{
			passwordeye1.type= "password";
			passwordeye2.type= "password";
			passwordeye3.type= "password";
		}
   })
  
   btnshowpassword2.addEventListener('click', () =>{
   		var passwordeye2  = document.getElementById('siginppassword');
		if (passwordeye2.type === "password") {
			passwordeye2.type= "text";
		}else{
			passwordeye2.type= "password";
		}
   })

    function singupuser() {
    	// body...
    	var email = document.getElementById('signupemail');
    	var password = document.getElementById('signuppassword');

    	 const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    	 promise.catch(e => alert(e.message));
    	 

    	 alert("signed up");
    }

     function singinuser() {
    	// body...
    	var email = document.getElementById('signupemail');
    	var password = document.getElementById('signuppassword');

    	 const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    	 promise.catch(e => alert(e.message));
    	 

    	 alert("signed in" + email.value);
    }
    function signout() {
    	// body...
    	auth.signOut();
    	alert("signed out");
    }


    auth.onAuthStateChanged(function(user){
    	if(user){
    		var email = user.email;
    		alert("Active user" + email);
    	}else{
    		alert("No Active user");
    	}
    })