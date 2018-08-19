"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tas_users_1 = require("../models/tas_users");
const invo_master_1 = require("../models/invo_master");
const invo_slave_1 = require("../models/invo_slave");
const tas_product_1 = require("../models/tas_product");
const sales_count_1 = require("../models/sales_count");
const customer_table_1 = require("../models/customer_table");
const expence_category_1 = require("../models/expence_category");
const income_expence_1 = require("../models/income_expence");
const esti_master_1 = require("../models/esti_master");
const esti_slave_1 = require("../models/esti_slave");
const stock_trans_1 = require("../models/stock_trans");
const b2b_master_1 = require("../models/b2b_master");
const b2b_slave_1 = require("../models/b2b_slave");
const cash_reciept_1 = require("../models/cash_reciept");
const dbRouter = express_1.Router();
exports.dbRouter = dbRouter;
dbRouter.get("/all", (request, response) => {
    invo_master_1.Tas_invoice_master.sync({ force: true }).then(() => {
        //Table created
        return invo_master_1.Tas_invoice_master.create({
            SUB_TOTAL: 0,
            TAX_COLLECTED: 0,
            GROSS_TOTAL: 0,
        });
    });
    cash_reciept_1.Cash_reciept.sync({ force: true }).then(() => {
        //Table created
        return cash_reciept_1.Cash_reciept.create({
            INVOICE_NUMBER: 0
        });
    });
    b2b_master_1.B2b_invoice_master.sync({ force: true }).then(() => {
        //Table created
        return invo_master_1.Tas_invoice_master.create({
            SUB_TOTAL: 0,
            TAX_COLLECTED: 0,
            GROSS_TOTAL: 0,
        });
    });
    stock_trans_1.Stock_trans.sync({ force: true }).then(() => {
        //Table created
        return esti_master_1.Tas_estimate_master.create({
            PRODUCT_NAME: '',
            SUPPLYER_NAME: '',
        });
    });
    esti_master_1.Tas_estimate_master.sync({ force: true }).then(() => {
        //Table created
        return esti_master_1.Tas_estimate_master.create({
            SUB_TOTAL: 0,
            TAX_COLLECTED: 0,
            GROSS_TOTAL: 0,
        });
    });
    esti_slave_1.Tas_estimate_slave.sync({ force: true }).then(() => {
        //Table created
        return esti_slave_1.Tas_estimate_slave.create({
            TAS_MASTER_ID: 1,
            QUANTITY: 0,
            NET_PRICE: 4,
            DISCOUNT: 0,
        });
    });
    sales_count_1.Tas_sales_count.sync({ force: true }).then(() => {
        //Table created
        return sales_count_1.Tas_sales_count.create({
            ON_STOCK: 5,
        });
    });
    expence_category_1.Tas_expence_category.sync({ force: true }).then(() => {
        //Table created
        return expence_category_1.Tas_expence_category.create({
            IS_PURCHASE: true,
        });
    });
    customer_table_1.Tas_customers.sync({ force: true }).then(() => {
        //Table created
        return customer_table_1.Tas_customers.create({
            CITY: '',
        });
    });
    income_expence_1.Tas_income_expence.sync({ force: true }).then(() => {
        //Table created
        return income_expence_1.Tas_income_expence.create({
            TOTAL_AMOUNT: 0,
        });
    });
    invo_slave_1.Tas_invo_slave.sync({ force: true }).then(() => {
        //Table created
        return invo_slave_1.Tas_invo_slave.create({
            DISCOUNT: 0,
        });
    });
    b2b_slave_1.B2b_invo_slave.sync({ force: true }).then(() => {
        //Table created
        return invo_slave_1.Tas_invo_slave.create({
            DISCOUNT: 0,
        });
    });
    tas_product_1.Tas_products.sync({ force: true }).then(() => {
        //Table created
        return tas_product_1.Tas_products.create({
            UNIT: 'pc',
        });
    });
    tas_users_1.Tas_users.sync({ force: true }).then(() => {
        //Table created
        return tas_users_1.Tas_users.create({
            USER_NAME: 'a',
            PASSWORD: 's',
            IS_ADMIN: true,
            MAC: '54:53:ED:2F:6F:6E'
        })
            .then(users => {
            response.json({ msg: "Table created" });
        });
    });
});
//# sourceMappingURL=cdb.js.map