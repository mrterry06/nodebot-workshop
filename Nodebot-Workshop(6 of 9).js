var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
	var piezo = new five.Piezo(8);
	server.on('message', ()=>{
		piezo.frequency(587, 1000);
	});
  
});

server.bind(1337);