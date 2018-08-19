"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const B2c_invoice_master = dbcon_1.sequelize.define('b2c_invoice_master', {
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
    CUSTOMER_CITY: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    CUSTOMER_GST_IN: {
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
    IS_DELETED: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'b2c_invoice_master',
    timestamps: true
});
exports.B2c_invoice_master = B2c_invoice_master;
//# sourceMappingURL=b2c_master.js.map