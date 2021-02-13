 // global variables
 let logform = document.querySelector('.loginform');
let regform = document.querySelector('.regform');
  let btnshowpassword1 = document.getElementById('showpassword1');
 let btnshowpassword2 = document.getElementById('showpassword2');



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
    // get userdata
let signupEmail;
let signupPassword;
    function readyDetails() {
    	// body...
    	let firstNane = document.getElementById('txtfirstname').value;
    	let middleName = document.getElementById('txtmiddlename').value;
    	let lastName = document.getElementById('txtlastname').value;
    	 signupEmail = document.getElementById('signupemail').value;
    	let arrayIntrestedArea = document.getElementById('cmbspecialization');
    	let intrestedArea = arrayIntrestedArea.options[arrayIntrestedArea.selectedIndex].text;
    	let phoneNumber = document.getElementById('txtphone').value;
    	signupPassword = document.getElementById('signuppassword').value;
    	let confirmSignupPassword = document.getElementById('confirmsignuppassword').value;

    		/*console.log(firstNane);
    		console.log(middleName);
    		console.log(lastName);
    		console.log(signupEmail);
    		console.log(intrestedArea);
    		console.log(phoneNumber);
    		console.log(signupPassword);
    		console.log(confirmSignupPassword);*/


    }
  
   btnshowpassword2.addEventListener('click', () =>{
   		var passwordeye2  = document.getElementById('siginppassword');
		if (passwordeye2.type === "password") {
			passwordeye2.type= "text";
		}else{
			passwordeye2.type= "password";
		}
   })


// signup new users
 let btnsignupnewuser = document.getElementById('btnsubmitdetails');
  btnsignupnewuser.addEventListener('click', () =>{
  	// body...

  	readyDetails();


  	auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
  .then((user) => {
    // Signed in 
    alert('signed in');
    // ...
  })
  .catch((error) => {
    console.log(error);
    alert(error.message);
    // ..
  });
    	 
  })


 // sigin registered users 
    let btnsigninnewuser = document.getElementById('');
  btnsigninnewuser.addEventListener('click', () =>{

  	// body...
    	var email = document.getElementById('signupemail');
    	var password = document.getElementById('signuppassword');

    	 const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    	 promise.catch(e => alert(e.message));
    	 

    	 alert("signed in" + email.value);
  })

  

 
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