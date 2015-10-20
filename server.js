// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');

var appointment = require('./server/controllers/appointment');



// EXPRESS //
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(cors());

app.post('/appointments', appointment.create);

app.get('/admin/appointments', appointment.read);
app.delete('/admin/appointments/:id', appointment.destroy);




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
