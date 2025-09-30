const {model} = require("mongoose");

const {OdersSchema} = require("../schema/OrdersSchema");

const OdersModel = new model("oder" , OdersSchema);

module.exports = {OdersModel};