var path = require ('path'),
    rootpath= path.normalize(__dirname+"/../");
module.exports = {
    ROOT: rootpath,
    PORT: 8080
}


//
//at begenning of project set up which folder is root folder
//
//use 1. reuqire the path 
//2.use it set the root folder
//3. export the root path and the port