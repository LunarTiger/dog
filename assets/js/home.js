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
		document.getElementById('more-child').innerHTML = messageVal;
	}
	if(!messageVal){
		document.getElementById('more-child').innerHTML = "<p>Nothing to see here.</p>";
	}
}));