const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  cardName: { type: String, required: true },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
