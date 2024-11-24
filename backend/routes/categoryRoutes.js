const express = require('express');
const { createCategory, updateCategory, removeCategory, listCategory, readCategory } = require('../controllers/categoryControllers');

const router = express.Router();

router.post('/createcategory' , createCategory);
router.post('/updatecategory' , updateCategory);
router.post('/removecategory' , removeCategory);
router.post('/listcategory' , listCategory);
router.post('/readcategory' , readCategory);

module.exports = router;
