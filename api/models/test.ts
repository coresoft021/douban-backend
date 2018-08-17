import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_test = sequelize.define('tas_test', {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  
    ITEM_NAME: {
      type: Sequelize.STRING,
      allowNull: true
    },
      ITEM_COUNT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    
      ON_STOCK: {
      type: Sequelize.INTEGER(20),
      allowNull: true
    },
    
  
    
  
  }, {
    tableName: 'tas_test',
     timestamps: true
  });


export {Tas_test};