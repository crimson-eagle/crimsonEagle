var express = require("express");
var bodyParser = require('body-parser')
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function(req,res){
  console.log('index.html');
  res.sendFile(path + "index.html");
});

router.get("/stars", function(req,res){
  res.sendFile(path + "stars.html");
});

router.get("/admin", function(req,res){
  res.sendFile(path + "admin.html");
});

router.get("/contact", function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*", function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000, function(){
  console.log("Live at http://localhost:3000/");
});