"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_products = dbcon_1.sequelize.define('tas_products', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    PRODUCT_NAME: {
        type: dbcon_1.Sequelize.STRING(98),
        allowNull: true
    },
    HSN_CODE: {
        type: dbcon_1.Sequelize.STRING(15),
        allowNull: true
    },
    NET_PRICE: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    TAX: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    AVAIL_QTY: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    NET_PURCHASE_PRICE: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    UNIT: {
        type: dbcon_1.Sequelize.STRING(10),
        allowNull: true
    },
}, {
    tableName: 'tas_products',
    timestamps: false
});
exports.Tas_products = Tas_products;
//# sourceMappingURL=tas_product.js.map