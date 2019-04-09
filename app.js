"use strict";

const express = require('express');
const body_parser_1 = require("body-parser");
const public_1 = require("./dist/server/routes/public");
const cdb_1 = require("./dist/server/routes/cdb");

var cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use("/api/public", public_1.publicRouter);
app.use("/api/cdb", cdb_1.dbRouter);

app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/public/index.html'));
});
app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});


app.listen(process.env.PORT || 8080);
