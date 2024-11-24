const express = require('express');
const { addProduct, updateProductDetails, removeProduct, fetchProducts, fetchProductById, fetchAllProducts, addProductReview, fetchTopProducts, fetchNewProducts, filterProducts } = require('../controllers/authController');

const router = express.Router();

router.post('/addProduct', addProduct);
router.post('/updateProductDetails', updateProductDetails);
router.post('/removeProduct', removeProduct);
router.post('/fetchProducts', fetchProducts);
router.post('/fetchProductById', fetchProductById);
router.post('/fetchAllProducts', fetchAllProducts);
router.post('/addProductReview', addProductReview);
router.post('/fetchTopProducts', fetchTopProducts);
router.post('/fetchNewProducts', fetchNewProducts);
router.post('/filterProducts', filterProducts);


module.exports = router;
