// It will contains all the routes

const express = require("express");
const {
  addNewCategory,
  getallCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../Controllers/CategoryController");
const router = express.Router();

// category CURD
router.post("/addcategory", addNewCategory);
router.get("/", getallCategory);
router.get("/category", getSingleCategory);
router.put("/updatecategory", updateCategory);
router.delete("/deletecategory", deleteCategory);

// products CURD
router.post("/addproduct", addNewCategory);
router.get("/", getallCategory);
router.get("/product", getSingleCategory);
router.put("/updateproduct", updateCategory);
router.delete("/deleteproduct", deleteCategory);


module.exports = router;
