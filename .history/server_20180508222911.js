var express  =  require('express');
var app      =  express();
var multer   =  require('multer');
var bodyParser = require('body-parser');
app.use(express.static('public'));


app.get('/', function(req, res){
    res.sendFile('index.html');
})





app.listen(3000, function(){
    console.log('server started On 3000 port');
});