"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_users = dbcon_1.sequelize.define('tas_users', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER(6),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    USER_NAME: {
        type: dbcon_1.Sequelize.STRING(15),
        allowNull: true
    },
    PASSWORD: {
        type: dbcon_1.Sequelize.STRING(15),
        allowNull: true
    },
    MAC: {
        type: dbcon_1.Sequelize.STRING(18),
        allowNull: true
    },
    IS_ADMIN: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'tas_users',
    timestamps: false
});
exports.Tas_users = Tas_users;
//# sourceMappingURL=tas_users.js.map