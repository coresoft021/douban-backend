"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tas_users_1 = require("../models/tas_users");
const tas_product_1 = require("../models/tas_product");
const invo_slave_1 = require("../models/invo_slave");
const invo_master_1 = require("../models/invo_master");
const customer_table_1 = require("../models/customer_table");
const expence_category_1 = require("../models/expence_category");
const income_expence_1 = require("../models/income_expence");
const esti_master_1 = require("../models/esti_master");
const esti_slave_1 = require("../models/esti_slave");
const b2b_master_1 = require("../models/b2b_master");
const b2b_slave_1 = require("../models/b2b_slave");
const stock_trans_1 = require("../models/stock_trans");
const cash_reciept_1 = require("../models/cash_reciept");
const dbcon_1 = require("./dbcon");
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
const Op = dbcon_1.Sequelize.Op;
var numbered = require('numbered');
var mc = require('node-mac-address');
let toWords = require('to-words');
var compressor = require('node-minify');
publicRouter.post('/update_invoice_b2b', (request, response) => {
    income_expence_1.Tas_income_expence.update({
        TOTAL_AMOUNT: request.body.sub_total,
        TAX_COLLECTED: request.body.total_tax,
        TOTAL_PAYED: request.body.total_payed,
        TOTAL_DUE: request.body.total_due,
        IS_PARTIAL_PAY: request.body.is_partial_pay,
    }, {
        where: { INVOICE_NUMBER_B2B: request.body.INVOICE_NUMBER }
    });
    b2b_master_1.B2b_invoice_master.update({
        CUSTOMER_NAME: request.body.cus_name,
        CUSTOMER_CITY: request.body.cus_city,
        CUSTOMER_GST_IN: request.body.cus_gst,
        SUB_TOTAL: request.body.sub_total,
        TAX_COLLECTED: request.body.total_tax,
        GROSS_TOTAL: request.body.gross_total,
        ITEM_LENGTH: request.body.length - 1,
        DISCOUNT_TOTAL: request.body.discount_total,
        TOTAL_PAYED: request.body.total_payed,
        TOTAL_DUE: request.body.total_due,
        IS_PARTIAL_PAY: request.body.is_partial_pay
    }, {
        where: { INVOICE_NUMBER: request.body.INVOICE_NUMBER }
    });
    var len = request.body.length - 1;
    for (var index = 0; index < len; index++) {
        b2b_slave_1.B2b_invo_slave.update({
            PRODUCT_NAME: request.body.items[index].PRODUCT_NAME,
            TAX: request.body.items[index].TAX,
            UNIT: request.body.items[index].UNIT,
            QUANTITY: request.body.items[index].QUANTITY,
            NET_PRICE: request.body.items[index].NET_PRICE,
            DISCOUNT_PER: request.body.items[index].DISCOUNT_PER,
            DISCOUNT_AMT: request.body.items[index].DISCOUNT_AMT,
            TOTAL_NET: request.body.items[index].TOTAL_NET,
            TOTAL_GROSS: request.body.items[index].TOTAL_GROSS
        }, {
            where: { B2B_MASTER_ID: request.body.INVOICE_NUMBER, SI_NO: request.body.items[index].SI_NO }
        });
    }
    return response.json({ success: true, msg: 'Successfully saved' });
});
publicRouter.post('/update_invoice', (request, response) => {
    income_expence_1.Tas_income_expence.update({
        TOTAL_AMOUNT: request.body.sub_total,
        TAX_COLLECTED: request.body.total_tax,
        TOTAL_PAYED: request.body.total_payed,
        TOTAL_DUE: request.body.total_due,
        IS_PARTIAL_PAY: request.body.is_partial_pay,
    }, {
        where: { INVOICE_NUMBER: request.body.INVOICE_NUMBER }
    });
    invo_master_1.Tas_invoice_master.update({
        CUSTOMER_NAME: request.body.cus_name,
        CUSTOMER_CITY: request.body.cus_city,
        CUSTOMER_GST_IN: request.body.cus_gst,
        SUB_TOTAL: request.body.sub_total,
        TAX_COLLECTED: request.body.total_tax,
        GROSS_TOTAL: request.body.gross_total,
        ITEM_LENGTH: request.body.length - 1,
        DISCOUNT_TOTAL: request.body.discount_total,
        TOTAL_PAYED: request.body.total_payed,
        TOTAL_DUE: request.body.total_due,
        IS_PARTIAL_PAY: request.body.is_partial_pay
    }, {
        where: { INVOICE_NUMBER: request.body.INVOICE_NUMBER }
    });
    var len = request.body.length - 1;
    for (var index = 0; index < len; index++) {
        invo_slave_1.Tas_invo_slave.update({
            //  PRODUCT_CODE : request.body.items[index].PRODUCT_CODE,
            PRODUCT_NAME: request.body.items[index].PRODUCT_NAME,
            TAX: request.body.items[index].TAX,
            UNIT: request.body.items[index].UNIT,
            QUANTITY: request.body.items[index].QUANTITY,
            NET_PRICE: request.body.items[index].NET_PRICE,
            DISCOUNT_PER: request.body.items[index].DISCOUNT_PER,
            DISCOUNT_AMT: request.body.items[index].DISCOUNT_AMT,
            TOTAL_NET: request.body.items[index].TOTAL_NET,
            TOTAL_GROSS: request.body.items[index].TOTAL_GROSS
        }, {
            where: { TAS_MASTER_ID: request.body.INVOICE_NUMBER, SI_NO: request.body.items[index].SI_NO }
        });
    }
    return response.json({ success: true, msg: 'Successfully saved' });
});
publicRouter.post('/number_to_word', (request, response) => {
    var words = toWords(request.body.number_to_convert);
    //  var result    =   numbered.stringify(request.body.number_to_convert);
    return response.json({ success: true, msg: words });
});
publicRouter.get('/get_macs', (request, response) => {
    mc.getMAC(function (err, MAC) {
        console.log(MAC);
    });
    // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
});
publicRouter.get('/get_mac', (request, response) => {
    mc.getMAC(function (err, MACs) {
        console.log(MACs);
        if (MACs) {
            console.log(MACs);
            tas_users_1.Tas_users.update({
                MAC: MACs
            }, { where: { USER_NAME: 'a' } });
            return response.json({ success: true, msg: 'Successfully updated' });
        }
    });
});
publicRouter.get('/get_reciept_number_b2b', (request, response) => {
    cash_reciept_1.Cash_reciept.count().then(c => {
        response.json({
            text: "counted",
            count: c,
        });
    });
});
publicRouter.get('/get_reciept_number_b2c', (request, response) => {
    cash_reciept_1.Cash_reciept.max('ID').then(c => {
        response.json({
            text: "counted",
            count: c,
        });
    });
});
publicRouter.post('/post_cash_reciept_b2b', (request, response) => {
    cash_reciept_1.Cash_reciept.findOne({ where: { [Op.and]: [{ INVOICE_NUMBER: request.body.invo_number, IS_B2B: true, }] } }).then(person => {
        if (person) {
            return response.json({ success: false, msg: 'Invoice Number Exist' });
        }
        else {
            if (request.body.is_cash_pay == true) {
                cash_reciept_1.Cash_reciept.create({
                    RECIEPT_NO: request.body.rec_number,
                    INVOICE_NUMBER: request.body.invo_number,
                    CUS_ID: request.body.cus_id,
                    INVOICE_DATE: request.body.invo_date,
                    AMOUNT_PAYED: request.body.Amount_payed,
                    IS_B2B: request.body.is_b2b,
                    IS_CASH_PAY: true
                }).then(doc => {
                    if (!doc) {
                        return response.json({ success: true, msg: 'db error' });
                    }
                    else {
                        return response.json({ success: true, msg: 'Successfully saved' });
                    }
                });
            }
            else {
                cash_reciept_1.Cash_reciept.create({
                    RECIEPT_NO: request.body.rec_number,
                    CUS_ID: request.body.cus_id,
                    INVOICE_NUMBER: request.body.invo_number,
                    INVOICE_DATE: request.body.invo_date,
                    AMOUNT_PAYED: request.body.Amount_payed,
                    IS_B2B: request.body.is_b2b,
                    CHEQUE_NO: request.body.cheque_number,
                    CHEQUE_DATE: request.body.Cheque_Date,
                    BANK_NAME: request.body.bank_name,
                    IS_CASH_PAY: false
                }).then(doc => {
                    if (doc) {
                        return response.json({ success: true, msg: 'Successfully saved' });
                    }
                })
                    .catch(error => response.status(400).send(error));
            }
        }
    });
});
publicRouter.post('/delete_customer', (request, response) => {
    customer_table_1.Tas_customers.destroy({
        where: {
            CUSTOMER_NAME: request.body.customer_name
        }
    });
    return response.json({ success: true, msg: 'Successfully deleted' });
});
publicRouter.post('/update_customer', (request, response) => {
    customer_table_1.Tas_customers.update({
        STREET: request.body.street,
        CITY: request.body.city,
        GSTIN: request.body.gstin
    }, { where: { CUSTOMER_NAME: request.body.customer_name }
    });
    return response.json({ success: true, msg: 'Successfully updated' });
});
publicRouter.post('/update_stock', (request, response) => {
    stock_trans_1.Stock_trans.create({
        PRODUCT_NAME: request.body.product_name,
        SUPPLYER_NAME: request.body.supplyer_name,
        QUANTITY: request.body.quantity,
        REMARKS: request.body.remarks
    });
    tas_product_1.Tas_products.update({
        AVAIL_QTY: request.body.quantity + request.body.oldqty,
    }, { where: { PRODUCT_NAME: request.body.product_name } });
    return response.json({ success: true, msg: 'Successfully updated' });
});
publicRouter.post('/post_invoice', (request, response) => {
    invo_master_1.Tas_invoice_master.findOne({ where: { INVOICE_NUMBER: request.body.INVOICE_NUMBER } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: 'Category name already existed' });
        }
        else {
            income_expence_1.Tas_income_expence.create({
                INVOICE_NUMBER: request.body.INVOICE_NUMBER,
                TOTAL_AMOUNT: request.body.sub_total,
                TAX_COLLECTED: request.body.total_tax,
                TOTAL_PAYED: request.body.total_payed,
                TOTAL_DUE: request.body.total_due,
                IS_PARTIAL_PAY: request.body.is_partial_pay,
                REMARKS: request.body.remarks,
                TRAN_TYPE: 1
            });
            invo_master_1.Tas_invoice_master.create({
                INVOICE_NUMBER: request.body.INVOICE_NUMBER,
                CUSTOMER_NAME: request.body.cus_name,
                CUSTOMER_CITY: request.body.cus_city,
                CUSTOMER_VEHICLE_NO: request.body.cus_veh_no,
                CUSTOMER_VEHICLE_KM: request.body.cus_veh_km,
                VEHICLE_DESC: request.body.veh_desc,
                CUSTOMER_VAT_ID: request.body.cus_tin,
                SUB_TOTAL: request.body.sub_total,
                TAX_COLLECTED: request.body.total_tax,
                GROSS_TOTAL: request.body.gross_total,
                ITEM_LENGTH: request.body.length,
                DISCOUNT_TOTAL: request.body.discount_total,
                TOTAL_PAYED: request.body.total_payed,
                TOTAL_DUE: request.body.total_due,
                createdAt: request.body.bill_date,
                IS_PARTIAL_PAY: request.body.is_partial_pay,
                IS_DELETED: false
            });
            for (var index = 0; index < request.body.length; index++) {
                invo_slave_1.Tas_invo_slave.create({
                    SI_NO: request.body.items[index].SI_NO,
                    PRODUCT_NAME: request.body.items[index].PRODUCT_NAME,
                    HSN_CODE: request.body.items[index].HSN_CODE,
                    TAX: request.body.items[index].TAX,
                    UNIT: request.body.items[index].UNIT,
                    QUANTITY: request.body.items[index].QUANTITY,
                    TAS_MASTER_ID: request.body.INVOICE_NUMBER,
                    NET_PRICE: request.body.items[index].NET_PRICE,
                    DISCOUNT_PER: request.body.items[index].DISCOUNT_PER,
                    DISCOUNT_AMT: request.body.items[index].DISCOUNT_AMT,
                    TOTAL_NET: request.body.items[index].TOTAL_NET,
                    TOTAL_GROSS: request.body.items[index].TOTAL_GROSS,
                    IS_DELETED: false
                });
                var qrt = request.body.items[index].QUANTITY;
                tas_product_1.Tas_products.findOne({ where: { PRODUCT_NAME: request.body.items[index].PRODUCT_NAME } }).then(person => {
                    if (person) {
                        person.update({
                            AVAIL_QTY: +person.AVAIL_QTY - +qrt
                        });
                    }
                });
            }
            return response.json({ success: true, msg: 'Successfully saved' });
        }
    });
});
publicRouter.post('/post_invoice_b2b', (request, response) => {
    b2b_master_1.B2b_invoice_master.findOne({ where: { INVOICE_NUMBER: request.body.INVOICE_NUMBER } }).then(person => {
        if (person) {
            return response.json({ success: false, msg: 'Invoice number already existed' });
        }
        else {
            income_expence_1.Tas_income_expence.create({
                INVOICE_NUMBER_B2B: request.body.INVOICE_NUMBER,
                TOTAL_AMOUNT: request.body.sub_total,
                TAX_COLLECTED: request.body.total_tax,
                TOTAL_PAYED: request.body.total_payed,
                TOTAL_DUE: request.body.total_due,
                IS_PARTIAL_PAY: request.body.is_partial_pay,
                REMARKS: request.body.remarks,
                TRAN_TYPE: 21
            });
            b2b_master_1.B2b_invoice_master.create({
                INVOICE_NUMBER: request.body.INVOICE_NUMBER,
                CUSTOMER_NAME: request.body.cus_name,
                CUSTOMER_CITY: request.body.cus_city,
                CUSTOMER_GST_IN: request.body.cus_gst,
                SUB_TOTAL: request.body.sub_total,
                TAX_COLLECTED: request.body.total_tax,
                GROSS_TOTAL: request.body.gross_total,
                ITEM_LENGTH: request.body.length,
                DISCOUNT_TOTAL: request.body.discount_total,
                TOTAL_PAYED: request.body.total_payed,
                TOTAL_DUE: request.body.total_due,
                createdAt: request.body.bill_date,
                IS_PARTIAL_PAY: request.body.is_partial_pay,
                IS_DELETED: false
            });
            for (var index = 0; index < request.body.length; index++) {
                b2b_slave_1.B2b_invo_slave.create({
                    SI_NO: request.body.items[index].SI_NO,
                    PRODUCT_NAME: request.body.items[index].PRODUCT_NAME,
                    TAX: request.body.items[index].TAX,
                    UNIT: request.body.items[index].UNIT,
                    HSN_CODE: request.body.items[index].HSN_CODE,
                    QUANTITY: request.body.items[index].QUANTITY,
                    B2B_MASTER_ID: request.body.INVOICE_NUMBER,
                    NET_PRICE: request.body.items[index].NET_PRICE,
                    DISCOUNT_PER: request.body.items[index].DISCOUNT_PER,
                    DISCOUNT_AMT: request.body.items[index].DISCOUNT_AMT,
                    TOTAL_NET: request.body.items[index].TOTAL_NET,
                    TOTAL_GROSS: request.body.items[index].TOTAL_GROSS,
                    IS_DELETED: false
                });
                var qrt = request.body.items[index].QUANTITY;
                tas_product_1.Tas_products.findOne({ where: { PRODUCT_NAME: request.body.items[index].PRODUCT_NAME } }).then(person => {
                    if (person) {
                        person.update({
                            AVAIL_QTY: +person.AVAIL_QTY - +qrt
                        });
                    }
                });
            }
            return response.json({ success: true, msg: 'Successfully saved' });
        }
    });
});
publicRouter.post('/partial_pay_report', (request, response) => {
    invo_master_1.Tas_invoice_master.findAll({
        attributes: ['INVOICE_NUMBER', 'CUSTOMER_NAME', 'GROSS_TOTAL', 'TOTAL_PAYED', 'TOTAL_DUE'],
        where: { IS_PARTIAL_PAY: true, IS_DELETED: { [Op.ne]: true } }
    })
        .then(users => {
        if (users) {
            response.send(users);
        }
        else {
            return response.json({ success: true, msg: 'No records found' });
        }
    });
});
publicRouter.post('/tax_report', (request, response) => {
    invo_master_1.Tas_invoice_master.findAll({
        attributes: ['INVOICE_NUMBER', 'CUSTOMER_NAME', 'TAX_COLLECTED'],
        where: { createdAt: { [Op.between]: [request.body.from_date, request.body.to_date] }, IS_DELETED: { [Op.ne]: true } }
    })
        .then(users => {
        if (users) {
            response.send(users);
        }
        else {
            return response.json({ success: true, msg: 'No records found' });
        }
    });
});
publicRouter.post('/sales_report', (request, response) => {
    invo_slave_1.Tas_invo_slave.findAll({
        where: { createdAt: { [Op.between]: [request.body.from_date, request.body.to_date] }, IS_DELETED: { [Op.ne]: true } }
    })
        .then(users => {
        if (users) {
            response.send(users);
        }
        else {
            return response.json({ success: true, msg: 'No records found' });
        }
    });
});
publicRouter.post('/delete_invoice', (request, response) => {
    invo_master_1.Tas_invoice_master.update({
        IS_DELETED: true
    }, { where: { INVOICE_NUMBER: request.body.invo_number }
    });
    income_expence_1.Tas_income_expence.update({
        TRAN_TYPE: 0,
    }, {
        where: { INVOICE_NUMBER: request.body.invo_number }
    });
    invo_slave_1.Tas_invo_slave.update({
        IS_DELETED: true,
    }, {
        where: { TAS_MASTER_ID: request.body.invo_number }
    });
    return response.json({ success: true, msg: 'Invoice Deleted' });
});
publicRouter.post('/reports_income', (request, response) => {
    income_expence_1.Tas_income_expence.findAll({
        where: { createdAt: { [Op.between]: [request.body.from_date, request.body.to_date] }, TRAN_TYPE: 1 }
    })
        .then(users => {
        if (users) {
            response.send(users);
        }
        else {
            return response.json({ success: true, msg: 'No records found' });
        }
    });
});
publicRouter.post('/reports_expence', (request, response) => {
    income_expence_1.Tas_income_expence.findAll({
        where: { createdAt: { [Op.between]: [request.body.from_date, request.body.to_date] }, TRAN_TYPE: { [Op.or]: [3, 4] } }
    })
        .then(users => {
        if (users) {
            response.send(users);
        }
        else {
            return response.json({ success: true, msg: 'No records found' });
        }
    });
});
publicRouter.post('/report_purchase', (request, response) => {
    income_expence_1.Tas_income_expence.findAll({
        where: { createdAt: { [Op.between]: [request.body.from_date, request.body.to_date] }, TRAN_TYPE: 3 }
    })
        .then(users => {
        if (users) {
            response.send(users);
        }
        else {
            return response.json({ success: true, msg: 'No records found' });
        }
    });
});
publicRouter.post('/post_estimate', (request, response) => {
    income_expence_1.Tas_income_expence.create({
        INVOICE_NUMBER: request.body.INVOICE_NUMBER,
        TOTAL_AMOUNT: request.body.sub_total,
        TAX_COLLECTED: request.body.total_tax,
        TOTAL_PAYED: request.body.total_payed,
        TOTAL_DUE: request.body.total_due,
        IS_PARTIAL_PAY: request.body.is_partial_pay,
        REMARKS: request.body.remarks,
        TRAN_TYPE: 2,
    });
    esti_master_1.Tas_estimate_master.create({
        INVOICE_NUMBER: request.body.INVOICE_NUMBER,
        CUSTOMER_NAME: request.body.cus_name,
        CUSTOMER_VEHICLE_NO: request.body.cus_veh_no,
        CUSTOMER_VEHICLE_KM: request.body.cus_veh_km,
        VEHICLE_DESC: request.body.veh_desc,
        CUSTOMER_VAT_ID: request.body.cus_phone,
        SUB_TOTAL: request.body.sub_total,
        TAX_COLLECTED: request.body.total_tax,
        GROSS_TOTAL: request.body.gross_total,
        ITEM_LENGTH: request.body.length,
        DISCOUNT_TOTAL: request.body.discount_total,
        TOTAL_PAYED: request.body.total_payed,
        TOTAL_DUE: request.body.total_due,
        IS_PARTIAL_PAY: request.body.is_partial_pay
    });
    for (var index = 0; index < request.body.length; index++) {
        esti_slave_1.Tas_estimate_slave.create({
            SI_NO: request.body.items[index].SI_NO,
            PRODUCT_NAME: request.body.items[index].PRODUCT_NAME,
            TAX: request.body.items[index].TAX,
            UNIT: request.body.items[index].UNIT,
            QUANTITY: request.body.items[index].QUANTITY,
            TAS_MASTER_ID: request.body.INVOICE_NUMBER,
            NET_PRICE: request.body.items[index].NET_PRICE,
            DISCOUNT_PER: request.body.items[index].DISCOUNT_PER,
            DISCOUNT_AMT: request.body.items[index].DISCOUNT_AMT,
            TOTAL_NET: request.body.items[index].TOTAL_NET,
            TOTAL_GROSS: request.body.items[index].TOTAL_GROSS
        });
    }
    return response.json({ success: true, msg: 'Successfully saved' });
});
publicRouter.get('/list_pdts', (request, response) => {
    tas_product_1.Tas_products.findAll({}).
        then(users => {
        response.send(users);
    });
});
publicRouter.get('/list_expence_category', (request, response) => {
    expence_category_1.Tas_expence_category.findAll({
        attributes: ['CATEGORY_NAME']
    }).
        then(users => {
        response.send(users);
    });
});
publicRouter.post('/get_avil_stockss', (request, response) => {
    tas_product_1.Tas_products.findOne({ where: { PRODUCT_NAME: request.body.product_name } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: 'product already existed' });
        }
        else {
            tas_product_1.Tas_products.findOne({ where: { PRODUCT_CODE: request.body.product_code } }).then(pers => {
                if (pers) {
                    return response.json({ success: true, msg: 'Code already existed' });
                }
                else {
                    tas_product_1.Tas_products.create({
                        PRODUCT_NAME: request.body.product_name,
                        PRODUCT_CODE: request.body.product_code,
                        NET_PRICE: request.body.net_price,
                        TAX: request.body.tax,
                        AVAIL_QTY: request.body.avail_qty,
                        NET_PURCHASE_PRICE: request.body.net_purchase_price,
                        UNIT: request.body.unit
                    });
                    return response.json({ success: true, msg: 'Successfully saved' });
                }
            });
        }
    });
});
publicRouter.post('/get_avail_qty', (request, response) => {
    tas_product_1.Tas_products.findOne({ where: { PRODUCT_NAME: request.body.product_name } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: person.AVAIL_QTY });
        }
        else {
            return response.json({ success: false, msg: 'notfound' });
        }
    });
});
publicRouter.post('/add_expence_entry', (request, response) => {
    expence_category_1.Tas_expence_category.findOne({ where: { CATEGORY_NAME: request.body.is_purchase } }).then(person => {
        if (person.IS_PURCHASE === true) {
            income_expence_1.Tas_income_expence.create({
                EXPENCE_CATEGORY: request.body.is_purchase,
                EXP_FROM_DATE: request.body.from_date,
                EXP_TO_DATE: request.body.to_date,
                TOTAL_AMOUNT: request.body.amount,
                BENFICIARY: request.body.beneficiary,
                REMARKS: request.body.remarks,
                TRAN_TYPE: 3,
                BILL_NO: request.body.vocher_no
            });
        }
        else {
            income_expence_1.Tas_income_expence.create({
                EXPENCE_CATEGORY: request.body.is_purchase,
                EXP_FROM_DATE: request.body.from_date,
                EXP_TO_DATE: request.body.to_date,
                TOTAL_AMOUNT: request.body.amount,
                BENFICIARY: request.body.beneficiary,
                REMARKS: request.body.remarks,
                TRAN_TYPE: 4,
                BILL_NO: request.body.vocher_no
            });
        }
    });
    return response.json({ success: true, msg: 'Successfully saved' });
});
publicRouter.post('/add_category', (request, response) => {
    expence_category_1.Tas_expence_category.findOne({ where: { CATEGORY_NAME: request.body.Category_name } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: 'Category name already existed' });
        }
        else {
            if (request.body.is_purchase === 'Yes') {
                expence_category_1.Tas_expence_category.create({
                    CATEGORY_NAME: request.body.Category_name,
                    IS_PURCHASE: true,
                });
            }
            else {
                expence_category_1.Tas_expence_category.create({
                    CATEGORY_NAME: request.body.Category_name,
                    IS_PURCHASE: false,
                });
            }
            return response.json({ success: true, msg: 'Successfully saved' });
        }
    });
});
publicRouter.get('/list_customers', (request, response) => {
    customer_table_1.Tas_customers.findAll({}).
        then(users => {
        response.send(users);
    });
});
publicRouter.post('/add_customer', (request, response) => {
    customer_table_1.Tas_customers.findOne({ where: { GSTIN: request.body.gst } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: 'gst already existed' });
        }
        else {
            customer_table_1.Tas_customers.create({
                CUSTOMER_NAME: request.body.customer_name,
                STREET: request.body.street,
                CITY: request.body.city,
                GSTIN: request.body.gst
            }).then(function (doc, err) {
                if (!err) {
                    return response.json({ success: true, msg: 'Successfully saved' });
                }
                else {
                    return response.json({ success: false, msg: err });
                }
            });
        }
    });
});
publicRouter.post('/get_a_invoice_b2b', (request, response) => {
    b2b_master_1.B2b_invoice_master.findOne({
        where: {
            INVOICE_NUMBER: request.body.Invo_number
        }
    }).then(function (master) {
        if (master) {
            b2b_slave_1.B2b_invo_slave.findAll({
                where: {
                    B2B_MASTER_ID: request.body.Invo_number
                }
            }).then(function (slave) {
                response.json({
                    master: master, slave: slave
                });
            });
        }
        else {
            response.status(403).send({ success: false, msg: 'Bill not found' });
        }
    });
});
publicRouter.post('/get_a_invoice', (request, response) => {
    invo_master_1.Tas_invoice_master.findOne({
        where: {
            INVOICE_NUMBER: request.body.Invo_number
        }
    }).then(function (master) {
        if (master) {
            invo_slave_1.Tas_invo_slave.findAll({
                where: {
                    TAS_MASTER_ID: request.body.Invo_number
                }
            }).then(function (slave) {
                response.json({
                    master: master, slave: slave
                });
            });
        }
        else {
            response.status(403).send({ success: false, msg: 'Bill not found' });
        }
    });
});
publicRouter.post('/get_a_estimate', (request, response) => {
    esti_master_1.Tas_estimate_master.findOne({
        where: {
            INVOICE_NUMBER: request.body.Invo_number
        }
    }).then(function (master) {
        if (master) {
            esti_slave_1.Tas_estimate_slave.findAll({
                where: {
                    TAS_MASTER_ID: request.body.Invo_number
                }
            }).then(function (slave) {
                response.json({
                    master: master, slave: slave
                });
            });
        }
        else {
            response.status(403).send({ success: false, msg: 'Bill not found' });
        }
    });
});
publicRouter.get('/list_invoices', (request, response) => {
    invo_master_1.Tas_invoice_master.findAll({
        where: {
            IS_DELETED: false,
        }
    }).
        then(users => {
        response.send(users);
    });
});
publicRouter.get('/list_invoices_b2b', (request, response) => {
    b2b_master_1.B2b_invoice_master.findAll({
        where: {
            IS_DELETED: false,
        }
    }).
        then(users => {
        response.send(users);
    });
});
publicRouter.get('/list_estimate', (request, response) => {
    esti_master_1.Tas_estimate_master.findAll({}).
        then(users => {
        response.send(users);
    });
});
publicRouter.get('/get_invoice_number', (request, response) => {
    invo_master_1.Tas_invoice_master.count().then(c => {
        response.json({
            text: "counted",
            count: c,
        });
    });
});
publicRouter.get('/get_invoice_number_b2b', (request, response) => {
    b2b_master_1.B2b_invoice_master.count().then(c => {
        response.json({
            text: "counted",
            count: c,
        });
    });
});
publicRouter.post('/get_estimate_number', (request, response) => {
    esti_master_1.Tas_estimate_master.count().then(c => {
        response.json({
            text: "counted",
            count: c,
        });
    });
});
publicRouter.post('/add_new_product', (request, response) => {
    tas_product_1.Tas_products.findOne({ where: { PRODUCT_NAME: request.body.product_name } }).then(person => {
        if (person) {
            return response.json({ success: true, msg: 'product already existed' });
        }
        else {
            tas_product_1.Tas_products.findOne({ where: { HSN_CODE: request.body.product_code } }).then(pers => {
                if (pers) {
                    return response.json({ success: true, msg: 'Code already existed' });
                }
                else {
                    tas_product_1.Tas_products.create({
                        PRODUCT_NAME: request.body.product_name,
                        HSN_CODE: request.body.product_code,
                        NET_PRICE: request.body.net_price,
                        TAX: request.body.tax,
                        AVAIL_QTY: request.body.avail_qty,
                        NET_PURCHASE_PRICE: request.body.net_purchase_price,
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
        }
    });
});
publicRouter.post('/update_product', (request, response) => {
    tas_product_1.Tas_products.update({
        PRODUCT_CODE: request.body.product_code,
        NET_PRICE: request.body.net_price,
        TAX: request.body.tax,
        AVAIL_QTY: request.body.avail_qty,
        NET_PURCHASE_PRICE: request.body.net_purchase_price,
        UNIT: request.body.unit
    }, {
        where: { PRODUCT_NAME: request.body.product_name }
    });
    return response.json({ success: true, msg: 'Successfully updated' });
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
//# sourceMappingURL=public.js.map