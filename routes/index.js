var charsJSON = require('../characters.json');

exports.home = function(req, res){
	characters = charsJSON.characters;
	res.render('home', {
		characters: characters
	});
};

exports.single_char = function(req, res){
	res.render('single_char');
};

exports.notFound = function(req, res){
	res.render('notFound');
};