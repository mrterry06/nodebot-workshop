var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
	var motor = new five.Motor(9);
	motor.start(200);
	this.wait(2000, ()=>{
		motor.stop();
		this.wait(1000, ()=>{
			motor.start(200);
		});
	});

});