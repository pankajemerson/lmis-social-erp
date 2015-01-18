//Declare Dependencies
var restify = require('restify');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/deviceem', ['devicedb']);

// Create a Restify Server to serve Restful requests.
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//Start the hhtp server
server.listen(3000, function () {
	console.log("Server started @ 3000");
});

//Query like http://IP_ADDRESS:3000/freights?truckNumber=HR74-4967
server.get("/devices", function (req, res, next) {	
	
		db.devicedb.find(function (err, devices) {
	        	res.end(JSON.stringify(details));
    		});
	
    return next();
});
