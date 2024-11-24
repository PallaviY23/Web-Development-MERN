const express = require('express');
const { createOrder, getAllOrders, getUserOrders, countTotalOrders, calculateTotalSales, calcualteTotalSalesByDate, findOrderById, markOrderAsPaid, markOrderAsDelivered } = require('../controllers/orderControllers');

const router = express.Router();

router.post('/createOrder', createOrder);
router.post('/getAllOrder', getAllOrders);
router.post('/getUserOrders', getUserOrders);
router.post('/countTotalOrders', countTotalOrders);
router.post('/calculateTotalSales', calculateTotalSales);
router.post('/calculateTotalSalesByDate', calcualteTotalSalesByDate);
router.post('/findOrderBbyId', findOrderById);
router.post('/markOrderAsPaid', markOrderAsPaid);
router.post('/markOrderAsdelivered', markOrderAsDelivered);

module.exports = router;