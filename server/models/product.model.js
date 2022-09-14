//import mongoose
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "product needs a title"]
    },
    price: {
        type: Number,
        required: [true, "products aren't free yo"],
        min: [.01, "min of penny"]
    },
    description: {
        type: String,
        required: [true, "tell us about the product"]
    }
})
//register the new collection aka schema
const Product = mongoose.model('product', ProductSchema);
module.exports = Product;