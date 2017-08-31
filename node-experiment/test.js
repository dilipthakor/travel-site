var fileYo = require('fs');
var https = require('https');

fileYo.writeFile(__dirname + "/index.html", "<h1> hrelllpp roackas </h1>");

var sanUrl = "https://avatars1.githubusercontent.com/u/8983181?v=4&u=d0e155250b06b25da30e8128b9c2c2af7d7ce123&s=400";
var sanfile = fileYo.createWriteStream(__dirname + "/sanpic.jpg");
var request = https.get(sanUrl, function(response){
	response.pipe(sanfile);
	})
