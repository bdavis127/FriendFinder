//Requiring express library
var express = require('express')
var path = require ('path')
//Creating variable using express library
var app = express()

var PORT = 8080;

//testing route
// app.get("/login", function (req, res) {
//     console.log(req);
//     res.send("Hello")
// })

//requiring html routes
require("./app/routing/apiRoutes")(app, path)
require("./app/routing/htmlRoutes")(app, path)

//starting server(listening on port 8080)
app.listen(PORT, function () {
    console.log("server started on port 8080")
})