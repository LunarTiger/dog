var config = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
//Extra info
var message = database.ref('dog/html');
message.on('value', (function(snapshot) {
	var messageVal = snapshot.val();
	if(messageVal){
		if(messageVal=1){
			document.getElementById('more-child').innerHTML = "<p>You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.</p>";
		}
		if(messageVal=2){
			document.getElementById('more-child').innerHTML = "My owner is away from the house. You can try contacting Lanny at <a href='tel:+15403279023'>1-540-327-9023</a>. You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>."
		}
		else{
			document.getElementById('more-child').innerHTML = messageVal;
		}
	}
	if(!messageVal){
		document.getElementById('more-child').innerHTML = "<p>Nothing to see here.</p>";
	}
}));