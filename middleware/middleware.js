var config = require('../config/config');
var allProducts = require(config.ROOT + "/data/products.json").data;
var utility = require('../utility/utility');

function init(req, res, next) {
  res.locals.allProducts = allProducts;
  next();
}

function setLanguage(req, res, next) {
  res.locals.language = req.params.language;
  next();
}

function setCategories(req, res, next) {
    res.locals.categories = req.params.categories;
    next();
}

function setCaregoriesProducts(req, res, next){
    res.locals.allProducts = utility.getAllCategoriesProducts(res.locals.allProducts, res.locals.categories);
    next();
}
function setQuery(req, res, next) {
  res.locals.offset = parseInt(req.query.offset) || 0;
  res.locals.limit = parseInt(req.query.limit) || 60;
  res.locals.sort = req.query.sort;
  res.locals.brandId = req.query.brand;
  res.locals.colorId = req.query.color || '';
  next();
}

function processProducts(req, res, next) {
  if (res.locals.brandId) {
      var brandArray = res.locals.brandId.split(',');
      var brandProducts = utility.getAllBrandsProducts(res.locals.allProducts, brandArray);
      res.locals.allProducts = brandProducts;
  }
  if (res.locals.colorId) {
      var colorArray = res.locals.colorId.split(',');
      var colorProducts = utility.getAllProductsColor(res.locals.allProducts, colorArray);
      res.locals.allProducts = colorProducts;
  }
  //make sure if there no sort query,  it still can get data
  if (res.locals.sort) {
      var sortedProducts = utility.sortBy(res.locals.allProducts, res.locals.sort);
  }

  next();
}

module.exports = {
  init: init,
  setQuery: setQuery,
  setLanguage: setLanguage,
  setCategories: setCategories,
  setCaregoriesProducts: setCaregoriesProducts,
  processProducts: processProducts
};
