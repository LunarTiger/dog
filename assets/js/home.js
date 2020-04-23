var htmldefault = "You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.";
var htmlhome = "My owner is home!";
var htmlawayd = "My owner is away from the house. You can try contacting Lanny at <a href='tel:+15403279023'>1-540-327-9023</a>.";
var htmlawaym = "My owner is away from the house. You can try contacting Shelva at <a href='tel:+13048204338'>1-304-820-4338</a>.";
try{
	var config = {
		databaseURL: "https://lunar-home.firebaseio.com/",
	};
	firebase.initializeApp(config);
	var database = firebase.database();
	//Extra info
	var message = database.ref('dog/stat');
	message.on('value', (function(snapshot) {
		var messageVal = snapshot.val();
		if(messageVal){
			if(messageVal=="home"){
				document.getElementById('more-info').innerHTML = htmlhome+"&nbsp;"+htmldefault;
			}
			else if(messageVal=="awayd"){
				document.getElementById('more-info').innerHTML = htmlawayd+"&nbsp;"+htmldefault;
			}
			else if(messageVal=="awaym"){
				document.getElementById('more-info').innerHTML = htmlawaym+"&nbsp;"+htmldefault;
			}
			else{
				document.getElementById('more-info').innerHTML = htmldefault;
			}
		}
		if(!messageVal){
			document.getElementById('more-info').innerHTML = htmldefault;
		}
	}));
}
catch{
	document.getElementById('more-info').innerHTML = "Script failed. "+htmldefault;
}
