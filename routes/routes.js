// It will contains all the routes

const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductController')


router.post('/addproduct', ProductController.addNewProduct)