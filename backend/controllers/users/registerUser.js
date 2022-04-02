const registerUser = async (req, res, next) => {
  try {
    console.log("Regist User");
    res.json({
      user: "Regist User",
    });
  } catch {
    next(error);
  }
};
module.exports = registerUser;
