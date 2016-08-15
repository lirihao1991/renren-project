var path = require('path');
var fs = require('fs');


function generateProject(projectInfo){
    var _srcPath = __dirname.replace("tools/lib", "");
    _srcPath += "src/project/" + projectInfo.type + "/" + projectInfo.name + "/";

    fs.mkdirSync(_srcPath, 0755);
    fs.mkdirSync(_srcPath + "img", 0755);
    fs.mkdirSync(_srcPath + "fonts", 0755);
    fs.mkdirSync(_srcPath + "scss", 0755);
    fs.mkdirSync(_srcPath + "js", 0755);
    fs.mkdirSync(_srcPath + "template", 0755);
    fs.mkdirSync(_srcPath + "js/libs", 0755);
}

module.exports = generateProject;