var express = require('express');
var app = express();
var path = require('path');
var firebase = require('firebase');
var database = firebase.database();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(8080);