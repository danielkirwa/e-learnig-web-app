let userFullName = document.getElementById('fullname');
let userPhone = document.getElementById('Phonenumber');
let userEmail = document.getElementById('useremail');
let intrestArea = document.getElementById('intrest');
let enrolls = document.getElementById('Enrolls');
let status = document.getElementById('status');

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