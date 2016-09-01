#!/usr/bin/env node

var path = require('path'),
    initProject = require('../lib/initProject');
    importLib = require('../lib/importLib');

switch (process.argv[2]){
    case 'init':
            new initProject();
            break;
    case 'import':
            importLib(process.argv[3]);
}