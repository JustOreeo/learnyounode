const fs = require('fs');  

var file = fs.readFileSync(process.argv[2]).toString();

var splitted = file.split('\n');

console.log((splitted.length)-1);

