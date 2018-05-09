var express  =  require('express');
var app      =  express();
var multer   =  require('multer');
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  var upload   =  multer({ dest: '/uploads/' });
  //var upload = multer({ storage: storage })c
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