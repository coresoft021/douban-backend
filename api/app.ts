
const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors');
import { publicRouter } from "./routes/public";
import { json, urlencoded } from "body-parser";
const port =  process.env.PORT || 8080;



app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/api/public", publicRouter);

app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});
app.get('/cpi', function (req, res) {
    res.send('Hello World, How we are you!');
});


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
