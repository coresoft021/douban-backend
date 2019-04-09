"use strict";

const express_1 = require("express");
const invoice_products = require("../model/products");
const dbRouter = express_1.Router();
exports.dbRouter = dbRouter;

dbRouter.get("/about", (request, response) => {
    response.json({
        Devoloper: "Premji Thankaji",
        Framework: "A6.0 + sequlize + nodejs",
    });
});

dbRouter.get("/product", (request, response) => {
    invoice_products.Tas_products .sync({ force: true }).then(() => {
        // Table created
        return invoice_products.Tas_products.create({
            PRODUCT_NAME: 'Prone'
        });
    });
    return response.json({ success: true, msg: 'found' });
});
