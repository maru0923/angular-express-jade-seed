
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.index_async = function(req, res){
  res.render('index-async', { title: 'Express' });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};