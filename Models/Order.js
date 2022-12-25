const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
    },
    status: {
        type: String,
    },
    paymentType: {
        type: String,
    },
    price: {
        type: Number
    },
    total: {
        type: Number
    },
    paymentId: {
        type: String
    },
    orderDate: {
        type: Date,
        default: Date.now(),
    }
})

exports.Order = mongoose.model("order", orderSchema);