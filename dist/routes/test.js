"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = require("../models/test");
const testRouter = express_1.Router();
exports.testRouter = testRouter;
testRouter.post("/update", (request, response) => {
    test_1.Tas_test.findOne({ where: { ITEM_NAME: request.body.item_name } }).then(person => {
        if (person) {
            person.update({ ITEM_COUNT: person.ITEM_COUNT + 8 });
            return response.json({ msg: "Table undu" });
        }
        else {
            return response.json({ msg: "Table illa" });
        }
    });
});
testRouter.get("/all", (request, response) => {
    test_1.Tas_test.sync({ force: true }).then(() => {
        //Table created
        return test_1.Tas_test.create({
            ITEM_NAME: 'a',
        })
            .then(users => {
            response.json({ msg: "Table created" });
        });
    });
});
//# sourceMappingURL=test.js.map