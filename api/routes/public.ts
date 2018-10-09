import { Request, Response, Router } from "express";

import { Tas_test } from '../models/test';

import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;
        
 




publicRouter.get("/about", (request: Request, response: Response) => {
  
  response.json({
    Devoloper: "Premji Thankaji",
    Framework: "A6.0 + sequlize + nodejs",
  });
  

});





publicRouter.get("/server", (request: Request, response: Response) => {
  
  response.json({     Status : "Running"

              });

})








export { publicRouter };
