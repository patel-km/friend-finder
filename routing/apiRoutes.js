// Exporting
module.exports = (function() {
    'use strict';

    var apiRoutes = require('express').Router();

    // display json of all friend objects
    api.get('/api/friends', function(req, res){
        return res.json(friends);
    });

    // handles incoming data for new friend objects
    api.post('/api/friends', function (req, res){
    });

    return apiRoutes;
}) ();