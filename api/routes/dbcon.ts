import { Sequelize } from "sequelize";


var sequelize = new Sequelize('mysql://root:ifelseif@localhost:3306/autoshop2');


export {   Sequelize, sequelize };