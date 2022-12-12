const ProductCore = require("../Core/ProductCore");


const addNewProduct = async (req, res) => {
    console.log('product added');
    ProductCore.insertNewProduct()
    return res.status(200).json({ message: 'Sucess' })
}

module.exports = { addNewProduct }