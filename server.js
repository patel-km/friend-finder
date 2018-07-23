// Dependencies
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PORT = 8080;


// Link to external routes
var htmlRoutes = require('./routing/htmlRoutes');
app.use('/htmlRoutes', htmlRoutes);

var apiRoutes = require('./routing/apiRoutes');
app.use('/apiRoutes', apiRoutes);


// Start server
app.listen(PORT, function() {
    console.log("Listening at localhost:"+ PORT);
});