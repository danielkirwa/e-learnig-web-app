 	let tbody = document.getElementById('resultstablebody');
let callpopupmenu = document.querySelector('.profileicon');
let usernamedisplay = document.getElementById('logedinusername');
let btnlogout = document.getElementById('btnlogout');

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
     let email = localStorage.getItem('pemail')

     

}

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
