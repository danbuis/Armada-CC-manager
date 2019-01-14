var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
var routes = require("./rotues");

//start express
var app = express();

//connect to mongodb
mongoose.connect("mongodb://localhost:27071/test");

//set express port
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: "TKRsfg8^%Gh%435GhggBVzx*lLi3H5%aqERfi8b&^g",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port "+ap.get("port"));
});
