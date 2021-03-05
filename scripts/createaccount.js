 // global variables
 let logform = document.querySelector('.loginform');
let regform = document.querySelector('.regform');
  let btnshowpassword1 = document.getElementById('showpassword1');
 let btnshowpassword2 = document.getElementById('showpassword2');
let firstNane,middleName,lastName,intrestedArea,phoneNumber,signupEmail,signupPassword,confirmSignupPassword;
let loginusername,loginpassword;


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
      let validfirstname = document.getElementById('txtmiddlename').value;
      if (validfirstname !== "") {
        var chk = /^[A-Za-z]+$/;
        if(chk.test(validfirstname)){
          document.getElementById('txtmiddlename').style.border = "2px solid green";
        }else{
          document.getElementById('txtmiddlename').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('txtmiddlename').style.border = "2px solid red";
      }
    })
 
      valsignupEmail.addEventListener('keyup' , () =>{
      let validfirstname = document.getElementById('signupemail').value;
      if (validfirstname !== "") {
        var chk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(chk.test(validfirstname)){
          document.getElementById('signupemail').style.border = "2px solid green";
        }else{
          document.getElementById('signupemail').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('signupemail').style.border = "2px solid red";
      }
    })
      valphoneNumber.addEventListener('keyup' , () =>{
      let validfirstname = document.getElementById('txtphone').value;
      if (validfirstname !== "") {
        var chk = /^[+]?[0-9]+$/;
        if(chk.test(validfirstname)){
          document.getElementById('txtphone').style.border = "2px solid green";
        }else{
          document.getElementById('txtphone').style.border = "2px solid red";
        }
        
      }else{
        document.getElementById('txtphone').style.border = "2px solid red";
      }
    })



    function readyDetails() {
    	// body...
    	firstNane = document.getElementById('txtfirstname').value;
    	middleName = document.getElementById('txtmiddlename').value;
    	lastName = document.getElementById('txtlastname').value;
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

  	readyDetails();


 	/*auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
  .then((user) => {
    // Signed in 
    alert('signed in');
    // ...
  })*/
 firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().createUserWithEmailAndPassword(signupEmail, signupPassword);
    window.location.href='accesedacc.html';
  })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    // ..
  });
    	 
 })

 function getlogindetails() {
 	// body...
 	 loginusername = document.getElementById('txtsiginemail').value;
 	 loginpassword =  document.getElementById('siginppassword').value; 
 	 console.log(loginusername);
 	 console.log(loginpassword);
 }


 // sigin registered users 
   let btnsigninnewuser = document.getElementById('btnsubmitlogin')
  btnsigninnewuser.addEventListener('click', () =>{
			getlogindetails();
  	// body...
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
   
    alert(error.message);
  });


    	/* auth.signInWithEmailAndPassword(loginusername,loginpassword)
    	 .then((user) => {
    // Signed in
    alert('loged in');
   // window.location.href='quizapp.html';
    // ...
  })
  .catch((error) => {
   console.log(error.code);
    alert(error.message);
  });
    	*/

  })




    auth.onAuthStateChanged(function(user){
    	if(user){
    		var email = user.email;
    		alert("Active user" + email);
        window.location.href='accesedacc.html';
    	}else{
    		alert("No Active user");
    	}
    })


  