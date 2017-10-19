const express = require("express");
const parser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./app/public")));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(parser.text());

require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

app.listen(PORT, function() {
	console.log("App is listening on PORT: " + PORT);
});