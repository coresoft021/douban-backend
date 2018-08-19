"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_expence_category = dbcon_1.sequelize.define('tas_expence_category', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER(15),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CATEGORY_NAME: {
        type: dbcon_1.Sequelize.STRING(15),
        allowNull: true
    },
    IS_PURCHASE: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'tas_expence_category',
    timestamps: false
});
exports.Tas_expence_category = Tas_expence_category;
//# sourceMappingURL=expence_category.js.map