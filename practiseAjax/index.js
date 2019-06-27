var express = require('express');
app = express();

app.use('/static',express.static('javascript'))

app.get('/',function(request, response) {
    response.sendFile('C:\\Users\\tejas_varade\\Desktop\\AJAXP\\html\\index.html')
});

app.get('/companyTag',function(request,response){
    console.log('In Company Tag');
    var companyTag = request.query.companyName;
    var company1Scopes = ['C1Scope1','C1Scope2','C1Scope3']
    var company2Scopes = ['C2Scope1','C2Scope2','C2Scope3']
    if(companyTag=='Company1') {
        response.send(company1Scopes);
    }
    else {
        if(companyTag=='Company2') {
            response.send(company2Scopes);
        }
    }
});


app.get('/scopeTag',function(request,response){
    console.log('In Scope Tag');
    var level = ['Level1','Level2','Level3'];
    response.send(level);
});
app.listen(7000);
console.log('Server started at 7000')