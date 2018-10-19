import { Sequelize } from "sequelize";


var sequelize = new Sequelize('postgres://eabenglqnnlxii:3895dc322b94f951b9e3eddc203744d5fcfa9c228c504b489cd1a96f875c74cd@ec2-54-235-193-34.compute-1.amazonaws.com:5432/d50eu6rmqqbp5r');


export {   Sequelize, sequelize };
