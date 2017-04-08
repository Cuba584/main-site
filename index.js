var gulp = require('gulp');
var sass = require('gulp-sass');
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var archieml = require('archieml');
var parsed = archieml.load('key: value');
var fs = require('fs');

  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

  app.get('/', function(request, response) {
    response.render('pages/index', {page: 'index', espanol: isEspanol(request)});
  });

  app.get('/about', function(request, response){
    var teamData = JSON.parse(fs.readFileSync('data/team.json'));
    bodyData = JSON.parse(fs.readFileSync('data/about.json'));
    response.render('pages/about', {body: bodyData, team: teamData, page: 'about', espanol: isEspanol(request)});
  });

  app.get('/pages/:id', function(req, res){
    var pageName = req.params.id;
    var bodyData;
	if (isEspanol(req)){
		bodyData = JSON.parse(fs.readFileSync('data/' + pageName + 'espanol.json'));
	} else {
		bodyData = JSON.parse(fs.readFileSync('data/' + pageName + '.json'));
	}
    res.render('pages/inner', {body: bodyData, page: '/pages/' + pageName, espanol: isEspanol(req)});
  });

  app.get('*', function(request, response){
    response.render('pages/404', {page: '404', espanol: isEspanol(request)});
  });

var isEspanol = function(req){
	return req.query.lang && req.query.lang == "es";
};
