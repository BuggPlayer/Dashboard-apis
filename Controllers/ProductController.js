const ProductCore = require("../Core/ProductCore");

const addNewProduct = async (req, res) => {
  const product = await ProductCore.createNewProduct(req, res);
  if (!product) return res.status(400).send("the product cannot be created!");
  return res.send(product);
};

// get all products data
const getallProducts = async (req, res) => {
  const getallproductdata = await getallProducts();
  if (!getallproductdata) return res.status(500).send("the data is not found");
  res.status(200).send(getallproductdata);
};

// get single products
const getSingleProduct = async (req, res) => {
  const signleproduct = await getSingleProduct(req);
  if (!signleproduct)
    return res.status(500).json({
      message: "The category with the given ID was not found.",
    });
  res.status(200).send(signleproduct);
};

// put single catgory
const updateProduct = async (req, res) => {
  const updateproduct = await updateProduct(req);
  if (!updateproduct)
    return res.status(500).json({
      message: "The updateproduct with the given ID was not found.",
    });
  res.status(200).send(updateproduct);
};

// delete single catgory
const deleteProduct = async (req, res) => {
  const deteleproduct = await deleteCategoryCore(req);
  if (!deteleproduct)
    return res.status(500).json({
      message: "The category with the given ID was not found.",
    });
  res.status(200).json({ success: true, message: "the category is deleted!" });
};
module.exports = {
  addNewProduct,
  getallProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
