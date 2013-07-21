var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var x = fs.readFileSync('./index.html','utf8',function(data){response.send(data);});

//console.log(x);
  
 response.send(x);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});
