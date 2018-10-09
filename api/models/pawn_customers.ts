import {  sequelize , Sequelize } from '../routes/dbcon';

  const Pawn_customers = sequelize.define('pawn_customers', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  
    CUSTOMER_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
     CUSTOMER_ADDRESS: {
      type: Sequelize.STRING,
      allowNull: true
    },
      CONTACT_NO_1: {
      type: Sequelize.STRING,
      allowNull: true
    },
      CONTACT_NO_2: {
      type: Sequelize.STRING,
      allowNull: true
    },
       ID_PROFF_TYPE: {
      type: Sequelize.STRING,
      allowNull: true
    },
      ID_PROFF_NO: {
      type: Sequelize.STRING,
      allowNull: true
    },
       
       
  
  }, {
    tableName: 'tas_test',
     timestamps: false
  });


export {Pawn_customers};