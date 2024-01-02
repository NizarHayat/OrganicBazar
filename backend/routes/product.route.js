// const express = require('express');
// const router = express.Router();
// const productController = require('../controllers/product.controller');

// // Updated routes to match controller methods
// router.get('/products', productController.getAllProducts);
// router.get('/products/:id', productController.getProductById);
// router.post('/products', productController.createProduct);
// router.put('/products/:id', productController.updateProductById);
// router.delete('/products/:id', productController.deleteProductById);

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller.js');
const multer = require('multer');


const upload = multer();


router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', upload.single('image'), productController.createProduct);
router.put('/products/:id', upload.single('image'), productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
