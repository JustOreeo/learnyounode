var http = require("http");
var urlPath = process.argv[2];

var compData = "";

http.get(urlPath, function callback(response){
    response.on('data', function(data){
        compData = compData + data;
    })
    response.on('end', function(){
        console.log(compData.length);
        console.log(compData);
    })
});