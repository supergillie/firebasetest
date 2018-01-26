(function(){

	//Initialize firebase
	const config = {

				    apiKey: "AIzaSyCrOdVb-jhLKh37xMIz0ctKmx-hoqLx3Hk",
				    authDomain: "pekr-3dad2.firebaseapp.com",
				    databaseURL: "https://pekr-3dad2.firebaseio.com",
				    storageBucket: "pekr-3dad2.appspot.com",
	};
	firebase.initializeApp(config);

	//Get elements
	const preObject = document.getElementById('object');

	//Create references
	const dbRefObject = firebase.database().ref().child('object');

	//sync object changes
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
		preObject.innerText = 'dsf';
	});
    console.log("kalle");
    preObject.innerText = 'dsf';
}());
