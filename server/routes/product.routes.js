//import controller
const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
//------------------------------CREATE----------------------------------
    app.post('/api/product/new', ProductController.createProduct);
    
//------------------------------DISPLAY ALL-----------------------------
    app.get('/api/products', ProductController.showAllProducts);

//------------------------------DISPLAY ONE-----------------------------
    app.get('/api/product/:id')

//------------------------------UPDATE----------------------------------
//------------------------------DELETE----------------------------------
}