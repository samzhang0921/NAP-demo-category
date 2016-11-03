var listing = require('./listing');

function hello(req, res) {
  var name = req.params.name;
  res.render('main', {name:name});
}

function render(req, res){
  res.locals.allProducts = listing.prepareData(res);
//    console.log(res.locals.allProducts);
//    console.log(res.locals.language);
  res.render('listing');
}

module.exports = {
  hello: hello,
  render: render
};
