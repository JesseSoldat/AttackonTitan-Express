exports.home = function(req, res){
	res.render('home');
};

exports.single_char = function(req, res){
	res.render('single_char');
};

exports.notFound = function(req, res){
	res.render('notFound');
};