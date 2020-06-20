var place = [
	"You can contact my owner at <a href='tel:+15406926899' id='phone'>1-540-692-6899</a> or through his <a href='/contact' id='contact' target='_blank'>contact page</a>.",
	"My owner is home!",
	"My owner is away from the house.",
	"You can try contacting Lanny at <a href='tel:+15403279023'>1-540-327-9023</a>.",
	"You can try contacting Shelva at <a href='tel:+13048204338'>1-304-820-4338</a>.",
	"You can try contacting Kelly at at <a href='tel:+15403980502'>1-540-398-0502</a>."
];
try{
	var config = {
		databaseURL: "https://lunar-home.firebaseio.com/",
	};
	firebase.initializeApp(config);
	var database = firebase.database();
	//Extra info
	var message = database.ref('lunar/location');
	message.on('value', (function(snapshot) {
		var messageVal = snapshot.val();
		if(messageVal){
			if(messageVal=="in"){
				document.getElementById('more-info').innerHTML = place[1]+" "+place[0];
			}
			else if(messageVal=="out"){
				document.getElementById('more-info').innerHTML = place[2]+" "+place[0];
			}
			else if(messageVal=="dad"){
				document.getElementById('more-info').innerHTML = place[2]+" "+place[3]+" "+place[0];
			}
			else if(messageVal=="mom"){
				document.getElementById('more-info').innerHTML = place[2]+" "+place[4]+" "+place[0];
			}
			else if(messageVal=="sis"){
				document.getElementById('more-info').innerHTML = place[2]+" "+place[5]+" "+place[0];
			}
			else{
				document.getElementById('more-info').innerHTML = place[0];
			}
		}
		if(!messageVal){
			document.getElementById('more-info').innerHTML = place[0];
		}
	}));
}
catch{
	document.getElementById('more-info').innerHTML = "Script failed. "+place[0];
}
