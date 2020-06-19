const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

//endpointsnya adalah postfix
router.get('/', productController.getAllProducts);
router.post('/', productController.postProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;