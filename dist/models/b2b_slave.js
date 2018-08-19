"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const B2b_invo_slave = dbcon_1.sequelize.define('b2b_invo_slave', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    B2B_MASTER_ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    SI_NO: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    PRODUCT_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    HSN_CODE: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    QUANTITY: {
        type: dbcon_1.Sequelize.INTEGER,
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
    UNIT: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    DISCOUNT_PER: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    DISCOUNT_AMT: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    TOTAL_NET: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    TOTAL_GROSS: {
        type: dbcon_1.Sequelize.FLOAT,
        allowNull: true
    },
    IS_DELETED: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'b2b_invoice_slave',
    timestamps: true
});
exports.B2b_invo_slave = B2b_invo_slave;
//# sourceMappingURL=b2b_slave.js.map