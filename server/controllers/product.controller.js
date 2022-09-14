const Product = require('../models/product.model');

//-----------------------------CREATE------------------------------------
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => { res.json({ results: newProduct }) })
    .catch((err) => { res.status(400).json({ err: err }) })
}
//-----------------------------FIND ALL----------------------------------
module.exports.showAllProducts = (req, res) => {
    Product.find()
    .then((foundProducts) => { res.json({results: foundProducts}) })
    .catch((err) => { res.json({ message: "Error with query", err: err }) })
}
//-----------------------------FIND ONE----------------------------------
module.exports.findOneProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
    .then((foundProduct) => { res.json({ results: foundProduct }) })
    .catch((err) => { res.json({ err: err }) })
}
//-----------------------------UPDATE------------------------------------
//-----------------------------DELETE------------------------------------