var config = require('../config/config');
var ZhProductsList = require (config.ROOT+"/routes/ZhProductslist");
var categories = require ("../routes/categories");
var listing = require('./listing');
//pull the config file , let it know root folder and port.

var configureRoutes = {
    init: function(app) {
//        pull the zh ZhProductsList in , pionts the customer go to this routes.
        ZhProductsList.routes.init(app);
//        run the function under the ZhProductsList
        categories.routes.init(app);

        listing(app);
    }
};

module.exports = {
    configureRoutes: configureRoutes
};
