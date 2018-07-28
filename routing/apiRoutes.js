var friends = require('../data/friends');

// Exporting
module.exports = (function(app) {
    'use strict';

    // display json of all friend objects
    app.get('/api/friends', function(req, res){
        return res.json(friends);
    });

    // handles incoming data for new friend objects
    app.post('/api/friends', function (req, res){
        console.log("REQ: ", req.body)
    });

    
}) 