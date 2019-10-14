var http = require("http");
var urlPath = process.argv[2];

http.get(urlPath, function callback(response){
    response.on('data', function(data){
        console.log(data.toString());
    })
});