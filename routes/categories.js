var config = require("../config/config");
var middleware = require("../middleware/middleware");
var controller = require('../controller/listing');
var productImageRoot = '//cache.net-a-porter.com/images/products/';

var routes = {
    init: function(app){
        app.get("/:langauge/test/zhproducts/:categories",
            middleware.setLanguage,
            middleware.init,
            middleware.setCategories,
            middleware.setCaregoriesProducts,
            middleware.setQuery,
            middleware.processProducts,
            controller.render
               
               )
    }
}
module.exports = {
    routes: routes
};
