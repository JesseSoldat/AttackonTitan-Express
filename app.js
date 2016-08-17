var express = require('express')
	path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var port = 8000;
app.listen(process.env.PORT || port);

console.log('Listening on port: ' + port);