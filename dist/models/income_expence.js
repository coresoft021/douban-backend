"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_income_expence = dbcon_1.sequelize.define('tas_income_expence', {
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
    INVOICE_NUMBER_B2B: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    ESTIMATE_NUMBER: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    TRAN_TYPE: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    EXPENCE_CATEGORY: {
        type: dbcon_1.Sequelize.STRING(15),
        allowNull: true
    },
    TAX_COLLECTED: {
        type: dbcon_1.Sequelize.INTEGER(20),
        allowNull: true
    },
    TOTAL_AMOUNT: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    BILL_NO: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    TOTAL_PAYED: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    TOTAL_DUE: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    IS_PARTIAL_PAY: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
    EXP_FROM_DATE: {
        type: dbcon_1.Sequelize.DATE,
        allowNull: true
    },
    EXP_TO_DATE: {
        type: dbcon_1.Sequelize.DATE,
        allowNull: true
    },
    REMARKS: {
        type: dbcon_1.Sequelize.TEXT,
        allowNull: true
    },
    BENFICIARY: {
        type: dbcon_1.Sequelize.TEXT,
        allowNull: true
    },
}, {
    tableName: 'tas_income_expence',
    timestamps: true
});
exports.Tas_income_expence = Tas_income_expence;
//# sourceMappingURL=income_expence.js.map