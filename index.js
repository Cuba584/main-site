var express = require('express');
var app = express();
var archieml = require('archieml');
var parsed = archieml.load("key: value");
var thisText;


app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');




//archieml

var config = require('./config.json');
var url = require('url');
var htmlparser = require('htmlparser2');
var Entities = require('html-entities').AllHtmlEntities;

var CLIENT_ID= config.google_id;
var CLIENT_SECRET=config.google_secret;

// Grab google packages and the drive api
var google = require('googleapis');
var drive = google.drive('v2');

// Set up auth
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, "http://127.0.0.1:3000/oauth2callback");
google.options({ auth: oauth2Client });
var KEY = '1eXbE48sI_6qaGeU6gCE3gv3Pw1L5xFapiiKRCKxqX0c';

app.get('/oauth2callback', function (req, res) {
  res.type('json');
  var code = url.parse(req.url, true).query.code;
  oauth2Client.getToken(code, function(err, tokens) {
    if(!err) {
      oauth2Client.setCredentials(tokens);

      request = drive.files.get({fileId: KEY}, function (err, doc) {
        if (err) return res.send(err)

        export_link = doc.exportLinks['text/html'];
        oauth2Client._makeRequest({method: "GET", uri: export_link}, function(err, body) {

          var handler = new htmlparser.DomHandler(function(error, dom) {
            var tagHandlers = {
              _base: function (tag) {
                var str = '';
                tag.children.forEach(function(child) {
                  if (func = tagHandlers[child.name || child.type]) str += func(child);
                });
                return str;
              },
              text: function (textTag) {
                return textTag.data;
              },
              span: function (spanTag) {
                return tagHandlers._base(spanTag);
              },
              p: function (pTag) {
                return tagHandlers._base(pTag) + '\n';
              },
              a: function (aTag) {
                var href = aTag.attribs.href;
                if (href === undefined) return '';

                // extract real URLs from Google's tracking
                // from: http://www.google.com/url?q=http%3A%2F%2Fwww.nytimes.com...
                // to: http://www.nytimes.com...
                if (aTag.attribs.href && url.parse(aTag.attribs.href,true).query && url.parse(aTag.attribs.href,true).query.q) {
                  href = url.parse(aTag.attribs.href,true).query.q;
                }

                var str = '<a href="' + href + '">';
                str += tagHandlers._base(aTag);
                str += '</a>';
                return str;
              },
              li: function (tag) {
                return '* ' + tagHandlers._base(tag) + '\n';
              }
            };

            ['ul', 'ol'].forEach(function(tag) {
              tagHandlers[tag] = tagHandlers.span;
            });
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function(tag) {
              tagHandlers[tag] = tagHandlers.p;
            });

            var body = dom[0].children[1];
            var parsedText = tagHandlers._base(body);

            // Convert html entities into the characters as they exist in the google doc
            var entities = new Entities();
            parsedText = entities.decode(parsedText);

            // Remove smart quotes from inside tags
            parsedText = parsedText.replace(/<[^<>]*>/g, function(match){
              return match.replace(/”|“/g, '"').replace(/‘|’/g, "'");
            });

            var parsed = archieml.load(parsedText);
            sendIt(parsed);
            res.send(parsed);
          });

          var parser = new htmlparser.Parser(handler);

          parser.write(body);
          parser.done();
        });
      });
    }
  });
});

app.get('/:key', function (req, res) {
  var redirect_url = oauth2Client.generateAuthUrl({
    scope: 'https://www.googleapis.com/auth/drive'
  });
  res.redirect(redirect_url);
})

app.param('key', function (req, res, next, key) {
  KEY = key || KEY;
  next();
})

function sendIt(parsed){
  thisText = parsed;
  console.log(thisText);
  // console.log(parsed);
}

app.get('/', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  response.render('pages/drivetest', {body: thisText});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
