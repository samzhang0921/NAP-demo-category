var listing = require('./listing');

function hello(req, res) {
  var name = req.params.name;
  res.render('main', {name:name});
}

function render(req, res){
  res.locals.allProducts = listing.prepareData(res);
  res.render('listing');
}

module.exports = {
  hello: hello,
  render: render
};
