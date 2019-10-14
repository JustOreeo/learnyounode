var path = require('path');
var myModule = require('./my-module.js');

var dir = process.argv[2];
var ext = process.argv[3];


let callback = function(err, files){
    if(err) return console.log( 'Error');
    
    files.forEach(function(file){
        console.log(file);
    })
}

myModule(dir, ext, callback);
