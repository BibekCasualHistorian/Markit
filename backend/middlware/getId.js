const getId = (req, res, next) => {
  console.log("req", req);
  try {
    next();
  } catch (error) {}
};

module.exports = getId;
