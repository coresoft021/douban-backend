"use strict";

const dbcon_1 = require("../routes/dbcon");
const Tas_products = dbcon_1.sequelize.define('tas_products', {
       ID: {
      type: dbcon_1.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PRODUCT_NAME: {
      type: dbcon_1.Sequelize.STRING(25),
      allowNull: true
    },
    HSN_CODE: {
      type: dbcon_1.Sequelize.STRING(15),
      allowNull: true
    },
  
    
    TAX: {
      type: dbcon_1.Sequelize.FLOAT,
      allowNull: true
    },

      PRICE: {
      type: dbcon_1.Sequelize.FLOAT,
      allowNull: true
    },
    
 
   
  
  }, {
    tableName: 'tas_products',
     timestamps: false
});
exports.Tas_products = Tas_products;
