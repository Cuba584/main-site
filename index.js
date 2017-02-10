var express = require('express');
var app = express();
var archieml = require('archieml');
var parsed = archieml.load("key: value");
var thisText;
var artBody;
var tourismBody;
var entreBody;
var agingBody;
var skateBody;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

//archieml

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var archieml = require('archieml');

// Edit the file ID for the Google Doc. Be sure it's set to the "Share" preferences to "anyone on the internet"
//var fileId = '1eXbE48sI_6qaGeU6gCE3gv3Pw1L5xFapiiKRCKxqX0c';
var fileIds = {
    "art": "1ieI3nN9jke_bAr7sK9VQAI9NMhWTKivI6ttv3iGBhRQ",
    "tourism": "1hYVU1e8l0vP7U5vGmWJY1k2B7mnjHpQi1qd4gn9xkFE",
    "entre": "1GVusAF86-rrv6RwSMF_H47xO2eG2tVayfumcj7Q1akM",
    "aging": "1RY9sG1oazoFfE9ZGEK9U3zaAmyOJB6mYcc6VDKy7xBA",
    "skate": "1M1o12fbc33KOhkNJl-Vagimqbm3Diof-cKVbNvZuFi0"
}

// Overall varibales
var SCOPES = ['https://www.googleapis.com/auth/drive'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-api-quickstart.json';

// Load client secrets from a local file.
var oauth2Client;
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Drive API.
  authorize(JSON.parse(content), getExportLink);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Get the actual file contents as plain text
 *
 * @param {String} The URL to request the content from
 */
function getFileContents(exportLink, currentTopic){
  oauth2Client.request({
      method: 'GET',
      uri: exportLink
  }, function(err, body) {
      if (err) {
          console.log('Getting file contents failed.', err);
          return;
      }
      var data = archieml.load(body);
    //  console.log(data);
    console.log(currentTopic);
      sendIt(data, currentTopic);
  });
}

function sendIt(data, currentTopic){
  switch(currentTopic) {
    case "art":
    artBody= data
    break;
    case "tourism":
    tourismBody= data
    break;
    case "entre":
    entreBody= data
    break;
    case "aging":
    agingBody= data
    break;
    case "skate":
    skateBody= data
    break;
  }
//  thisText = data;
//  console.log(thisText);
  // console.log(parsed);
}
/**
 * Get the download link, also called the export link, from the file response
 *
 * @param {Object} Google Drive authorization
 */
function getExportLink(auth){
  for (i in fileIds){
  (function(i){
    var currentTopic = i;
    var service = google.drive('v2');
    var request = service.files.get({
      auth: auth,
      fileId: fileIds[i]
    },function(err,response){
      if(err){
        console.log('Getting export link failed.', err);
        return;
      }

      var exportLink = response['exportLinks']['text/plain'];

      getFileContents(exportLink, currentTopic);

    });
  })(i);
}
}

app.get('/', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  response.render('pages/index');
});

app.get('/arttest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof artBody !== 'undefined') {
  response.render('pages/arttest', {body: artBody});
} else {
  response.render('pages/404');
}
});

app.get('/entretest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof entreBody !== 'undefined') {
  response.render('pages/entretest', {body: entreBody});
} else {
  response.render('pages/404');
}
});

app.get('/tourismtest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof tourismBody !== 'undefined') {
  response.render('pages/tourismtest', {body: tourismBody});
} else {
  response.render('pages/404');
}
});

app.get('/skatetest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof skateBody !== 'undefined') {
  response.render('pages/skatetest', {body: skateBody});
} else {
  response.render('pages/404');
}
});

app.get('/agingtest', function(request, response) {
//  response.render('pages/index', {'body': thisText});
  if (typeof agingBody !== 'undefined') {
  response.render('pages/agingtest', {body: agingBody});
} else {
  response.render('pages/404');
}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
