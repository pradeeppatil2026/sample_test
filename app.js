var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
})

var port = process.env.PORT || 8080;


var server = app.listen(port, function () {
  console.log('Example app listening on port:'+port);
})	