var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
   var led = new five.Led(9);
   var photoResistor = new five.Sensor("A0");

   photoResistor.on('data', function(){
  	
  	this.value > 600 ? led.on() : led.off();
   	
   });

});