import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Tas_invoice_master } from '../models/invo_master';
import { Tas_invo_slave } from '../models/invo_slave';
import { Tas_products } from '../models/tas_product';
import { Tas_sales_count } from '../models/sales_count';
import { Tas_customers } from '../models/customer_table';
import { Tas_expence_category  } from '../models/expence_category';
import { Tas_income_expence  } from '../models/income_expence';
import { Sequelize, sequelize } from './dbcon';
import { Tas_estimate_master } from '../models/esti_master';
import { Tas_estimate_slave } from '../models/esti_slave';
import { Stock_trans } from '../models/stock_trans'; 
import {  B2b_invoice_master } from '../models/b2b_master'; 
import { B2b_invo_slave } from '../models/b2b_slave'; 
import { Cash_reciept } from '../models/cash_reciept';
const dbRouter: Router = Router();








dbRouter.get("/all", (request: Request, response: Response) => {
  
   Tas_invoice_master.sync({force: true}).then(() => {
   //Table created
  return Tas_invoice_master.create({
    
    
     SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
      GROSS_TOTAL : 0,
    
    
    
    })
   })

   Cash_reciept.sync({force: true}).then(() => {
   //Table created
  return Cash_reciept.create({
    
    
     INVOICE_NUMBER: 0
     
    
    
    
    })
   })


   B2b_invoice_master.sync({force: true}).then(() => {
   //Table created
  return Tas_invoice_master.create({
    
    
     SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
      GROSS_TOTAL : 0,
    
    
    
    })
   })

   Stock_trans.sync({force: true}).then(() => {
   //Table created
  return Tas_estimate_master.create({
    
   
     PRODUCT_NAME: '',
     SUPPLYER_NAME: '',
     
    
    
    
    })
   })

  
    Tas_estimate_master.sync({force: true}).then(() => {
   //Table created
  return Tas_estimate_master.create({
    
   
     SUB_TOTAL: 0,
     TAX_COLLECTED: 0,
      GROSS_TOTAL : 0,
    
    
    
    })
   })
  
  
             Tas_estimate_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_estimate_slave.create({
    
            TAS_MASTER_ID: 1,
           
            QUANTITY : 0,
            NET_PRICE : 4,
            DISCOUNT : 0,
            
            
    
    
     })
     
  })
  
   Tas_sales_count.sync({force: true}).then(() => {
   //Table created
  return Tas_sales_count.create({
    
     ON_STOCK: 5,
    
    
    })
   })
  
       Tas_expence_category.sync({force: true}).then(() => {
   //Table created
  return Tas_expence_category.create({
    
   
     IS_PURCHASE: true,
   
    
    
    })
   })
  
     Tas_customers.sync({force: true}).then(() => {
   //Table created
  return Tas_customers.create({
    
   CITY : '',
     
   
    
    
    })
   })
  
    Tas_income_expence.sync({force: true}).then(() => {
   //Table created
  return Tas_income_expence.create({
    
    
     TOTAL_AMOUNT: 0,
   
    
    
    })
   })
  
             Tas_invo_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_invo_slave.create({
    
          
            DISCOUNT : 0,
            
            
    
    
     })
     
  })

 B2b_invo_slave.sync({force: true}).then(() => {
   //Table created
          return Tas_invo_slave.create({
    
          
            DISCOUNT : 0,
            
            
    
    
     })
     
  }) 
  

     Tas_products.sync({force: true}).then(() => {
   //Table created
          return Tas_products.create({
    
          
            UNIT: 'pc',
            
            
    
    
     })
     
  })

       Tas_users.sync({force: true}).then(() => {
   //Table created
  return Tas_users.create({
    
     USER_NAME : 'a',
     PASSWORD: 's',
     IS_ADMIN: true,
     MAC:'54:53:ED:2F:6F:6E'
     
    
      
    
     })
      .then(users => { response.json({  msg: "Table created"  });

      })
  
     

      })
  })





export { dbRouter };