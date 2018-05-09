var express  =  require('express');
var app      =  express();
var multer   =  require('multer');
var bodyParser = require('body-parser');
app.use(express.static('public'));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  var upload = multer({ dest: 'public/uploads/ ' })
  var upload = multer({ storage: storage })
app.get('/', function(req, res){
    res.sendFile('index.html');
})

app.post('/', upload.any(), function (req, res, next) {
    // req.body contains the text fields
    console.log('upload API Called');
    res.send(res.files);
  })


app.listen(3000, function(){
    console.log('server started On 3000 port');
});