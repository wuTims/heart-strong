var mongoose = require('mongoose');

var state = {
	db: null
};

exports.connect = function(url, callback){
	console.log('attempting to connect to MongoDB at ' + url);
	mongoose.connect(url, function(err, db) { 
		if(err) {
			console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
	  		throw err;
		}
		console.log("Connected to Mongo Database...");
		state.db = db;
		callback();
	});
}

exports.get = function() {
	return state.db;
}

exports.close = function(callback){
	state.db.close(function(err, result){
		state.db = null;
		callback();
	});
}

