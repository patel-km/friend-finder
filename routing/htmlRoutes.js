// Export these routes
module.exports = (function() {
    'use strict';

    var htmlRoutes = require('express').Router();

    // route to survey page
    app.get('/survey', function (req, res){
        res.sendFile(path.join(__dirname, "survey.html"))
    });

    // route to home page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "home.html"));
    });


    return htmlRoutes;
});