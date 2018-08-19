"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Stock_trans = dbcon_1.sequelize.define('stock_trans', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    PRODUCT_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    SUPPLYER_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    QUANTITY: {
        type: dbcon_1.Sequelize.INTEGER(20),
        allowNull: true
    },
    REMARKS: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
}, {
    tableName: 'stock_trans',
    timestamps: true
});
exports.Stock_trans = Stock_trans;
//# sourceMappingURL=stock_trans.js.map