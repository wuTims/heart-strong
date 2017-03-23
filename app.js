var express = require('express');
var http = require('http');
var app = express();
var port = 3000;
var db = require('./config/db')

app.use(express.static(__dirname + '/public'));


// Needed for OpenShift. Remove if not using OpenShift
// var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function(req, res){
	res.json({
                notes: [
                        {   
                            id: 1, 
                            content: "First note"
                        }, 
                        {
                            id: 2, 
                            content: "Second note"
                        }, 
                        {
                            id: 3, 
                            content: "Third Note"
                        }
                    ]
            });
});

var connection_string = "mongodb://localhost:27017/sampledb";
if(process.env.MONGODB_PASSWORD){
    var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
    connection_string = "mongodb://" +
        process.env.MONGODB_USER + ":" +
        process.env.MONGODB_PASSWORD + "@" +
        process.env[mongoServiceName + '_SERVICE_HOST'] + ":" +
        process.env[mongoServiceName + '_SERVICE_PORT'] + "/" +
        process.env.MONGODB_DATABASE;
}

db.connect(connection_string, function(){
     app.listen(PORT, IP_ADDRESS, () => {
         console.log(`Express server listening on port ${PORT} in ${app.settings.env} mode`);
     });
})
