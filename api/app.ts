const express = require('express');
import { json, urlencoded } from "body-parser";
import { Request, Response, Router } from "express";

var cors = require('cors');
const app = express();
const path = require('path');
const port =  process.env.PORT || 80;

app.use(cors());


app.use(express.static(__dirname, './view'));



app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname , './view/index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});