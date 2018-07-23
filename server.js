// Dependencies
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PORT = 8080;
// Server connection


// Routes



// Start server
app.listen(PORT, function() {
    console.log("Listening at localhost port "+ PORT);
});