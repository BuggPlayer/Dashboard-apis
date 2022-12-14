// It will contains all the routes

const express = require("express");
const router = express.Router();

// All controller imports here...
const ProductController = require("../Controllers/ProductController");
const CategoryController = require("../Controllers/CategoryController");
const UserController = require("../Controllers/UserController");
const AuthController = require('../Controllers/AuthController')

// category
router.post("/addcategory", CategoryController.addNewCategory);
router.get("/allcategory", CategoryController.getallCategory);
router.get("/category", CategoryController.getSingleCategory);
router.put("/updatecategory/:id", CategoryController.updateCategory);
router.delete("/deletecategory/:id", CategoryController.deleteCategory);

// products
router.post("/addproduct", ProductController.addNewProduct);
router.get("/product", ProductController.getSingleProduct);
router.put("/updateproduct/:id", ProductController.updateProduct);
router.delete("/deleteproduct/:id", ProductController.deleteProduct);
router.get("/getProductCount", ProductController.getProductCount);
router.post("/sortProducts", ProductController.sortProducts);
router.post("/updateProductStatus", ProductController.productStatusUpdate);
router.get("/product/search", ProductController.searchProduct);
router.get("/allproducts", ProductController.getallProducts);

// user
router.post("/adduser", UserController.addNewUser);
router.get("/allusers", UserController.getallUser);
router.get("/user", UserController.getSingleuser);
router.put("/updateuser", UserController.updateuser);
router.delete("/deleteuser", UserController.deleteUser);

// auth
router.post('/auth/login', AuthController.dashboardLogin)

module.exports = router;
