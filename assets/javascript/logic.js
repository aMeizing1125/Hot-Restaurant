console.log("working");

//Dependencies
// =============================================================
var express = require("express");

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


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});