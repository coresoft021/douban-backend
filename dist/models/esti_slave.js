"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_estimate_slave = dbcon_1.sequelize.define('tas_estimate_slave', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    TAS_MASTER_ID: {
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
    PRODUCT_CODE: {
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
        type: dbcon_1.Sequelize.INTEGER,
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
}, {
    tableName: 'tas_estimate_slave',
    timestamps: true
});
exports.Tas_estimate_slave = Tas_estimate_slave;
//# sourceMappingURL=esti_slave.js.map