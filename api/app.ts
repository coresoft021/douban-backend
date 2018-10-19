const express = require('express');

import { Request, Response, Router } from "express";


const app = express();
const port =  4300;
var cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static('/view'));



app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});


app.get('/', function (req, res) {
  //  res.sendFile('/view/index.html');
     res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
