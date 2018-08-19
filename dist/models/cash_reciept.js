"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Cash_reciept = dbcon_1.sequelize.define('cash_reciept', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER(15),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    RECIEPT_NO: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    CUS_ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    INVOICE_NUMBER: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false
    },
    INVOICE_DATE: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    IS_CASH_PAY: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
    AMOUNT_PAYED: {
        type: dbcon_1.Sequelize.DECIMAL(10, 2),
        allowNull: true
    },
    CHEQUE_NO: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    CHEQUE_DATE: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    BANK_NAME: {
        type: dbcon_1.Sequelize.STRING(25),
        allowNull: true
    },
    IS_B2B: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    }
}, {
    tableName: 'cash_reciept',
    timestamps: true
});
exports.Cash_reciept = Cash_reciept;
//# sourceMappingURL=cash_reciept.js.map