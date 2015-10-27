// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');
var passportCtrl = require('./server/services/passport')
var flash = require('connect-flash')
var LocalStrategy  = require('passport-local').Strategy;
var request = require('request');

var UserCtrl = require('./server/controllers/UserCtrl');
var appointment = require('./server/controllers/appointment');
var maintain = require('./server/controllers/maintain');
var flickr = require('./server/controllers/flickrMediaCtrl');


// EXPRESS //
var app = express();

app.use(express.static(__dirname + '/public', { redirect: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'awdawdawjndkaj',
  saveUnitialized: true,
  resave: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).send("no can do");
  }
  return next();
};

app.post('/user', UserCtrl.register);
app.get('/user', isAuthed, UserCtrl.me);
app.put('/user', isAuthed, UserCtrl.update);
app.post('/login', passport.authenticate('local'), function(req, res) {
  if(!req.user){
		res.redirect('/#/admin');
	}
  res.send(req.user)
});

app.get('/logout', function(req, res) {
  req.logout();
  req.session.destroy(function (err) {
    res.redirect('/');
  })
})

app.post('/appointments', appointment.create);
app.get('/admin/appointments', appointment.read);
app.delete('/admin/appointments/:id', appointment.destroy);

app.get('/admin/edit', maintain.read);
app.post('/admin/edit', maintain.create);
app.put('/admin/edit/:id', maintain.update);

app.get('/media', flickr.getInfo);
app.get('/mediaMore', flickr.getInfo2);
app.get('/mediaEvenMore', flickr.getInfo3);

var test = function(req, res, next) {
  console.log("HIT ME");
  return next();
}


// CONNECTIONS //
var mongoURI = 'mongodb://localhost:27017/barber';
var port = 9999;

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
});

app.listen(port, function() {
  console.log('Listening on port '+ port);
});
