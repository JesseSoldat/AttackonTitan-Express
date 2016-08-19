var charsJSON = require('../characters.json');

exports.home = function(req, res){
	characters = charsJSON.characters;
	res.render('home', {
		characters: characters
	});
};

exports.single_char = function(req, res){
	var link = req.params.link;
	
	var chars = charsJSON.characters;

	console.log(link);
	// console.log(chars);

	var single;
	 for (var key in chars) {
	  	if (chars.hasOwnProperty(key)) {
	    var val = chars[key];
	    // console.log(val.link);
	    if(val.link === link)
	    	single = val;
  		}
	};
	console.log(single);


	// for(var i = 0; i < chars.length; i++){
	// 	console.log(chars[i].poster);
	// }

	res.render('single_char', {single: single});
};

exports.notFound = function(req, res){
	res.render('notFound');
};