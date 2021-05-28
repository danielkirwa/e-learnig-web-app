 	let tbody = document.getElementById('resultstablebody');
let callpopupmenu = document.querySelector('.profileicon');
let usernamedisplay = document.getElementById('logedinusername');
let btnlogout = document.getElementById('btnlogout');
let userFullName = document.getElementById('fullname');
let userPhone = document.getElementById('Phonenumber');
let userEmail = document.getElementById('useremail');
let intrestArea = document.getElementById('intrest');
let enrolls = document.getElementById('Enrolls');
let status = document.getElementById('status');



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


// populate profile page

function displayprofiledetails() {
  // body...
     let fname = localStorage.getItem('pfname');
     let mname =   localStorage.getItem('pmname');
     let lname = localStorage.getItem('plname');
     let intrest =  localStorage.getItem('pintrest');
     let phone = localStorage.getItem('pphone');
     let email = localStorage.getItem('pemail');

     // email = email.replace("@", "@" );
      let fullname = fname +  " " + mname +  " " + lname;

      userFullName.innerHTML = fullname;
      userPhone.innerHTML = phone;
      userEmail.innerHTML = email;
      intrestArea.innerHTML = intrest;
      enrolls.innerHTML = 'null';
      status.innerHTML = 'Active';

}
displayprofiledetails();

  // signout
btnlogout.addEventListener('click' , () =>{
	localStorage.clear();
	    	auth.signOut();
    	alert("signed out");
})

auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        //alert("Active user" + email);
         //console.log(email);
         usernamedisplay.innerHTML = email + " ";
      }else{
       // alert("No Active user");
        window.location.href='registration.html';
      }
    })
