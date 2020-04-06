var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('User Connection');
    socket.on('disconnect', function(){
        console.log('User Disconnect');
    });

    socket.on('sohbetmesaj', function(msg){
        console.log('Mesaj: ' + msg);
        io.emit('sohbetmesaj', msg);
    });
});

http.listen(8099, function(){
    console.log('8099 enter Port');
});