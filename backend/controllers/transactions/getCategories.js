const getCategories = async (req, res, next) => {
  try {
    console.log(req.query);
    // const data = await Category.find({});
    // res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getCategories;
