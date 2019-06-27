var express = require('express');
var fs = require('fs');
app = express();

app.use('/static',express.static('javascript'));

app.get('/first.txt',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.query.food);
    res.end();
});

app.get('/',function(req,res){
    res.sendFile('C:/Users/tejas_varade/Desktop/Ajax/index.html');
});

app.listen(2000);
console.log('Server started at 2000');