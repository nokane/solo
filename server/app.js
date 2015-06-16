var express = require("express");
var firebase = require("firebase");


var app = express();
app.set('port', process.env.PORT || 3000);
require('./config/middleware.js')(app, express);



app.listen(app.get('port'), function() {
  console.log('Application is running on port', app.get('port'));
});