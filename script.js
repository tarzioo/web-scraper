var http = require('http');
var fs = require('fs');


var url = "http://www.reuters.com/";
http.get(url, function(res){

    if(res.statusCode === 200) {
        console.log("status code 200");
    }
    else {
        console.log('url is invalid', res.statusCode, res.statusMessage);
    
    process.exit(1);
}
var writeStream = fs.createWriteStream('./savedData.html');

res.on('data', function(chunk) {
    writeStream.write(chunk);
});

res.on('close', function(chunk){
    writeStream.end();
});

});