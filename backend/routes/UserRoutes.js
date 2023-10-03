const { register, login } = require("../controller/UserController");
const {
  addPortfolio,
  getAllPortfolios,
  updatePortfolio,
  deletePorfolio,
} = require("../controller/UserPortfolioController");

const router = require("express").Router();

router.post("/register", register);

router.post("/login", login);

router.get("/get-portfolios", getAllPortfolios);

router.post("/add-portfolio", addPortfolio);

router.patch("/update-portfolio/:id", updatePortfolio);

router.delete("/delete-portfolio/:id", deletePorfolio);

module.exports = router;
