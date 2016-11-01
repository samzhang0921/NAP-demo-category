var listingpage = require("../controller/listingview");
var middleware = require('../middleware/middleware');

module.exports = function(app){
  app.get('/hello/:name', listingpage.hello);

  app.get('/shop',
    middleware.setLanguage,
    middleware.init,
    middleware.setQuery,
    middleware.processProducts,
    listingpage.render
  );
};
