var config = require (__dirname+"config/config");
//same again pull the config file /
var setRoutes = require (config.ROOT+"/routes/setup-route").configureRoutes;
//define setRoutes =  setup-route.configureRoutes function

var expressUtilities = require(config.ROOT + '/utilities/express');

// lidan please talk more about express 

var app = expressUtilities.appConfiguration.init();

setRoutes.init(app);

app.listen(config.PORT);
console.log("my first server started on port "+ config.PORT);
