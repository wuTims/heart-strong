var express = require('express');
var http = require('http');
var app = express();
var port = 3000;
var mongoose = require('mongoose');


app.use(express.static(__dirname + '/public'));
app.listen(port, function () {
	console.log("Server running on port " + port + ".");
});

// Needed for OpenShift. Remove if not using OpenShift
// var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var IP_ADDRESS = '127.0.0.1';
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(PORT, IP_ADDRESS,() => {
    console.log(`Express server listening on port ${PORT} in ${app.settings.env} mode`);
});

var connection_string = "mongodb://localhost:27017/sampledb";
if(process.env.MONGODB_PASSWORD){
    connection_string = "mongodb://" +
        process.env.MONGODB_USER + ":" +
        process.env.MONGODB_PASSWORD + "@" +
        IP_ADDRESS + ":" +
        "27017" + "/" +
        process.env.MONGODB_DATABASE;
}
console.log('attempting to connect to MongoDB at ' + connection_string);
mongoose.connect(connection_string);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});