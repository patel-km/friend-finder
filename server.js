// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = 8080;


// Link to external routes
// 
//var htmlRoutes = require('./routing/htmlRoutes');
// app.use('/htmlRoutes', htmlRoutes);

// var apiRoutes = require('./routing/apiRoutes');
// app.use('/apiRoutes', apiRoutes);
require("./routing/htmlRoutes")(app)
require("./routing/apiRoutes")(app)

// Start server
app.listen(PORT, function() {
    console.log("Listening at localhost:"+ PORT);
});