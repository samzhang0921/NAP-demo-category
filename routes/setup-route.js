var config= require('../config/config');
//pull the config file , let it know root folder and port.

var configureRoutes = {
    
    
    init: function (app){
        
        var ZhProductsList = require (config.ROOT+"/routes/ZhProducts-list");
//        pull the zh ZhProductsList in , pionts the customer go to this routes.
        ZhProductsList.route.init(app);
//        run the function under the ZhProductsList
        
    }
    
};

module.export = {
    configureRoutes : configureRoutes
};