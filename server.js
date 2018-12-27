//Requiring express library
var express = require('express')
var path = require ('path')
var bodyParser = require ('body-parser') 
//Creating variable using express library
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var PORT = process.env.PORT || 8080;

// testing route
app.get("/login", function (req, res) {
    console.log(req);
    res.send("Hello")
})

//requiring html routes
require("./app/routing/apiRoutes")(app, path)
require("./app/routing/htmlRoutes")(app, path)

//starting server(listening on port 8080)
app.listen(PORT, function () {
    console.log("server started on port 8080")
})