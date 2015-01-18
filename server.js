//Declare Dependencies
var restify = require('restify');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/deviceem', ['FreightDetails']);

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
server.get("/freights", function (req, res, next) {	
	if[req.params.truckNumber]{
		db.FreightDetails.find({truckNumber:req.params.truckNumber},function (err, symbols) {
	               res.end(JSON.stringify(symbols));
	    	});
	}else{
		db.FreightDetails.find(function (err, details) {
	        	res.end(JSON.stringify(details));
    		});
	}
    return next();
});
