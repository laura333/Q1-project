'use strict';

var express = require('express');
var app = express();
var port = '8080';

var superheroes = [{name: 'Batman'}, {name: 'Batgirl'}, {name: 'Captain America'}, {name: "Wonder Woman"}];

app.use(express.static('public'));

app.get('/superheroes', function (req, res) {
  res.send(superheroes);
});

app.get('/superheroes:id', function(req, res) {
  console.log('write code to return single resource');
});

app.post('superheroes', function (req, res) {
  console.log('write code to add a resource');
});

app.put('superheroes:id', function (req, res) {
  console.log('write code to update a resource');
});

app.delete('superheroes:id', function (req, res) {
  console.log('write code to delete a resource');
});

app.listen(port, function (){
  console.log('Listening on port ' + port);
});
