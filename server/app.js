var express = require("express");
var firebase = require("firebase");


var app = express();

// app.use('/client', express.static('client'));
// app.use(express.static(__dirname + '/client'));
require('./config/middleware.js')(app, express);


console.log('Application is listening on 3000');
app.listen(3000);