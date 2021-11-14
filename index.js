const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenve = require("dotenv");

dotenve.config();

const db = process.env.MONGO_URL;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const conSuccess = mongoose.connection;
conSuccess.once("open", (_) => {
	console.log("Database is connected:", db);
});

conSuccess.on("error", (err) => {
	console.error("Database connection error: ", err);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Backend is up and running on Port: " + port);
});
