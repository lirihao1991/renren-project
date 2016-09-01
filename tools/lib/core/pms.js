/* author: rihao.li 
 * description： renrenlive project manage system coreModule
 * contact-way: rihao.li@renren-inc.com  mobile: 18301007730
 */


/*
    Pms params:

    @projectInfo | object | [svnPath][name][type] 

    @srcPath     | string | pms-rootPath

    @mode        | string | 'g' - generate project 'sw' - switch project 'st' startProject
*/

var fs   = require('fs');
var path = require('path');

function Pms(projectInfo, srcPath, mode){
    this._projectInfo = projectInfo;
    this._srcPath = srcPath;
    this._projectSrcPath = path.join("src/project/", this._projectInfo.type, "/", this._projectInfo.name, "/");
    this._projectList = this.getProjectList(projectInfo);
}

/* mode G to make a new project */

Pms.prototype.gennerateWebpackConfig = function (){
    var webpackConfigtext = fs.readFileSync(this._srcPath + '/tools/lib/core/webpack.config.template.txt');

    webpackConfigtext = webpackConfigtext.toString();
    webpackConfigtext = webpackConfigtext.replace(/{{type}}/g,        this._projectInfo.type);
    webpackConfigtext = webpackConfigtext.replace(/{{projectName}}/g, this._projectInfo.name);
    webpackConfigtext = webpackConfigtext.replace(/{{svnPath}}/g,     this._projectInfo.svnPath);

    var fd = fs.openSync(this._srcPath + "/webpack.config.js", "w", 0755);
    fs.writeSync(fd, webpackConfigtext);
}

Pms.prototype.gennerateProjectDirConstruct = function(){
    fs.mkdirSync(this._projectSrcPath, 0755);
    fs.mkdirSync(this._projectSrcPath + "img", 0755);
    fs.mkdirSync(this._projectSrcPath + "fonts", 0755);
    fs.mkdirSync(this._projectSrcPath + "scss", 0755);
    fs.mkdirSync(this._projectSrcPath + "js", 0755);
    fs.mkdirSync(this._projectSrcPath + "template", 0755);
    fs.mkdirSync(this._projectSrcPath + "js/libs", 0755);
}

Pms.prototype.registerProject = function(){
    var key = this._projectInfo.type + this._projectInfo.name,
        projectListJSON, pkey;

    for(pkey in this._projectList){
        this._projectList[pkey].status = 'unactive';
    }

    Object.defineProperty(this._projectList, key, {value: this._projectInfo, writable: true, enumerable: true, configurable: true});
    Object.defineProperty(this._projectList[key], 'status', {value: 'active', writable: true, enumerable: true, configurable: true});

    projectListJSON = JSON.stringify(this._projectList);

    var fd = fs.openSync(this._srcPath + "/tools/lib/core/projectList.json", "w", 0755);
        fs.writeSync(fd, projectListJSON);
}

Pms.prototype.getProjectList = function(){

    var projectListJSON;

    if (!fs.existsSync(this._srcPath + '/tools/lib/core/projectList.json')){
        return {};
    }
    else{
        projectListJSON = fs.readFileSync(this._srcPath + '/tools/lib/core/projectList.json', 'utf8');
        if (!projectListJSON.length){
            return {}
        }
        else{
            return JSON.parse(projectListJSON);
        }
    }
}

Pms.prototype.generateTemplate = function(){

    var htmlTemplate = fs.readFileSync(this._srcPath + '/tools/lib/core/htmlTemplateforMobileterminal.txt');
    htmlTemplate = htmlTemplate.toString();

    htmlTemplate = htmlTemplate.replace(/{{type}}/g, this._projectInfo.type);
    htmlTemplate = htmlTemplate.replace(/{{name}}/g, this._projectInfo.name);

    var sassTemplate = fs.readFileSync(this._srcPath + '/tools/lib/core/scssTemplateforMobileterminal.txt');
    sassTemplate = sassTemplate.toString();
    // html
    var fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/template/" + this._projectInfo.name +'.jsp', "w", 0755);
    fs.writeSync(fd, htmlTemplate)

    // libs
    fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/js/libs/libs.js", "w", 0755);
    fs.writeSync(fd, '');

    // scss
    fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/scss/" +  this._projectInfo.name + '.scss', "w", 0755);
    fs.writeSync(fd, sassTemplate);

    fd = fs.openSync(this._srcPath + "src/project/" + this._projectInfo.type + '/' + this._projectInfo.name +"/js/" + this._projectInfo.name + ".js", "w", 0755);
    fs.writeSync(fd, "require('../scss/" + this._projectInfo.name + ".scss')     //gennerate by pms , don't delete");
}

module.exports = Pms;