var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

// app.get("/",function(req,res){
//     res.redirect("search");
// });

app.get("/",function(req,res){
    res.render("search");
});

const host = "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port,host, function() {
  console.log("Weather app has started!" + port);
});