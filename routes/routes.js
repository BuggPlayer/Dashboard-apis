// It will contains all the routes

const express = require("express");
const {
  addNewCategory,
  getallCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../Controllers/CategoryController");
const {
  addNewProduct,
  getallProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/ProductController");
const {
  addNewUser,
  getallUser,
  getSingleuser,
  updateuser,
  deleteUser,
} = require("../Controllers/UserController");
const router = express.Router();

// category CURD
router.post("/addcategory", addNewCategory);
router.get("/", getallCategory);
router.get("/category", getSingleCategory);
router.put("/updatecategory", updateCategory);
router.delete("/deletecategory", deleteCategory);

// products CURD
router.post("/addproduct", addNewProduct);
router.get("/", getallProducts);
router.get("/product", getSingleProduct);
router.put("/updateproduct", updateProduct);
router.delete("/deleteproduct", deleteProduct);

// user CURD
router.post("/adduser", addNewUser);
router.get("/", getallUser);
router.get("/user", getSingleuser);
router.put("/updateuser", updateuser);
router.delete("/deleteuser", deleteUser);


module.exports = router;
