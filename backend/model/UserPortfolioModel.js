const mongoose = require("mongoose");

// Define the schema for the Company model
const UserPortfolioSchema = new mongoose.Schema({
  user_id: {
    type: String,
    requierd: true,
  },
  email: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  high_point: {
    type: Number,
    required: true,
  },
  loss_limit: {
    type: Number,
    required: true,
  },
  current_price: {
    type: Number,
    required: true,
  },
});

// Create the Company model based on the schema
const UserPortfolio = mongoose.model("UserPortfolio", UserPortfolioSchema);

module.exports = UserPortfolio;
