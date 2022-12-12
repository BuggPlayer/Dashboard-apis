const ProductCore = require("../Core/ProductCore");


const addNewProduct = (req, res) => {
    console.log('product added');
    ProductCore.insertNewProduct()
}

module.exports = { addNewProduct }