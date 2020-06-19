const express = require('express');
const router = express.Router();
const productRouter = require('./product');

router.use('/products', productRouter); //membuat prefix endpoints yg akan dilanjutkan oleh postfix di productRouter

module.exports = router;