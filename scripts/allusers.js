 let alluserstable = document.getElementById('alluserstable');
let FirstName,LastName,Intrest,Email;

 function showusers() {
 	// body...
alluserstable.innerHTML += `
            
        <tr>
          <td>${FirstName + " " + LastName}</td>
          <td>null</td>
          <td>${Intrest}</td>
          <td>${Email}</td>
          <td>Action</td>
        </tr>
      
		 	
			`;

 var userrows = document.getElementById('tableusers').getElementsByTagName('tr');
var RowCount = userrows.length;
let labeltotalusers = document.getElementById('labeltotalusers');
labeltotalusers.innerHTML = RowCount-1;
 }



FetchAllusers();

function FetchAllusers(){ 
  let today = Date.now();
	firebase.database().ref('studentusers').orderByChild('studentusers/Postkey').once('value', function(snapshot) {
		snapshot.forEach( 
			function(Childsnapshot) {
   FirstName = Childsnapshot.val().FirstName;
   LastName = Childsnapshot.val().LastName;
   Email = Childsnapshot.val().Email;
   Intrest = Childsnapshot.val().IntrestedArea;
   showusers();

})

	})
 
}

