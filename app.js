var express = require('express')
	path = require('path');

var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('*', routes.notFound);

var port = 8000;
app.listen(process.env.PORT || port);

console.log('Listening on port: ' + port);