var firebase = require('firebase');

exports.index = function(req, res, next) {
	// fetch data from database here
	var email = 'kikles_kadayos@ismysick.name'; // data from database
	var food = ['hotdog', 'itlog'];
  res.render('home', {email: email, food: food});
}

exports.search = function(req, res) {
	//needs one refresh to load database
	var database = firebase.database();
	var search_string = req.body.main_search;

	var ref = firebase.database().ref("food");
	//string category
	var foods = [];
	ref.orderByChild('name').on('child_added', function(snapshot) {
		console.log(snapshot.val());
		foods.push(snapshot.val());
	});

	res.render('results', {foods: foods});
}