var path = require('path');
var fs = require('fs');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, files){
        if (err) return callback(err, null);
         let arrayList = [];

         files.forEach(function(file){
             if(path.extname(file) == "." + ext){
                 arrayList.push(file);
             }
         })

        callback(null, arrayList);
    })
}

