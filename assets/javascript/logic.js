console.log("working");

//Dependencies
// =============================================================
var express = require("express");
var path = require("path");

//Array of objects for reservations
var reservations = require("./reservations.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Returning JSON data for all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../../view.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "../../table.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});