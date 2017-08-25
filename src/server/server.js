"use strict"
console.log('THIS IS SERVER PAGE');
var express     = require("express");
var app         = express();
var path        = require("path");

app.use(express.static('dist'))

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(3000, function(){
        console.log('app is listening on port 3000')
    }
)
