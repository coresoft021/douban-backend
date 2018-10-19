import {  sequelize , Sequelize } from '../routes/dbcon';

  const Tas_users = sequelize.define('tas_users', {
    ID: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_NAME: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    PASSWORD: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
      MAC: {
      type: Sequelize.STRING(18),
      allowNull: true
    },
    
    IS_ADMIN: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_users',
     timestamps: false
  });


export {Tas_users};
