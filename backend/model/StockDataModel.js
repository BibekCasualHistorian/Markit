const mongoose = require("mongoose");

const StockDataSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    last_price: {
      type: Number,
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    open: {
      type: Number,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    low: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StockData", StockDataSchema);
