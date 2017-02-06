var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
	var potentiometer = new five.Sensor("A2");
	var servo		  = new five.Servo(9);

	potentiometer.on("change", function(val){
		//Look at Arduino Map method for more detail
		var angle = five.Fn.map(val, 0, 1023, 0, 179);
		servo.to(angle);
	});
  
});