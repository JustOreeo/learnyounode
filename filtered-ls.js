const path = require('path');
const fs = require('fs');

let folder = process.argv[2];
let ext = "." + process.argv[3];



fs.readdir(folder, function(err, lists){
    lists.forEach(function(list){
        if(path.extname(list) ==  ext){
            console.log(list);
        }
    });
})
