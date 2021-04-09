let myerror = document.getElementById('btnerror');
let mysuccess = document.getElementById('btnsuccess');
let myinfor = document.getElementById('btninfor');
let mysubject = document.getElementById('alertsubject');
let mymessage  = document.getElementById('alertmessage');
let myalert = document.getElementById('myalert')

myinfor.addEventListener('click', () =>{
 myalert.style.display = "block";
 myalert.classList.add("inforalert");
 mysubject.innerHTML = "Information";
 mymessage.innerHTML = "infor alert was called successfully";
})
mysuccess.addEventListener('click', () =>{
myalert.style.display = "block";
myalert.classList.add("successalert");
 mysubject.innerHTML = "Success";
 mymessage.innerHTML = "success alert was called successfully";
})
myerror.addEventListener('click', () =>{
myalert.style.display = "block";
myalert.style.color = "white";
myalert.classList.add("erroralert");
 mysubject.innerHTML = "Error";
 mymessage.innerHTML = "Error alert was called successfully";
})