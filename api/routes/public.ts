import { Request, Response, Router } from "express";

import { Tas_test } from '../models/test';
import { Pawn_customers } from '../models/pawn_customers'
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();
const Op = Sequelize.Op;
        
 

publicRouter.get("/all", (request: Request, response: Response) => {
  

       Tas_test.sync({force: true}).then(() => {
   //Table created
  return Tas_test.create({
    
     ITEM_NAME : 'a',
   
    
      
    
    }) })
          Pawn_customers.sync({force: true}).then(() => {
   //Table created
  return Pawn_customers.create({
    
     CUSTOMER_NAME : 'a',
   
       

      
    
    })


      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })



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

     Pawn_customers.sync({force: true}).then(() => {
   //Table created
  return Pawn_customers.create({
    
     CUSTOMER_NAME : 'a',
     CUSTOMER_ADDRESS : 'b',
     CONTACT_NO_1 : 'c',
     CONTACT_NO_2 : 'd',
     ID_PROFF_TYPE : 'e',
     ID_PROFF_NO : 'f'
       

      
    
    })
    
    
    .then(users => { response.json({  msg: "Table created"  });
   })
   })
});

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

  publicRouter.get('/test_all_2', (request: Request, response: Response) => {
 
   
      Tas_test.findAll({
        
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
