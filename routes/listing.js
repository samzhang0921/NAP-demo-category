var listingpage = require("../controller/listingview");
var middleware = require('../middleware/middleware');

module.exports = function (app) {
    app.get('/hello/:name', listingpage.hello);

    app.get('/:language/shop/:categories',
        middleware.setLanguage,
        middleware.init,
        middleware.setCategories,
        middleware.setCaregoriesProducts,
        middleware.setQuery,
        middleware.processProducts,
        listingpage.render
    );
};