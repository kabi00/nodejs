var http = require('http');
var sum = require('./123');

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write("Sum of two numbers is : " + sum.sumAndAverage(123, 321));
  res.end();
}).listen(8000);
