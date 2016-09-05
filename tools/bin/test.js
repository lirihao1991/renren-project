#!/usr/bin/env node

var path = require('path'),
    initProject = require('../lib/initProject'),
    importLib = require('../lib/importLib'),
    addtmp = require('../lib/addtmp')


switch (process.argv[2]){
    case 'init':
            new initProject();
            break;
    case 'import':
            importLib(process.argv[3]);
    case 'addtmp':
            addtmp(process.argv[3]);
}