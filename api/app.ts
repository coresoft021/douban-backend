
const express = require('express');
const app = express();
const path = require('path');
import { publicRouter } from "./routes/public";
const port =  process.env.PORT || 8080;



app.use(express.static(__dirname + '/public'));

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
