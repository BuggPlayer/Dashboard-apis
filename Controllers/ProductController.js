const ProductCore = require("../Core/ProductCore");


const addNewProduct = async (req, res) => {
    try {
        const result = await ProductCore.createNewProduct(req)
        if (!result) {
            return res.status(400).json({ status: 'Failed', message: 'Unable to add new product' })
        }
        res.status(200).json({ status: 'Sucess', message: 'Successfully added new product' })
    } catch (error) {
        res.status(400).json({ status: 'Failed', error: error.message })
    }

}

const getProductCount = async (req, res) => {
    try {
        const countofProducts = await ProductCore.getAllProductCount(req)
        if (!countofProducts) {
            return res.status(400).json({ status: 'Failed', data: 'Unable to fetch counts' })
        }
        return res.status(200).json({ status: 'Sucess', data: countofProducts })
    } catch (error) {
        return res.status(400).json({ status: 'Failed', error: error.message })
    }

}

const sortProducts = async (req, res) => {
    try {
        if (req.body.type == 'asc') {
            var sortObject = {};
            var stype = req.body.field;
            var sdir = 1
            sortObject[stype] = sdir;
            const sortedValues = await ProductCore.sortProducts(sortObject)
            if (!sortedValues) {
                return res.status(400).json({ status: 'Failed', error: 'No sorted products fetched' })
            }
            return res.status(200).json({ status: 'Sucess', data: sortedValues })
        }
        if (req.body.type == 'desc') {
            var sortObject = {};
            var stype = req.body.field;
            var sdir = -1
            sortObject[stype] = sdir;
            const sortedValues = await ProductCore.sortProducts(sortObject)
            if (!sortedValues) {
                return res.status(400).json({ status: 'Failed', error: 'No sorted products fetched' })
            }
            return res.status(200).json({ status: 'Sucess', data: sortedValues })
        }
    } catch (error) {
        return res.status(400).json({ status: 'Failed', message: error.message })
    }
}


const productStatusUpdate = async (req, res) => {
    try {
        let query = { _id: req.body._id }
        let values = { "status": req.body.status }
        await ProductCore.updateProductStatus(query, values)
        res.status(200).json({ status: 'Sucess' })
    } catch (error) {
        return res.status(400).json({ status: 'Failed', message: error.message })
    }
}


const searchProduct = async (req, res) => {
    try {
        let query = {
            '$or': [
                {
                    name: { '$regex': req.query.input, '$options': 'i' }
                },
                {
                    categoryName: { '$regex': req.query.input, '$options': 'i' }
                }
            ]
        }
        searchResult = await ProductCore.searchProduct(query)
        if (!searchResult) {
            return res.status(400).json({ status: 'Failed', message: error.message })
        }
        res.status(200).json({ status: 'Sucess', data: searchResult })
    } catch (error) {
        return res.status(400).json({ status: 'Failed', message: error.message })
    }

}
module.exports = { addNewProduct, getProductCount, sortProducts, productStatusUpdate, searchProduct }