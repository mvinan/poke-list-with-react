var express = require('express');
var app = express();
var port = process.env.PORT || 4000
var path = require('path');
var compression = require('compression');

app.use(compression())

// set js as the view engine
app.set('view engine', 'pug');
// set the view directory
app.set('views', __dirname + '/views');

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));

app.get('*', function(req,res){
  res.render('index',{
    title: 'Poke React'
  })
});

app.listen(port, function() {
  console.log(`Localhost listen on port: ${port}`);
});