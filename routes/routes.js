// It will contains all the routes

const express = require("express");
const {
  addNewCategory,
  getallCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../Controllers/CategoryController");
const ProductController = require('../Controllers/ProductController')
const router = express.Router();

// category CURD
router.post("/addcategory", addNewCategory);
router.get("/", getallCategory);
router.get("/category", getSingleCategory);
router.put("/updatecategory", updateCategory);
router.delete("/deletecategory", deleteCategory);

// products CURD
router.post("/addproduct", ProductController.addNewProduct);
router.get("/", getallCategory);
router.get("/product", getSingleCategory);
router.put("/updateproduct", updateCategory);
router.delete("/deleteproduct", deleteCategory);
router.get('/getProductCount', ProductController.getProductCount)
router.post('/sortProducts', ProductController.sortProducts)
router.post('/updateProductStatus', ProductController.productStatusUpdate)
router.get('/product/search', ProductController.searchProduct)


module.exports = router;
