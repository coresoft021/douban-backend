"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tas_users_1 = require("../models/tas_users");
const mysqldump_1 = require("mysqldump");
const userRouter = express_1.Router();
exports.userRouter = userRouter;
userRouter.get("/", (request, response) => {
    response.json('ji');
});
userRouter.get("/backup", (request, response) => {
    mysqldump_1.default({
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'ifelseif',
            database: 'autoshop2',
        },
        dumpToFile: './dump.sql',
    }).then(function (backup) {
        if (backup) {
            response.json('Backup completed');
        }
        else if (Error) {
            response.json('Error');
        }
    });
});
userRouter.post('/login_check', (request, response) => {
    var username = request.body.username;
    var password = request.body.password;
    tas_users_1.Tas_users.findOne({
        where: {
            USER_NAME: request.body.username,
            PASSWORD: request.body.password
        }
    }).then(function (result) {
        if (result) {
            if (result.IS_ADMIN === true) {
                return response.json({ success: true, msg: 'Admin logged' });
            }
            else {
                return response.json({ success: true, msg: 'user logged' });
            }
        }
        else {
            return response.json({ success: false, msg: 'Authentication failed' });
        }
    });
});
userRouter.post('/server_check', (request, response) => {
    var username = 'a';
    var password = 's';
    var mac = '54:53:ED:2F:6F:6E';
    tas_users_1.Tas_users.findOne({
        where: {
            USER_NAME: username,
            PASSWORD: password,
            MAC: mac
        }
    }).then(function (result) {
        if (result) {
            if (result.IS_ADMIN === true) {
                return response.json({ msg: 'server running' });
            }
            else {
                return response.json({ msg: 'waiting' });
            }
        }
        else {
            response.status(403).send({ msg: 'failed' });
        }
    });
});
//# sourceMappingURL=user.js.map