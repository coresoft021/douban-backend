import { Request, Response, Router } from "express";

import { Tas_test } from '../models/test';

import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;
        
 

publicRouter.get("/all", (request: Request, response: Response) => {
  

       Tas_test.sync({force: true}).then(() => {
   //Table created
  return Tas_test.create({
    
     ITEM_NAME : 'a',
   
    
      
    
    }) })


publicRouter.get("/about", (request: Request, response: Response) => {
  
  response.json({
    Devoloper: "Premji Thankaji",
    Framework: "A6.0 + sequlize + nodejs",
  });
  

});

publicRouter.get("/cdb", (request: Request, response: Response) => {
   Tas_test.sync({force: true}).then(() => {
   //Table created
  return Tas_test.create({
    
   
     ITEM_NAME: 'papi',
     ITEM_COUNT: 0,
      ON_STOCK : 0,
    
    
    
    })
   })


  publicRouter.get('/test_all', (request: Request, response: Response) => {
 
   
      Pawn_customers.findAll({
        
                                })
         .then(users=> 
              {
                 if(users)
                    {
                       response.send(users);

                    }

               else
                   {
                       return response.json({success:true, msg:'No records found'});
                   }
        
             })
   
   })

publicRouter.get("/server", (request: Request, response: Response) => {
  
  response.json({     Status : "Running"

              });

})








export { publicRouter };
