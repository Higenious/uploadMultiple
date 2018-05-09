var express  =  require('express');
var app      =  express();
var multer   =  require('multer');



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,  'index.html'));
})





app.listen(3000, function(){
    console.log('server started On 3000 port');
});