var walk = require('walk'),
    files = [];



function importlib(libName){
    if (!libName){
        console.log('libName must be not empty,  use as  "pms import [libName]"');
        process.exit();
        return;
    }

    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");

    var walker = walk.walk(_srcPath + "/src/libs", {followLinks: false});

    walker.on('file', function(root, stat, next){

    })
}


module.exports = importlib;