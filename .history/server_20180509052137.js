var express  =  require('express');
var app      =  express();
var multer   =  require('multer');
var bodyParser = require('body-parser');
app.use(express.static('public'));
var upload = multer({ dest: 'uploads/' })

app.get('/', function(req, res){
    res.sendFile('index.html');
})

app.post('/upload', upload.any(), function (req, res, next) {
    // req.body contains the text fields
    console.log('upload API Called');
    res.send(res.files);
  })


app.listen(3000, function(){
    console.log('server started On 3000 port');
});