const router= require('express').Router();
const authenticateToken = require('../Middlewares/authenticateToken');
const {addToCart}= require('../Controllers/cartController');
router.post('/add', authenticateToken, addToCart);

module.exports = router;