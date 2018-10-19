import { Request, Response, Router } from "express";
import { Sequelize, sequelize } from './dbcon';
import { Tas_users } from '../models/tas_users';

const Op = Sequelize.Op;
const publicRouter: Router = Router();

              
               

dbRouter.get("/cdb", (request: Request, response: Response) => {
  Tas_users.sync({force: true}).then(() => {
  // Table created
  return Tas_users.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

  })


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
