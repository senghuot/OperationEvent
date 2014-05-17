
/**
 * Module dependencies.
 */

<<<<<<< HEAD
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
=======
 // Facebook APP ID: 1434034733519593
 // Facebook App Secret: 7037f1e10e153547aef5f26fa2d18708

var express = require('express');
var routes = require('./routes');
var facebook_events = require('./routes/facebook_events');

>>>>>>> 0126229e3ff83b7ecff549b44f6daaa89f30a8cc
var http = require('http');
var path = require('path');

var app = express();

<<<<<<< HEAD
=======
var FB = require('fb');

>>>>>>> 0126229e3ff83b7ecff549b44f6daaa89f30a8cc
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
<<<<<<< HEAD
app.get('/users', user.list);
=======
app.get('/getFriends', facebook_events.getEvents);
>>>>>>> 0126229e3ff83b7ecff549b44f6daaa89f30a8cc

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
<<<<<<< HEAD
=======


>>>>>>> 0126229e3ff83b7ecff549b44f6daaa89f30a8cc
