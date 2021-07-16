let contentcontrolmenu = document.getElementById('contentcontrolmenu');
let quizcontrolmenu = document.getElementById('quizcontrolmenu');
let usercontrolmenu = document.getElementById('usercontrolmenu');
let unitcontrolmenu = document.getElementById('unitcontrolmenu');
let openmenu = 0;



function checkmenutoOpen(menunumber){
	switch (menunumber){
      case 1:
       alert("one");
       break;
       case 2:
       alert("two");
       break;
       case 3:
       alert("three");
       break;
       case 4:
       alert("four");
       break;
       default:
       alert("non");

	}

}

 let reloadmenunumber = localStorage.getItem('OpenMenu');
reloadmenunumber = parseInt(reloadmenunumber);
 //console.log(typeof reloadmenunumber);
 checkmenutoOpen(reloadmenunumber);

unitcontrolmenu.addEventListener('click', ()=>{
  openmenu = 3;
  localStorage.setItem('OpenMenu', 3);
  checkmenutoOpen(3)
})
usercontrolmenu.addEventListener('click', ()=>{
	 openmenu = 2;
	 localStorage.setItem('OpenMenu', 2);
	 checkmenutoOpen(2)
})
quizcontrolmenu.addEventListener('click', ()=>{
	 openmenu = 1;
	 localStorage.setItem('OpenMenu', 1);
	 checkmenutoOpen(1)
})
contentcontrolmenu.addEventListener('click', ()=>{
	 openmenu = 4;
	 localStorage.setItem('OpenMenu', 4);
	 checkmenutoOpen(4)
})
