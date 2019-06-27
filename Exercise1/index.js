var express = require('express');
var fs = require('fs');

var app = express();

app.use('/static',express.static('javascript'));

app.get('/',function(req,res) {
	res.sendFile('C:/Users/tejas_varade/Desktop/Ajax/Exercise1/html/index.html');
});

app.get('/read',function(request,response) {
	fs.readFile('C:/Users/tejas_varade/Desktop/Ajax/Exercise1/textFile.txt','utf-8',function(err,content){
		if(err) {
			console.log('Error occurred while reading file');
		}
		else {
			response.send(content.toString());
		}
	});
	//fs.close();
});

app.listen(7000);