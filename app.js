// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();
var solution = [];
// Set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: false}));

// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'));

app.get('/', function(req, res){
	res.render("index", {solution: solution});
});

app.post('/add', function(req,res){
	var a = Number(req.body.x);
	var b = Number(req.body.y);
	var c = a+b;
	solution.push({x: a, y: b, z: c, op: "+"});
	res.redirect('/');
});
app.post('/subtract', function(req,res){
	var a = Number(req.body.x);
	var b = Number(req.body.y);
	var c = a-b;
	solution.push({x: a, y: b, z: c, op: "-"});	
	res.redirect('/');
});
app.post('/multiply', function(req,res){
	var a = Number(req.body.x);
	var b = Number(req.body.y);
	var c = a*b;
	solution.push({x: a, y: b, z: c, op: "*"});	
	res.redirect('/');
});
app.post('/divide', function(req,res){
	var a = Number(req.body.x);
	var b = Number(req.body.y);
	var c = a/b;
	solution.push({x: a, y: b, z: c, op: "/"});	
	res.redirect('/');
});

app.listen(3002);