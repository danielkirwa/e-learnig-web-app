

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
	
})

btnsubmitenroll.addEventListener('click' , ()  => {
	let enrollcourse = document.getElementById('coursetoenroll');
	var selectedcourse = enrollcourse.options[enrollcourse.selectedIndex].value;
	let skilllevel = document.getElementById('skilllevel');
	var selectedlevel = skilllevel.options[skilllevel.selectedIndex].value;

	 console.log(selectedcourse + selectedlevel);
	let myctivityframe = document.querySelector('.enrolled');
	  let newactivityframe = `
	  		<div class="enrolled-activity">
		 	<div class="activitydisplay">
				<center>
					${selectedcourse}
				</center>
			</div><br>
			 <label>Score : 0.0</label>
			<p>
				Just started <br
				<span>Level :</span><br>
			<span> ${selectedlevel}</span
			</p>
		 </div><br>
	  `
	 myctivityframe.innerHTML += newactivityframe;
	 	 alert("added");
	 	 blurbody.style.opacity = "1";
	 	 enrollform.style.display ="none";
})

 openquiz.addEventListener('click' , () => {
 	window.location.href= 'quizapp.html';
 })

btnlogout.addEventListener('click' , () =>{
	    	auth.signOut();
    	alert("signed out");
})


auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        alert("Active user" + email);
         console.log(email);
         usernamedisplay.innerHTML = email + " ";
      }else{
        alert("No Active user");
        window.location.href='registration.html';
      }
    })
