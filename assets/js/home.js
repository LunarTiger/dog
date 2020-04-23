try{
	var config = {
		databaseURL: "https://lunar-home.firebaseio.com/",
	};
	firebase.initializeApp(config);
	var database = firebase.database();
	//Extra info
	var status = database.ref('dog/status');
	status.on('value', (function(snapshot) {
		var statusVal = snapshot.val();
		if(statusVal){
			if(statusVal=="home"){
				document.getElementById('more-info').innerHTML = "My owner is home! You can contact him at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.";
			}
			else if(statusVal=="away"){
				document.getElementById('more-info').innerHTML = "My owner is away from the house. You can try contacting Lanny at <a href='tel:+15403279023'>1-540-327-9023</a>. You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.";
			}
			else{
				document.getElementById('more-info').innerHTML = statusVal;
			}
		}
		if(!statusVal){
			document.getElementById('more-info').innerHTML = "You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.";
		}
	}));
}
catch{
	document.getElementById('more-info').innerHTML = "You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.";
}
