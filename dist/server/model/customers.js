"use strict";

const dbcon_1 = require("../routes/dbcon");
const Tas_customers = dbcon_1.sequelize.define('tas_customers', {
  
    ID: {
      type: dbcon_1.Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CUSTOMER_NAME: {
      type: dbcon_1.Sequelize.STRING,
      allowNull: true
    },
  
     COMPANY_NAME: {
      type: dbcon_1.Sequelize.STRING,
      allowNull: true
    },
  
    ADDRESS: {
      type: dbcon_1.Sequelize.STRING,
      allowNull: true
    },
     AC_NUMBER: {
      type: dbcon_1.Sequelize.INTEGER,
      allowNull: true
     },
     BANK_NAME: {
      type: dbcon_1.Sequelize.STRING,
      allowNull: true
     },
    BANK_IFSC: {
      type: dbcon_1.Sequelize.STRING,
      allowNull: true
     },
    PHONE: 
    {
      type: dbcon_1.Sequelize.STRING(15),
      allowNull : true
    },
      MOBILE: 
    {
      type: dbcon_1.Sequelize.STRING(15),
      allowNull : true
    }

  
  }, {
    tableName: 'tas_customers',
     timestamps: false
  });



exports.Tas_customers = Tas_customers;
