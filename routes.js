var express = require("express");
var User = require("./models/user");

var router = express.Router();

router.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash("error");
    res.locals.infos = req.flash("info");
});

router.get("/", function(req, res, next){
    window.location = "index";
});