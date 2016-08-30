var config = require('../config/config');
//pull the config file , let it know root folder and port.

var configureRoutes = {
    init: function(app) {

       var ZhProductsList = require (config.ROOT+"/routes/ZhProductslist");
//        pull the zh ZhProductsList in , pionts the customer go to this routes.
        ZhProductsList.routes.init(app);
//        run the function under the ZhProductsList
        
    }
};

module.exports = {
    configureRoutes: configureRoutes
};