const fs = require('fs');  

fs.readFile(process.argv[2], function(err, data){
    let count = data.toString().split('\n').length;

    console.log(count-1);
})

