

 // global variables
 let logform = document.querySelector('.loginform');
let regform = document.querySelector('.regform');
  let btnshowpassword1 = document.getElementById('showpassword1');
 let btnshowpassword2 = document.getElementById('showpassword2');
let firstNane,studentcode,middleName,lastName,intrestedArea,phoneNumber,
signupEmail,signupPassword,confirmSignupPassword,indexedEmail;
let loginusername,loginpassword;
let myerror = document.getElementById('btnerror');
let mysuccess = document.getElementById('btnsuccess');
let myinfor = document.getElementById('btninfor');
let mysubject = document.getElementById('alertsubject');
let mymessage  = document.getElementById('alertmessage');
let myalert = document.getElementById('myalert')
var seconds ;
let btnforgotpassword = document.getElementById('btnforgotpassword');


// end of global variable






// get data for validateion
      let valfirstNane = document.getElementById('txtfirstname');
      let valmiddleName = document.getElementById('txtmiddlename');
      let vallastName = document.getElementById('txtlastname');
      let valsignupEmail = document.getElementById('signupemail');
      let valphoneNumber = document.getElementById('txtphone');
      let valsignupPassword = document.getElementById('signuppassword');
      let valconfirmSignupPassword = document.getElementById('confirmsignuppassword');


 

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

    
  
    

    // validate user inputs 
      valfirstNane.addEventListener('keyup' , () =>{
      let validfirstname = document.getElementById('txtfirstname').value;
      if (validfirstname !== "") {
        var chk = /^[A-Za-z]+$/;
        if(chk.test(validfirstname)){
          document.getElementById('txtfirstname').style.border = "2px solid green";
        }else{
          document.getElementById('txtfirstname').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('txtfirstname').style.border = "2px solid red";
      }
    })

      valmiddleName.addEventListener('keyup' , () =>{
      let validmiddlename = document.getElementById('txtmiddlename').value;
      if (validmiddlename !== "") {
        var chk = /^[A-Za-z]+$/;
        if(chk.test(validmiddlename)){
          document.getElementById('txtmiddlename').style.border = "2px solid green";
        }else{
          document.getElementById('txtmiddlename').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('txtmiddlename').style.border = "2px solid red";
      }
    })
 
      valsignupEmail.addEventListener('keyup' , () =>{
      let validemail = document.getElementById('signupemail').value;
      if (validemail !== "") {
        var chk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(chk.test(validemail)){
          document.getElementById('signupemail').style.border = "2px solid green";
        }else{
          document.getElementById('signupemail').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('signupemail').style.border = "2px solid red";
      }
    })
      valphoneNumber.addEventListener('keyup' , () =>{
      let validphonenumber = document.getElementById('txtphone').value;
      if (validphonenumber !== "") {
        var chk = /^[+]?[0-9]+$/;
        if(chk.test(validphonenumber)){
          document.getElementById('txtphone').style.border = "2px solid green";
        }else{
          document.getElementById('txtphone').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('txtphone').style.border = "2px solid red";
      }
    })
      valconfirmSignupPassword.addEventListener('keyup' , () => {
          let validpassword = document.getElementById('confirmsignuppassword').value;
      if (validpassword !== "") {
        var chk = valsignupPassword.value;
        if(chk == validpassword){
          document.getElementById('confirmsignuppassword').style.border = "2px solid green";
        }else{
          document.getElementById('confirmsignuppassword').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('confirmsignuppassword').style.border = "2px solid red";
      }
      })



    function readyDetails() {
    	// body...
    	firstNane = document.getElementById('txtfirstname').value.toUpperCase();
    	middleName = document.getElementById('txtmiddlename').value.toUpperCase();
    	lastName = document.getElementById('txtlastname').value.toUpperCase();
    	signupEmail = document.getElementById('signupemail').value;
    	let arrayIntrestedArea = document.getElementById('cmbspecialization');
    	intrestedArea = arrayIntrestedArea.options[arrayIntrestedArea.selectedIndex].text;
    	phoneNumber = document.getElementById('txtphone').value;
    	signupPassword = document.getElementById('signuppassword').value;
    	confirmSignupPassword = document.getElementById('confirmsignuppassword').value;
    
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
    btnsignupnewuser.innerHTML = 'Please wait ...';
  	readyDetails();

   if (firstNane == "" || signupEmail == "" || phoneNumber == "" || signupPassword == "" || confirmSignupPassword == "") {
      alert('fill all details correctly');
      btnsignupnewuser.innerHTML = 'Register Now';
    }else{
       if (signupPassword == confirmSignupPassword ) {
      // add data to realtime database
      indexedEmail = signupEmail.replace(".", "@");
      //console.log(signupEmail);

firebase.database().ref('studentusers/' + indexedEmail).set({

      FirstName: firstNane,
      MiddleName: middleName,
      LastName: lastName,
      IntrestedArea: intrestedArea,
      Email: signupEmail,
      PhoneNumber: phoneNumber

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Registration Faled');
     btnsignupnewuser.innerHTML = 'Register Now';
  } else {
    // Data saved successfully!
     //alert('successfully created account');

       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
   
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword);
    window.location.href='accesedacc.html';
    btnsignupnewuser.innerHTML = 'Register Now';
  })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    btnsignupnewuser.innerHTML = 'Register Now';
    // ..
  });
  }
} );

      // end of realtime database


        
      }else{
        alert('password do not match');
        btnsignupnewuser.innerHTML = 'Register Now';
      }
      
    }
 	 
 })

 function getlogindetails() {
 	// body...
 	 loginusername = document.getElementById('txtsiginemail').value;
 	 loginpassword =  document.getElementById('siginppassword').value; 
 	 //console.log(loginusername);
 	 //console.log(loginpassword);
 }


 // sigin registered users 
   let btnsigninnewuser = document.getElementById('btnsubmitlogin')
  btnsigninnewuser.addEventListener('click', () =>{
			getlogindetails();
  	// body...
     btnsigninnewuser.innerHTML = "please wait ..."
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(loginusername, loginpassword);

    window.location.href='accesedacc.html';
  })
  .catch((error) => {
    // Handle Errors here.
    let Wrongpassworderror = 'The password is invalid or the user does not have a password.';
    let nousererror = 'There is no user record corresponding to this identifier. The user may have been deleted.';
    if (error.message == nousererror) {
      seconds = 2;
      //alert('No such user please register');
      showerroralert("Error", "The user does not exits");
    }else if(error.message == Wrongpassworderror){
      //alert('Wrong password');
      seconds = 2;
      showerroralert("Error", "You entered wrong password");
     // console.log(seconds);
    }else{
      seconds = 2;
      // alert('An error occured');
       showeinforalert("An error occoured", "Conduct admin for help");
    }
   
    btnsigninnewuser.innerHTML = "Log In"
  });

  })


    auth.onAuthStateChanged(function(user){
    	if(user){
    		var email = user.email;
    		//alert("Active user" + email);
        window.location.href='accesedacc.html';
    	}else{
    		//alert("No Active user");
    	}
    })


  // catch all errors and throw as aletrs

  function showerroralert(subject, message) {
    // body...
    myalert.style.display = "block";
 myalert.classList.add("successalert");
 mysubject.innerHTML = subject;
 mymessage.innerHTML = message;
  }
  function showsuccessalert(subject, message) {
    // body...
    myalert.style.display = "block";
 myalert.classList.add("erroralert");
 mysubject.innerHTML = subject;
 mymessage.innerHTML = message;
  }
    function showeinforalert(subject, message) {
    // body...
    myalert.style.display = "block";
 myalert.classList.add("inforalert");
 mysubject.innerHTML = subject;
 mymessage.innerHTML = message;
  }


btnforgotpassword.addEventListener('click', () =>{
  window.location.href='reset.html';
})


//// counter code


var countdown = setInterval(function() {
    seconds--;
    if (seconds <= 0){
      clearInterval(countdown);
      myalert.style.display = "none";
    } 
}, 1000);
