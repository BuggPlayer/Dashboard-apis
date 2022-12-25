const { Product } = require("../Models/Product");

const createNewProduct = async (req) => {
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
    categoryId: req.body.categoryId
  });
  const isSaved = await category.save();
  if (!isSaved) {
    return false
  }
  return true;
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

const getAllProductCount = async (req) => {
  return await Product.countDocuments()
}

const sortProducts = async (sort) => {
  return await Product.find().sort(sort)
}

const updateProductStatus = async (query, values) => {
  await Product.updateOne(query, values)
}


const searchProduct = async (query) => {
  return await Product.find(query)
}
module.exports = {
  createNewProduct,
  getallproductCore,
  getSingleproductCore,
  updateproductCore,
  deleteproductCore,
  getAllProductCount,
  sortProducts,
  updateProductStatus,
  searchProduct
};
