"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_estimate_master = dbcon_1.sequelize.define('tas_estimate_master', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    INVOICE_NUMBER: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    CUSTOMER_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    CUSTOMER_VEHICLE_NO: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    CUSTOMER_VEHICLE_KM: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    VEHICLE_DESC: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    CUSTOMER_VAT_ID: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    SUB_TOTAL: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    TAX_COLLECTED: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    GROSS_TOTAL: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    ITEM_LENGTH: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    DISCOUNT_TOTAL: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    TOTAL_PAYED: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    TOTAL_DUE: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    IS_PARTIAL_PAY: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'tas_estimate_master',
    timestamps: true
});
exports.Tas_estimate_master = Tas_estimate_master;
//# sourceMappingURL=esti_master.js.map