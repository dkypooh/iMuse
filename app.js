
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
// var socketApp = require("./routes/socket.app");
var hash = require("./routes/api/hash")
var http = require('http');
var path = require('path');
var app = express();

///////////////////////////////////////////////////

var dataModel = require('./routes/ajaxServices');
///////////////////////////////////////////////////
var server = http.createServer(app);
var io = require("socket.io")(server);


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
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
app.get('/users', user.list);
app.get('/getActiveUsers',dataModel.getActiveUsers);


server.listen(app.get('port'));
/**
 * Socket.io 服务
 */

io.sockets.on('connection', function (socket) {
  	
});



