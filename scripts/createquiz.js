
let btnsavequiz = document.getElementById('savequiz');
btnsavequiz.addEventListener('click', () =>{
	let question = document.getElementById('ttaquestion').value;
	let answer1 = document.getElementById('ttaanswer1').value;
	let answer2 = document.getElementById('ttaanswer2').value;
	let answer3 = document.getElementById('ttaanswer3').value;
	 localStorage.setItem('qustion', question);
	 localStorage.setItem('answer1', answer1);
	 localStorage.setItem('answer2', answer2);
	 localStorage.setItem('answer3', answer3);

	 // display questions

	



})

let btnpreviewquiz = document.getElementById('quizpreview');
btnpreviewquiz.addEventListener('click', () =>{

	 let quizdisplay = document.getElementById('quizholder');
	 let ansdisplay1 = document.getElementById('ans1');
	 let ansdisplay2 = document.getElementById('ans2');
	 let ansdisplay3 = document.getElementById('ans3');
       
        let q = localStorage.getItem('qustion');
        let a1 = localStorage.getItem('answer1');
        let a2 = localStorage.getItem('answer2');
        let a3 = localStorage.getItem('answer3');
	  quizdisplay.innerHTML = q;
	  ansdisplay1.innerHTML = a1;
	  ansdisplay2.innerHTML = a2;
	  ansdisplay3.innerHTML = a3;
})

let btnsubmit =document.getElementById('submit');
btnsubmit.addEventListener('click', () =>{

})

 function keeppreview() {
 	// body...
 	let quizdisplay = document.getElementById('quizholder');
	 let ansdisplay1 = document.getElementById('ans1');
	 let ansdisplay2 = document.getElementById('ans2');
	 let ansdisplay3 = document.getElementById('ans3');
       
        let q = localStorage.getItem('qustion');
        let a1 = localStorage.getItem('answer1');
        let a2 = localStorage.getItem('answer2');
        let a3 = localStorage.getItem('answer3');
	  quizdisplay.innerHTML = q;
	  ansdisplay1.innerHTML = a1;
	  ansdisplay2.innerHTML = a2;
	  ansdisplay3.innerHTML = a3;
 }
 keeppreview();