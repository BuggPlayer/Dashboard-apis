const { Product } = require("../Models/Product");

const createNewProduct = async (req, res) => {
  let category = new Product({
    name: req.body.name,
    description: req.body.description,
    rishDescription: req.body.rishDescription,
    mrp: req.body.mrp,
    weight: req.body.weight,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numOfReview: req.body.numOfReview,
    isFeatured: req.body.isFeatured,
  });
  return await category.save();
};

const getallproductCore = async () => {
  return await Product.find();
};

const getSingleproductCore = async (req, res) => {
  // console.log("req" ,req.params);
  return await Product.findById(req.query.id);
};

const updateproductCore = async (req) => {
  let updateProduct = new Product(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      rishDescription: req.body.rishDescription,
      mrp: req.body.mrp,
      weight: req.body.weight,
      image: req.body.image,
      brand: req.body.brand,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numOfReview: req.body.numOfReview,
      isFeatured: req.body.isFeatured,
    },
    { new: true }
  );
  return await updateProduct;
};

const deleteproductCore = (req) => {
  const deleteproduct = Category.findByIdAndDelete(req.params.id);
  return deleteproduct;
};

module.exports = {
  createNewProduct,
  getallproductCore,
  getSingleproductCore,
  updateproductCore,
  deleteproductCore,
};
