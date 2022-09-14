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
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
    .then((updateProduct) => {
        res.json({results: updateProduct})
    })
    .catch((err) => {
        res.json({message: 'somethign went wrong with update controller', err: err})
    })
}
//-----------------------------DELETE------------------------------------
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
    .then((deleteProduct) => {res.json({results: deleteProduct})})
    .catch((err) => {res.json({message: 'something went wrong with delete controller', err: err})})
}