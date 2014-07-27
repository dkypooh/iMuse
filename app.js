
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var hash = require("./routes/api/hash")
var http = require('http');
var path = require('path');
var app = express();


///////////////////////////////////////////////////

var ajaxSev = require('./routes/ajaxServices');
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


// ajax服务
(function(){
	app.get('/getActiveUsers',ajaxSev.queryUsers);
})()


server.listen(app.get('port'));
/**
 * Socket.io 服务
 */



var _sessionHashTable = [];
var $$nowHash = null; 
io.sockets.on('connection', function (socket) {
  	socket.on('client create private room',function(_data){
        console.log('connect: '+_data.hash)
        socket.join(_data.hash);
        socket.emit('start chat');
        // 在独立房间里广播消息
        $$nowHash = _data.hash;
        io.sockets.in(_data.hash).emit('new member add',"add new friend:"+_data.user);
  	}); // 创建房间


    socket.on("client send message",function(_data){
       // 在私有房间里广播消息
      io.sockets.in($$nowHash).emit('chating',_data);    
    });

});



