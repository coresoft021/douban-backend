"use strict";

const express_1 = require("express");
// const greeting_1 = require("../model/admin_table");
const product_1 = require("../model/products");
const customers_1 = require("../model/customers");
// const invoice_master_1 = require("../model/invoice_master");
// const invoice_slave_1 = require("../model/invoice_slave");
const dbcon_1 = require("./dbcon");
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;




publicRouter.post('/update_product', (request, response) => {
    product_1.Tas_products.update({
        PRODUCT_CODE: request.body.product_code,
        TAX: request.body.tax,
        NET_PURCHASE_PRICE: request.body.net_purchase_price,
        PRICE: request.body.price
    }, {
        where: { PRODUCT_NAME: request.body.product_name }
    });
    return response.json({ success: true, msg: 'Successfully updated' });
});






publicRouter.get('/get_product_list', (request, response) => {
    product_1.Tas_products.findAll({}).
        then(users => {
        response.send(users);
    });
});

publicRouter.get('/get_customers_list', (request, response) => {
    customers_1.Tas_customers.findAll({}).
        then(users => {
        response.send(users);
    });
});





publicRouter.post('/add_product', (request, response) => {
    product_1.Tas_products.findOne({ where: { PRODUCT_NAME: request.body.product_name } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: 'product already existed' });
        }
        else {
            product_1.Tas_products.create({
                PRODUCT_NAME: request.body.product_name,
                HSN_CODE: request.body.product_code,
                P_TYPE: request.body.product_type,
                NET_PRICE: request.body.net_price,
                TAX: request.body.tax,
                PRICE: request.body.price,
                AVAIL_QTY: request.body.avail_qty,
                UNIT: request.body.unit
            }).then(function (pro) {
                if (pro) {
                    return response.json({ success: true, msg: 'Successfully saved' });
                }
                else {
                    return Error;
                }
            });
        }
    });
});





publicRouter.get("/about", (request, response) => {
    response.json({
        Devoloper: "Premji Thankaji",
        Framework: "A6.0 + sequlize + nodejs",
    });
});
publicRouter.get("/server", (request, response) => {
    response.json({ Status: "Running"
    });
});



