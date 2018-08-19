import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_invo_slave = sequelize.define('tas_invo_slave', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },   
    TAS_MASTER_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
    }, 
       SI_NO: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
      PRODUCT_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
      HSN_CODE: {
      type: Sequelize.STRING,
      allowNull: true
    },
    
    
    QUANTITY: {
       type: Sequelize.INTEGER,
    allowNull: true
    },
       
      NET_PRICE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
      TAX: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
     UNIT: {
      type: Sequelize.STRING,
      allowNull: true
    },
    DISCOUNT_PER: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
       DISCOUNT_AMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
      TOTAL_NET: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
        TOTAL_GROSS: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
      IS_DELETED: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_invoice_slave',
     timestamps: true
  });


export {Tas_invo_slave};