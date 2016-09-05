var path = require('path'),
    Pms  = require('./core/pms.js'),
    fs   = require('fs');


function addtmp(tmpname){
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");
    var pms = new Pms(false, _srcPath);
    console.log(pms._projectInfo);
}

module.exports = addtmp;