import {  sequelize , Sequelize } from '../routes/dbcon';

  const Cash_reciept = sequelize.define('cash_reciept', {
    ID: {
      type: Sequelize.INTEGER(15),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
     RECIEPT_NO: {
    type: Sequelize.INTEGER,
    allowNull: true
    },
    CUS_ID: {
    type: Sequelize.INTEGER,
    allowNull: true
    },
    INVOICE_NUMBER: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
      INVOICE_DATE: {
      type: Sequelize.STRING,
      allowNull: true
    },
     IS_CASH_PAY: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    AMOUNT_PAYED: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    },
     CHEQUE_NO: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CHEQUE_DATE: {
      type: Sequelize.STRING,
      allowNull: true
    },
    BANK_NAME: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    IS_B2B: {
     type: Sequelize.BOOLEAN,
     allowNull: true

    }
    
 
  
  }, {
    tableName: 'cash_reciept',
     timestamps: true
  });


export {Cash_reciept};
