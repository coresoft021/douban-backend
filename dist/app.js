// const express = require('express');
// const path = require('path');

// const app = express();


//  app.use(express.static('/dist'));


// app.get('/api', function (req, res) {
//     res.send('Hello World, How are you!');
// });
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);


"use strict";

const express = require('express');
const body_parser_1 = require("body-parser");
const public_1 = require("./server/routes/public");
const cdb_1 = require("./server/routes/cdb");
const post_1 = require("./server/routes/post");
var cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use("/api/public", public_1.publicRouter);
app.use("/api/cdb", cdb_1.dbRouter);
app.use("/api/post", post_1.postRouter);
app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});


app.listen(process.env.PORT || 8080);
