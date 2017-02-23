var express = require('express');
var app = express();
var ejs = require('ejs');
var archieml = require('archieml');
var parsed = archieml.load('key: value');
var sent = require('./parse.js');
var fs = require('fs');

var pages = [
  'aging', 'art', 'skate', 'tourism', 'youth'
]

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//archieml

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

//gets the name of the page being requested and sends the relevant JSON file
app.get('/pages/*', function(request, response){
  var lastIdx = request.originalUrl.lastIndexOf('/');
  var pageName = request.originalUrl.substring(lastIdx+1);
  var bodyData = JSON.parse(fs.readFileSync('./data/' + pageName + '.json'));
  response.render('pages/inner', {body: bodyData});
});

app.get('*', function(request, response){
  response.render('pages/404');
});
