var express = require('express');
var app = express();
var archieml = require('archieml');
var parsed = archieml.load("key: value");
var sent = require('./parse.js');
var fs = require('fs');
console.log(sent.sendIds());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//archieml

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log(app.get('port'));
  console.log('Node app is running on port', app.get('port'));
});


app.get('/', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  response.render('pages/index');

});

app.get('/arttest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
 var file = JSON.parse(fs.readFileSync('./data/art.json'));
 console.log(file);
  response.render('pages/arttest', {body: file});

});

app.get('/entretest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof sent.entreBody !== 'undefined') {
  response.render('pages/entretest', {body: sent.entreBody});
} else {
  response.render('pages/404');
}
});

app.get('/tourismtest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof sent.tourismBody !== 'undefined') {
  response.render('pages/tourismtest', {body: sent.tourismBody});
} else {
  response.render('pages/404');
}
});

app.get('/skatetest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof sent.skateBody !== 'undefined') {
  response.render('pages/skatetest', {body: sent.skateBody});
} else {
  response.render('pages/404');
}
});

app.get('/agingtest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof agingBody !== 'undefined') {
  response.render('pages/agingtest', {body: sent.agingBody});
} else {
  response.render('pages/404');
}
});
