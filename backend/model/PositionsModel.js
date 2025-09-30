const { model } = require("mongoose");

const { PositionsSchema } = require("../schema/PositionSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };