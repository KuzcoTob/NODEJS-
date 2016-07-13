/**
 * Created by KuzcoTob on 01.07.2016.
 */

// NODE JS

var http = require("http");
var fs = require("fs");

//404 not found
function send404server(response){
    response.writeHead(404, {"Context-Type": "text/plain"})
    response.write("Error 404: Page not found!");
    response.end();
};

//Handle a user request
var besucher = 0;
function antwort(request, response) {
    if (request.method == "GET" && request.url == "/") { //wenn jemand versucht zu connecten:
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream("Login.html").pipe(response);
     //   console.log("User made a request ");        // sobald jemand connected
        response.writeHead(200, {"Context-Type": "text/plain"});
        besucher = besucher + 1;
        console.log("Die Seite wurde: " +  besucher + "mal geladen");
        
    } else {
        send404server(response);
    }
};

http.createServer(antwort).listen(8080);
console.log("Server on");


/* Express

var express =  require("express");
var app = express();


app.get("/", function(req, res) {
    res.send("Hello World");
    //window.document.location.replace("")
   // window.document.location.replace ("http://localhost:63342/NODEJS/webseite.html?_ijt=ibd9idqc65e472uup5tmbbcr6e");
  //  fs.createReadStream("./Login.html").pipe(res);
});

app.listen(8080, function() {
    console.log("Lauscht Port 8080")
});

var express = require('express');
var app = express();
app.use(function(req, res, next) {
    console.log(req.url); next();
});
app.use('/', express.static(__dirname));
app.get('/speziell', function(req, res) {
    console.log('Eine Spezielle Datei wird ausgeliefert!');
    res.sendfile(__dirname + '/speziell.html');
});
app.get('/*', function(req, res) {
    res.status(404).sendfile(__dirname + '/error.html');
});
app.listen(64163);
*/