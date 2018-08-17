


import {  sequelize , Sequelize } from '../routes/dbcon';

  const Stock_trans = sequelize.define('stock_trans', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  
    PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
      SUPPLYER_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
    
      QUANTITY: {
      type: Sequelize.INTEGER(20),
      allowNull: true
    },
      REMARKS: {
      type: Sequelize.STRING,
      allowNull: true
    },
  
    
  
  }, {
    tableName: 'stock_trans',
     timestamps: true
  });


export {Stock_trans};