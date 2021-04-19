
// global variable 

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


// get results from the database

function pythonresults() {
	// body...
	let coursename , coursecode , courselevel,coursescore;
		coursename = "Python";
	coursecode = localStorage.getItem('pythoncode');
 	courselevel = localStorage.getItem('pythonlevel' );
 	coursescore = localStorage.getItem('pythonscore');
 	 if (coursescore == undefined ) {

 	 }else{
 	 	let addrow = `
 	 		<tr>
 	 				<td>${coursecode}</td>
 	 		        <td>${coursename}</td>
					<td>${courselevel}</td>
					<td>${coursescore}%</td>
				</tr>
 	 	`
 	 	tbody.innerHTML += addrow;
 	 }
}
pythonresults();

   function javaresults() {
   	// body...
   	let coursename , coursecode , courselevel,coursescore;
   			coursename = "Java";
   	coursecode = localStorage.getItem('javacode');
 	courselevel = localStorage.getItem('javalevel');
 	coursescore = localStorage.getItem('javascore');
 	 if (coursescore == undefined ) {

 	 }else{
 	 	let addrow = `
 	 		<tr>
 	 		        <td>${coursecode}</td>
 	 				<td>${coursename}</td>
					<td>${courselevel}</td>
					<td>${coursescore}%</td>
				</tr>
 	 	`
 	 	tbody.innerHTML += addrow;
 	 }
   }
   javaresults();


function androidresults() {
	// body...
	let coursename , coursecode , courselevel,coursescore;
				coursename = "Android";
	 coursecode = localStorage.getItem('androidcode');
 	courselevel = localStorage.getItem('androidlevel');
 	coursescore = localStorage.getItem('androidscore');
 	 if (coursescore == undefined ) {

 	 }else{
 	 	let addrow = `
 	 		<tr>
 	 				<td>${coursecode}</td>
 	 				<td>${coursename}</td>
					<td>${courselevel}</td>
					<td>${coursescore}%</td>
				</tr>
 	 	`
 	 	tbody.innerHTML += addrow;
 	 }
}
androidresults();
function webresults() {
	// body...
	let coursename , coursecode , courselevel,coursescore; 
			coursename = "Web Development";
	coursecode = localStorage.getItem('webcode');
 	courselevel = localStorage.getItem('weblevel');
 	coursescore = localStorage.getItem('webscore');
 	 if (coursescore == undefined ) {

 	 }else{
 	 	let addrow = `
 	 		<tr>
 	 		        <td>${coursecode}</td>
 	 				<td>${coursename}</td>
					<td>${courselevel}</td>
					<td>${coursescore}%</td>
				</tr>
 	 	`
 	 	tbody.innerHTML += addrow;
 	 }
}
webresults();



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
