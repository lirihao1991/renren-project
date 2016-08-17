var path = require('path');
var fs = require('fs');


function generateProject(projectInfo){
    var _srcPath = __dirname.replace(/tools[\/|\\]lib/, "");
    var _dirsrcPath = path.join("src/project/", projectInfo.type, "/", projectInfo.name, "/");

    // 生成项目目录
/*  fs.mkdirSync(_dirsrcPath, 0755);
    fs.mkdirSync(_dirsrcPath + "img", 0755);
    fs.mkdirSync(_dirsrcPath + "fonts", 0755);
    fs.mkdirSync(_dirsrcPath + "scss", 0755);
    fs.mkdirSync(_dirsrcPath + "js", 0755);
    fs.mkdirSync(_dirsrcPath + "template", 0755);
    fs.mkdirSync(_dirsrcPath + "js/libs", 0755);*/

    // 写入webpack.config
    var webpackConfigtext = fs.readFileSync(path.join(__dirname, '/webpack.config.template.text'));
    webpackConfigtext = webpackConfigtext.toString();

    webpackConfigtext = webpackConfigtext.replace(/{{type}}/g, projectInfo.type);
    webpackConfigtext = webpackConfigtext.replace(/{{projectName}}/g, projectInfo.name);
    webpackConfigtext = webpackConfigtext.replace(/{{svnPath}}/g, projectInfo.svnPath);

    writeWebpackConfig(_srcPath ,webpackConfigtext);


}

function writeWebpackConfig(writePath ,webpackConfigtext){
    fs.open(writePath + "webpack.config.js", "w", 0755, function(error, fd){
        if (error) throw error;
            fs.write(fd, webpackConfigtext, function(error){
                if (error) throw error;
                fs.closeSync(fd);
            });
    })
}

module.exports = generateProject;