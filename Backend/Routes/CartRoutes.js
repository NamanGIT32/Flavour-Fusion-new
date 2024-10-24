const router= require('express').Router();
const authenticateToken = require('../Middlewares/authenticateToken');
const {addToCart, getCartItems, deleteCartItem, emptyCart}= require('../Controllers/cartController');
router.post('/add', authenticateToken, addToCart);
router.get('/', authenticateToken, getCartItems);
router.post('/delete', authenticateToken, deleteCartItem);
router.post('/empty', authenticateToken, emptyCart);

module.exports = router;