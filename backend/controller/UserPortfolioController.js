const User = require("../model/UserModel");
const UserPortfolio = require("../model/UserPortfolioModel");

const getAllPortfolios = async (req, res) => {
  const { email } = req.body;
  console.log("email", email);
  try {
    const collection = await UserPortfolio.find({ email });
    res.status(200).json(collection);
  } catch (error) {
    res.statsu(404).json({ error: error.message });
  }
};

const addPortfolio = async (req, res) => {
  const { loss_limit, current_price, high_point, symbol, company_name, email } =
    req.body;
  try {
    const user = await User.findOne({ email }).select("_id");
    const singlePortfolio = await UserPortfolio.create({
      user_id: user._id,
      email,
      company_name,
      symbol,
      high_point,
      loss_limit,
      current_price,
    });
    res.status(200).json(singlePortfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePortfolio = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const updatedPortfolio = await UserPortfolio.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(updatedPortfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePorfolio = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const deleted = await UserPortfolio.findOneAndDelete({ _id: id });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllPortfolios,
  addPortfolio,
  updatePortfolio,
  deletePorfolio,
};
