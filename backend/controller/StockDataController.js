const { default: mongoose } = require("mongoose");
const StockData = require("../model/StockDataModel");

const http = require("http");

const addMarket = async (req, res) => {
  const url = ``;
  let apiKey = `98G5037FKAZXW5FT`;
  const {
    symbol,
    company_name,
    last_price,
    change,
    open,
    high,
    low,
    quantity,
  } = req.body;
  try {
    const user = await StockData.create({
      symbol,
      company_name,
      last_price,
      change,
      open,
      high,
      low,
      quantity,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllMarket = async (req, res) => {
  try {
    const marketData = await StockData.find({});
    res.status(200).json(marketData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleMarket = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await StockData.findOne({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateSingleMarket = async (req, res) => {
  const { id } = req.params;

  console.log("update", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(200).json({ status: "no such id exists" });
  }

  try {
    const data = await StockData.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!data) {
      return res.status(200).json({ status: "no such company exists" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addMarket,
  getAllMarket,
  getSingleMarket,
  updateSingleMarket,
};
