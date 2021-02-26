
// global variable 
let btnaddactivity = document.getElementById('addactivity');
let btncloseenrollpopup = document.getElementById('btncancelenroll');
let callpopupmenu = document.querySelector('.profileicon');
let enrollform = document.querySelector('.popupaddenroll');
let btnsubmitenroll = document.getElementById('btnsubmitenroll');
let blurbody = document.getElementById('opacity');

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