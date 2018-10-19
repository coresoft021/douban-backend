// const express = require('express');

// import { Request, Response, Router } from "express";


// const app = express();
// const port =  4300;
// var cors = require('cors');
// const path = require('path');

// app.use(cors());
// app.use(express.static('/view'));



// app.get('/api', function (req, res) {
//     res.send('Hello World, How are you!');
// });


// app.get('/', function (req, res) {
//   //  res.sendFile('/view/index.html');
//      res.sendFile(path.join(__dirname, '../index.html'));
// });

// app.listen(port, function () {
//     console.log(`Example app listening on port ${port}!`);
// });





import * as express from "express";
import * as path from "path";


const app: express.Application = express();

app.disable("x-powered-by");







if (app.get("env") === "production") {

  // in production mode run application from dist folder
  
     res.sendFile(path.join(__dirname, '../index.html'));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
