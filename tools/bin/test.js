#!/usr/bin/env node

var path = require('path'),
    initProject = require('../lib/initProject');
    
switch (process.argv[2]){
    case 'init': new initProject();
}