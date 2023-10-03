const {
  addMarket,
  getAllMarket,
  getSingleMarket,
  updateSingleMarket,
} = require("../controller/StockDataController");

const marketRouter = require("express").Router();

marketRouter.get("/get", getAllMarket);

marketRouter.get("/get/:id", getSingleMarket);

marketRouter.post("/add", addMarket);

marketRouter.patch("/update/:id", updateSingleMarket);

module.exports = marketRouter;
