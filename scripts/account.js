
// global variable 
let btnaddactivity = document.getElementById('addactivity');



let callpopupmenu = document.querySelector('.profileicon');
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
	 alert("added");
	let myctivityframe = document.querySelector('.enrolled');
	  let newactivityframe = `
	  		<div class="enrolled-activity">
		 	<div class="activitydisplay">
				<center>
					Activity One
				</center>
			</div><br>
			 <label>Score : 0.0</label>
			<p>
				Just started
			</p>
		 </div><br>
	  `
	 myctivityframe.innerHTML += newactivityframe;
})