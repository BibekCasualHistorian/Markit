const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

//Secret Key
const secretKey = "IhavenoideawhyIamwrtingthis";

const createToken = (id) => {
  return jwt.sign({ id }, secretKey, { expiresIn: "3d" });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log("register",email, password)
  try {
    const user = await User.register(email, password);
    const token = await createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log("error", error)
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
