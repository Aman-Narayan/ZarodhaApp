const { model } = require("mongoose");
const { PositionsSchema } = require("../schema/PositionSchema");

// define model properly
const PositionsModel = model("position", PositionsSchema);

module.exports = PositionsModel;
