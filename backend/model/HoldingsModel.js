const { model } = require("mongoose");
const { HoldingsSchema } = require("../schema/HoldingSchema");

// define model correctly
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = HoldingsModel;
