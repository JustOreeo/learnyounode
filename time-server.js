var net = require('net');

function addZero(i){
    return(i < 10 ? '0' : '') + i;
}

function displayDate(){
    var today = new Date();
    var date = addZero(today.getFullYear()) + "-" + addZero(today.getMonth() + 1) + "-" + addZero(today.getDate());
    var time = addZero(today.getHours()) + ":" + addZero(today.getMinutes());
    var dateTime = date + " " + time;
    return addZero(dateTime);
}



var server = net.createServer(function (socket){
    socket.end(displayDate() + '\n');
})

server.listen(Number(process.argv[2]))

