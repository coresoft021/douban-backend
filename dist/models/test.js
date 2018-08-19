"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_test = dbcon_1.sequelize.define('tas_test', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ITEM_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    ITEM_COUNT: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    ON_STOCK: {
        type: dbcon_1.Sequelize.INTEGER(20),
        allowNull: true
    },
}, {
    tableName: 'tas_test',
    timestamps: true
});
exports.Tas_test = Tas_test;
//# sourceMappingURL=test.js.map