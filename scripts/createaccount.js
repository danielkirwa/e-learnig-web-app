
  // Your web app's Firebase configuration
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   const auth = firebase.auth();

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