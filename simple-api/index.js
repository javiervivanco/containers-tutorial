console.log({status: 'UP'})

var express = require('express');
var path = require('path');
var app = express();
const dotenv = require('dotenv');

dotenv.config({path:path.resolve(process.cwd(), '.env')});

if (dotenv.error) {
  throw dotenv.error
}
 

const port = process.env.PORT;

app.get('/ping', function (req, res) {
  res.json({pong: true, datetime: Date().toLocaleString()});
});

app.get('/health', function (req, res) {
  res.json({status: 'OK', "datetime": Date().toLocaleString()});
});

app.get('/ping/stdout', function (req, res) {
  res.json({"pong": true, "datetime": Date().toLocaleString()});
  console.log({pong: true, out: 'stdout' ,"datetime": Date().toLocaleString()});
});
app.listen(process.env.PORT, function () {
  console.log(`Port: ${port}`);
});
