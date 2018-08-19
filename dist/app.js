"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const body_parser_1 = require("body-parser");
const public_1 = require("./routes/public");
const cdb_1 = require("./routes/cdb");
const user_1 = require("./routes/user");
const test_1 = require("./routes/test");
var cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
app.use(cors());
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use("/api/public", public_1.publicRouter);
app.use("/api/cdb", cdb_1.dbRouter);
app.use("/api/user", user_1.userRouter);
app.use("/api/test", test_1.testRouter);
app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
//# sourceMappingURL=app.js.map
