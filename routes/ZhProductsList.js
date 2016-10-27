var config = require("../config/config");
//define the this project source rootpath
var controller = require('../controller/listing');
var middleware = require('../middleware/middleware');
var productImageRoot = '//cache.net-a-porter.com/images/products/';
//define the productimage root

var routes = {
    init: function (app) {
        app.get("/:language/test/zhproducts",
          middleware.setLanguage,
          middleware.init,
          middleware.setQuery,
          middleware.processProducts,
          controller.render
        );
    }
};

module.exports = {
    routes: routes
}
