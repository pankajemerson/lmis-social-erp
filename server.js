var restify = require('restify');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/LIMS', ['FreightDetails']);


// Server
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, function () {
	console.log("Server started @ 3000");
});

server.get("/freights", function (req, res, next) {	
	db.FreightDetails.find({truckNumber:req.params.truckNumber},function (err, symbols) {
               res.end(JSON.stringify(symbols));
    });
    return next();
});