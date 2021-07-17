let contentcontrolmenu = document.getElementById('contentcontrolmenu');
let quizcontrolmenu = document.getElementById('quizcontrolmenu');
let usercontrolmenu = document.getElementById('usercontrolmenu');
let unitcontrolmenu = document.getElementById('unitcontrolmenu');
let quiznav = document.querySelector('.quiz-nav');
let usernav = document.querySelector('.user-nav');
let unitnav = document.querySelector('.unit-nav');
let contentnav = document.querySelector('.content-nav');
let openmenu = 0;



function checkmenutoOpen(menunumber){
	switch (menunumber){
      case 1:
      usernav.style.display = "none";
      unitnav.style.display = "none";
      contentnav.style.display = "none";
      quiznav.style.display = "block";
       break;
       case 2:
       quiznav.style.display = "none";
       unitnav.style.display = "none";
      contentnav.style.display = "none";
       usernav.style.display = "block";
       break;
       case 3:
       quiznav.style.display = "none";
       usernav.style.display = "none";
       contentnav.style.display = "none";
       unitnav.style.display = "block";
      
       break;
       case 4:
       quiznav.style.display = "none";
       usernav.style.display = "none";
       unitnav.style.display = "none";
       contentnav.style.display = "block";
       break;
       default:
       quiznav.style.display = "none";
       usernav.style.display = "none";
       unitnav.style.display = "none";
       contentnav.style.display = "none";

	}

}

 let reloadmenunumber = localStorage.getItem('OpenMenu');
reloadmenunumber = parseInt(reloadmenunumber);
 //console.log(typeof reloadmenunumber);
 checkmenutoOpen(reloadmenunumber);

unitcontrolmenu.addEventListener('click', ()=>{
  openmenu = 3;
  localStorage.setItem('OpenMenu', 3);
  localStorage.setItem('activesection', null);
  localStorage.setItem('activesubsection', null);
  quizsection.style.display = "none";
  resultssection.style.display = "none";
  schedulesection.style.display = "none";
  checkmenutoOpen(3)
})
usercontrolmenu.addEventListener('click', ()=>{
	 openmenu = 2;
	 localStorage.setItem('OpenMenu', 2);
   localStorage.setItem('activesection', null);
   localStorage.setItem('activesubsection', null);
   quizsection.style.display = "none";
  resultssection.style.display = "none";
  schedulesection.style.display = "none";
	 checkmenutoOpen(2)
})
quizcontrolmenu.addEventListener('click', ()=>{
	 openmenu = 1;
	 localStorage.setItem('OpenMenu', 1);
   localStorage.setItem('activesection', null);
   localStorage.setItem('activesubsection', null);
   quizsection.style.display = "none";
      resultssection.style.display = "none";
      schedulesection.style.display = "none";
	 checkmenutoOpen(1)
})
contentcontrolmenu.addEventListener('click', ()=>{
	 openmenu = 4;
	 localStorage.setItem('OpenMenu', 4);
   localStorage.setItem('activesection', null);
   localStorage.setItem('activesubsection', null);
   quizsection.style.display = "none";
    resultssection.style.display = "none";
    schedulesection.style.display = "none";
	 checkmenutoOpen(4)
})
