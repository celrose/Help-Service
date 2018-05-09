var express = require('express');
var path = require('path');
var firebase = require('firebase');
var bodyParser = require('body-parser');

var serviceAccount = require('./serviceAccountKey.json');

var config = {
    apiKey: "AIzaSyCSZCt-e4Ce3er7DooAUWF6I5-CRo3qJd0",
    authDomain: "help-service-aedf6.firebaseapp.com",
    databaseURL: "https://help-service-aedf6.firebaseio.com",
    projectId: "help-service-aedf6",
    storageBucket: "help-service-aedf6.appspot.com",
    messagingSenderId: "245532077645"
  };
firebase.initializeApp(config);

var routes = require('./routes/routes')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static('views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => console.log('Listening on port 3000.'))

module.exports = app;